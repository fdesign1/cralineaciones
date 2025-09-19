import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  images: { src: string; alt?: string }[];
  categories: { id: number; name: string; slug: string }[];
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity?: number;
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para manejar el modal
  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Función para limpiar HTML de las descripciones
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Función para obtener el estado de stock
  const getStockStatus = (stockStatus: string, stockQuantity?: number) => {
    switch (stockStatus) {
      case 'instock':
        return { 
          text: stockQuantity ? `En stock (${stockQuantity})` : 'En stock',
          color: 'text-green-600 bg-green-100'
        };
      case 'outofstock':
        return { 
          text: 'Sin stock',
          color: 'text-red-600 bg-red-100'
        };
      case 'onbackorder':
        return { 
          text: 'Bajo pedido',
          color: 'text-yellow-600 bg-yellow-100'
        };
      default:
        return { 
          text: 'Consultar',
          color: 'text-gray-600 bg-gray-100'
        };
    }
  };

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
            regular_price: "25.99",
            sale_price: "",
            description: "Descripción del producto de prueba 1",
            short_description: "Producto de prueba",
            stock_status: 'instock',
            categories: [{ id: 1, name: "Categoría Prueba", slug: "categoria-prueba" }],
            images: [{ src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='14'%3EProducto 1%3C/text%3E%3C/svg%3E" }]
          },
          {
            id: 2,
            name: "Producto de Prueba 2", 
            price: "",
            regular_price: "",
            sale_price: "",
            description: "Producto sin precio para probar la funcionalidad",
            short_description: "Producto sin precio",
            stock_status: 'instock',
            categories: [{ id: 2, name: "Sin Precio", slug: "sin-precio" }],
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
          <label htmlFor="category" className="block text-sm font-medium text-gray-800 mb-2">
            Categoría
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
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
          <label htmlFor="sort" className="block text-sm font-medium text-gray-800 mb-2">
            Ordenar por
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
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
        <p className="text-gray-700 font-medium">
          Mostrando {filteredProducts.length} de {products.length} productos
          {selectedCategory !== "all" && (
            <span className="ml-2 text-blue-700 font-semibold">
              en "{categories.find(c => c.slug === selectedCategory)?.name}"
            </span>
          )}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((p) => {
          const stockInfo = getStockStatus(p.stock_status, p.stock_quantity);
          
          return (
            <div 
              key={p.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => openModal(p)}
            >
              {/* Imagen con hover effect */}
              <div className="relative overflow-hidden group">
                <img 
                  src={p.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='16'%3ESin imagen%3C/text%3E%3C/svg%3E"} 
                  alt={p.images[0]?.alt || p.name} 
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay con información adicional */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      Ver detalles
                    </span>
                  </div>
                </div>

                {/* Badge de stock */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockInfo.color}`}>
                    {stockInfo.text}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                  {p.name}
                </h3>
                
                {/* Descripción corta */}
                {p.short_description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {stripHtml(p.short_description)}
                  </p>
                )}
                
                {/* Categorías del producto */}
                {p.categories && p.categories.length > 0 && (
                  <div className="mb-3">
                    {p.categories.slice(0, 2).map((category) => (
                      <span
                        key={category.id}
                        className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full mr-1 mb-1 border border-blue-200"
                      >
                        {category.name}
                      </span>
                    ))}
                    {p.categories.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{p.categories.length - 2} más
                      </span>
                    )}
                  </div>
                )}
                
                {/* Precios */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {p.sale_price && p.sale_price !== p.regular_price && p.sale_price !== "0" && p.sale_price !== "" ? (
                      <>
                        <span className="text-xl font-bold text-red-600">${p.sale_price}</span>
                        {p.regular_price && p.regular_price !== "0" && p.regular_price !== "" && (
                          <span className="text-sm text-gray-500 line-through">${p.regular_price}</span>
                        )}
                      </>
                    ) : (p.regular_price && p.regular_price !== "0" && p.regular_price !== "") || (p.price && p.price !== "0" && p.price !== "") ? (
                      <span className="text-xl font-bold text-gray-800">${p.regular_price || p.price}</span>
                    ) : null}
                  </div>
                  
                  {/* Icono de ver más */}
                  <div className="text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal para detalles del producto */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-6">
                {/* Imagen del producto */}
                <div className="space-y-4">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-50">
                    <img
                      src={selectedProduct.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='20'%3ESin imagen%3C/text%3E%3C/svg%3E"}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Imágenes adicionales si las hay */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedProduct.images.slice(1, 5).map((image, index) => (
                        <img
                          key={index}
                          src={image.src}
                          alt={`${selectedProduct.name} ${index + 2}`}
                          className="w-16 h-16 object-cover rounded-lg bg-gray-50 flex-shrink-0"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Información del producto */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProduct.name}
                    </h2>
                    
                    {/* Estado de stock */}
                    <div className="mb-4">
                      {(() => {
                        const stockInfo = getStockStatus(selectedProduct.stock_status, selectedProduct.stock_quantity);
                        return (
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${stockInfo.color}`}>
                            {stockInfo.text}
                          </span>
                        );
                      })()}
                    </div>

                    {/* Precio */}
                    <div className="mb-6">
                      {selectedProduct.sale_price && selectedProduct.sale_price !== selectedProduct.regular_price && selectedProduct.sale_price !== "0" && selectedProduct.sale_price !== "" ? (
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-red-600">${selectedProduct.sale_price}</span>
                          {selectedProduct.regular_price && selectedProduct.regular_price !== "0" && selectedProduct.regular_price !== "" && (
                            <>
                              <span className="text-xl text-gray-500 line-through">${selectedProduct.regular_price}</span>
                              <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full">
                                -{Math.round(((parseFloat(selectedProduct.regular_price) - parseFloat(selectedProduct.sale_price)) / parseFloat(selectedProduct.regular_price)) * 100)}%
                              </span>
                            </>
                          )}
                        </div>
                      ) : (selectedProduct.regular_price && selectedProduct.regular_price !== "0" && selectedProduct.regular_price !== "") || (selectedProduct.price && selectedProduct.price !== "0" && selectedProduct.price !== "") ? (
                        <span className="text-3xl font-bold text-gray-900">${selectedProduct.regular_price || selectedProduct.price}</span>
                      ) : null}
                    </div>
                  </div>

                  {/* Categorías */}
                  {selectedProduct.categories && selectedProduct.categories.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Categorías:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.categories.map((category) => (
                          <span
                            key={category.id}
                            className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Descripción corta */}
                  {selectedProduct.short_description && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Resumen</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {stripHtml(selectedProduct.short_description)}
                      </p>
                    </div>
                  )}

                  {/* Descripción completa */}
                  {selectedProduct.description && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción completa</h3>
                      <div 
                        className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
                      />
                    </div>
                  )}

                  {/* Botón de contacto */}
                  <div className="pt-4 border-t">
                    <button 
                      onClick={() => {
                        window.open(`https://wa.me/5492914460056?text=Hola! Me interesa el producto: ${selectedProduct.name}`, '_blank');
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Consultar por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
