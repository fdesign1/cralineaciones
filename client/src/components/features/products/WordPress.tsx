import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  images: { src: string }[];
}

export default function WordPress() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Starting to fetch products...");
    
    fetch("http://localhost:8888/.netlify/functions/products")
      .then(async (res) => {
        console.log("Response received:", res.status, res.statusText);
        console.log("Response headers:", res.headers.get('content-type'));
        
        if (!res.ok) {
          const errorText = await res.text();
          console.error("Response not OK:", res.status, errorText);
          throw new Error(`HTTP error! status: ${res.status} - ${errorText}`);
        }
        
        const responseText = await res.text();
        console.log("Raw response text (first 300 chars):", responseText.substring(0, 300));
        
        try {
          const data = JSON.parse(responseText);
          return data;
        } catch (parseError) {
          console.error("JSON parse error:", parseError);
          console.error("Response that failed to parse:", responseText);
          throw new Error(`JSON parse error: ${parseError.message}`);
        }
      })
      .then((data) => {
        console.log("Successfully parsed API Response:", data);
        console.log("Number of products:", data.length);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Complete error details:", err);
        console.error("Error message:", err.message);
        console.error("Error stack:", err.stack);
        setError(err.message);
        setLoading(false);
        
        // Datos de prueba para verificar que el componente funciona
        const mockProducts: Product[] = [
          {
            id: 1,
            name: "Producto de Prueba 1",
            price: "25.99",
            images: [{ src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='14'%3EProducto 1%3C/text%3E%3C/svg%3E" }]
          },
          {
            id: 2,
            name: "Producto de Prueba 2", 
            price: "35.50",
            images: [{ src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='14'%3EProducto 2%3C/text%3E%3C/svg%3E" }]
          }
        ];
        setProducts(mockProducts);
      });
  }, []);

  if (loading) return (
    <div className="p-8">
      <p className="text-lg">Cargando productos...</p>
    </div>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      
      {error && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
          <p><strong>Aviso:</strong> Error conectando con la API: {error}</p>
          <p>Mostrando productos de prueba...</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow-md">
            <img 
              src={p.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='12'%3ESin imagen%3C/text%3E%3C/svg%3E"} 
              alt={p.name} 
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-lg font-bold text-green-600">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
