import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  images: { src: string }[];
  categories: { id: number; name: string; slug: string }[];
  regular_price: string;
  sale_price: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export default function WordPress() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  // Función para obtener categorías
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8888/.netlify/functions/categories");
      if (response.ok) {
        const categoriesData = await response.json();
        setCategories(categoriesData);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    console.log("Starting to fetch products and categories...");
    
    // Fetch categories first
    fetchCategories();
    
    // Then fetch products
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
        setFilteredProducts(data);
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
        setFilteredProducts(mockProducts);
      });
  }, []);

  // Effect para filtrar por categoría
  useEffect(() => {
    console.log("Filtering products by category:", selectedCategory);
    console.log("Total products:", products.length);
    
    let filtered = products;
    
    if (selectedCategory !== "all") {
      console.log("Filtering by category:", selectedCategory);
      
      filtered = products.filter(product => {
        console.log("Product:", product.name, "Categories:", product.categories);
        return product.categories && product.categories.some(cat => {
          console.log("Checking category:", cat.slug, "against:", selectedCategory);
          return cat.slug === selectedCategory;
        });
      });
      
      console.log("Filtered products count:", filtered.length);
    }
    
    setFilteredProducts(filtered);
  }, [products, selectedCategory]);

  // Effect para ordenar productos después del filtrado
  useEffect(() => {
    if (filteredProducts.length === 0) return;
    
    console.log("Sorting products by:", sortBy);
    
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return parseFloat(a.regular_price || a.price || "0") - parseFloat(b.regular_price || b.price || "0");
        case "price-high":
          return parseFloat(b.regular_price || b.price || "0") - parseFloat(a.regular_price || a.price || "0");
        case "newest":
          return b.id - a.id;
        default:
          return 0;
      }
    });
    
    // Solo actualizar si realmente cambió el orden
    if (JSON.stringify(sorted) !== JSON.stringify(filteredProducts)) {
      setFilteredProducts(sorted);
    }
  }, [sortBy]);

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

      {/* Filtros y Ordenamiento */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Filtro por Categoría */}
        <div className="flex-1">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Categoría
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
        </div>

        {/* Ordenamiento */}
        <div className="flex-1">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Ordenar por
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Nombre (A-Z)</option>
            <option value="price-low">Precio (Menor a Mayor)</option>
            <option value="price-high">Precio (Mayor a Menor)</option>
            <option value="newest">Más Recientes</option>
          </select>
        </div>
      </div>

      {/* Contador de productos */}
      <div className="mb-4">
        <p className="text-gray-600">
          Mostrando {filteredProducts.length} de {products.length} productos
          {selectedCategory !== "all" && (
            <span className="ml-2 text-blue-600">
              en "{categories.find(c => c.slug === selectedCategory)?.name}"
            </span>
          )}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow-md">
            <img 
              src={p.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='12'%3ESin imagen%3C/text%3E%3C/svg%3E"} 
              alt={p.name} 
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            
            {/* Categorías del producto */}
            {p.categories && p.categories.length > 0 && (
              <div className="mb-2">
                {p.categories.map((category) => (
                  <span
                    key={category.id}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex items-center gap-2">
              {p.sale_price && p.sale_price !== p.regular_price ? (
                <>
                  <span className="text-lg font-bold text-red-600">${p.sale_price}</span>
                  <span className="text-sm text-gray-500 line-through">${p.regular_price}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-green-600">${p.regular_price || p.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
