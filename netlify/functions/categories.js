// Netlify Function para obtener categorías de WooCommerce
const fetch = require('node-fetch');

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
    // Configuración de la API de WooCommerce usando variables de entorno
    const baseUrl = process.env.WOOCOMMERCE_BASE_URL || "https://cralineacionestienda.hstn.me/wp-json/wc/v3";
    const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
    const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

    // Verificar que las variables de entorno estén configuradas
    if (!consumerKey || !consumerSecret) {
      console.error("Missing WooCommerce API credentials");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: "WooCommerce API credentials not configured. Please set WOOCOMMERCE_CONSUMER_KEY and WOOCOMMERCE_CONSUMER_SECRET environment variables." 
        }),
      };
    }
    
    // Obtener todas las categorías que tengan productos
    const url = `${baseUrl}/products/categories?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=100&hide_empty=true`;
    
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
