// Netlify Function para obtener productos de WooCommerce
export async function handler(event, context) {
  // Headers CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Content-Type": "application/json",
  };

  // Manejar preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    // Configuración de la API de WooCommerce - usar la URL que sabemos que funciona
    const baseUrl = "https://cralineacionestienda.hstn.me/wp-json/wc/v3/products";
    const consumerKey = "ck_a47df54f63e8ec2a1c0247f81e4fb94a3a50814c";
    const consumerSecret = "cs_50a62db82ff046e432f7bd7a48a637a5fced008d";
    
    const url = `${baseUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    
    console.log("Fetching from:", url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      }
    });
    
    console.log("Response status:", response.status);
    console.log("Response headers content-type:", response.headers.get('content-type'));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", response.status, response.statusText);
      console.error("Error response:", errorText.substring(0, 500));
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `API Error: ${response.status} ${response.statusText}`,
          response: errorText.substring(0, 500),
          url: baseUrl 
        }),
      };
    }

    const data = await response.json();
    console.log("SUCCESS! API Response received, products count:", data.length || 0);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
    
  } catch (error) {
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message,
        details: "Error en la función de Netlify" 
      }),
    };
  }
}
