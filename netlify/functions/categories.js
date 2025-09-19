// Netlify Function para obtener categorías de WooCommerce
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
    // Configuración de la API de WooCommerce para categorías
    const baseUrl = "https://cralineacionestienda.hstn.me/wp-json/wc/v3/products/categories";
    const consumerKey = "ck_a47df54f63e8ec2a1c0247f81e4fb94a3a50814c";
    const consumerSecret = "cs_50a62db82ff046e432f7bd7a48a637a5fced008d";
    
    // Obtener todas las categorías que tengan productos
    const url = `${baseUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=100&hide_empty=true`;
    
    console.log("Fetching categories from:", url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      }
    });
    
    console.log("Categories response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Categories API Error:", response.status, response.statusText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `Categories API Error: ${response.status} ${response.statusText}`,
          response: errorText.substring(0, 500),
          url: baseUrl 
        }),
      };
    }

    const data = await response.json();
    console.log("SUCCESS! Categories received, count:", data.length || 0);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
    
  } catch (error) {
    console.error("Categories Function Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message,
        details: "Error en la función de categorías de Netlify" 
      }),
    };
  }
}
