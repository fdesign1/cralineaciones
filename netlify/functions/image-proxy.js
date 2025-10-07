const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Solo permitir GET
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { url } = event.queryStringParameters;
  
  if (!url) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  try {
    // Decodificar la URL
    const imageUrl = decodeURIComponent(url);
    
    // Validar que sea una URL válida
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      return { statusCode: 400, body: 'Invalid URL' };
    }

    // Fetch de la imagen con headers apropiados
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CR Alineaciones/1.0)',
        'Accept': 'image/*',
        'Referer': 'https://cralineaciones.com'
      },
      timeout: 10000 // 10 segundos timeout
    });

    if (!response.ok) {
      return { 
        statusCode: response.status, 
        body: `Failed to fetch image: ${response.statusText}` 
      };
    }

    const imageBuffer = await response.buffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // Cache por 24 horas
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: imageBuffer.toString('base64'),
      isBase64Encoded: true
    };

  } catch (error) {
    console.error('Image proxy error:', error);
    return { 
      statusCode: 500, 
      body: `Internal server error: ${error.message}` 
    };
  }
};
