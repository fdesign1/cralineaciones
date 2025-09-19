import React, { useState, useEffect } from 'react';

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
}

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export default function WordPress() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Función para obtener el estado del stock
  const getStockStatus = (status: string) => {
    switch (status) {
      case 'instock':
        return { 
          text: 'En stock',
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
      // Usar URL relativa en producción, localhost en desarrollo
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? "http://localhost:8888/.netlify/functions/categories"
        : "/.netlify/functions/categories";
        
      console.log("Fetching categories from:", apiUrl);
      const response = await fetch(apiUrl);
      if (response.ok) {
        const categoriesData = await response.json();
        console.log("Categories loaded:", categoriesData.length);
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
    const apiUrl = process.env.NODE_ENV === 'development' 
      ? "http://localhost:8888/.netlify/functions/products"
      : "/.netlify/functions/products";
      
    console.log("Fetching products from:", apiUrl);
    
    fetch(apiUrl)
      .then(async (res) => {
        console.log("Response received:", res.status, res.statusText);
        console.log("Response headers:", res.headers.get('content-type'));
        
        if (!res.ok) {
          const errorText = await res.text();
          console.error("Response not OK:", res.status, errorText);
          throw new Error(`HTTP error! status: ${res.status} - ${errorText}`);
        }
        
        return res;
      })
      .then(async (res) => {
        const responseText = await res.text();
        console.log("Raw response text length:", responseText.length);
        console.log("Response text preview:", responseText.substring(0, 200));
        
        try {
          const data = JSON.parse(responseText);
          return data;
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);
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
        console.log("Using fallback mock products");
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
      });
  }, []);

  // Función para limpiar HTML
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Función para filtrar productos
  const filterProducts = (categorySlug: string, search: string) => {
    let filtered = products;

    // Filtrar por categoría
    if (categorySlug !== 'all') {
      filtered = filtered.filter(product =>
        product.categories.some(cat => cat.slug === categorySlug)
      );
    }

    // Filtrar por búsqueda
    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Manejar cambio de categoría
  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    filterProducts(categorySlug, searchTerm);
  };

  // Manejar cambio de búsqueda
  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    filterProducts(selectedCategory, search);
  };

  // Abrir modal con producto seleccionado
  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-lg">Cargando productos...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
        <p className="text-gray-600">
          No se pudieron cargar los productos desde la API. Se están mostrando productos de ejemplo.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Productos</h1>
        <p className="text-gray-600">
          Explora nuestra amplia gama de productos automotrices de alta calidad
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-8 space-y-4">
        {/* Búsqueda */}
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Categorías - Dropdown */}
        {categories.length > 0 && (
          <div className="max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="all">Todas las categorías ({products.length})</option>
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => {
          const stockInfo = getStockStatus(p.stock_status);
          
          return (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(p)}
            >
              <div className="relative">
                <img
                  src={p.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='14'%3EProducto%3C/text%3E%3C/svg%3E"}
                  alt={p.images[0]?.alt || p.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='14'%3EProducto%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Badge de stock */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockInfo.color}`}>
                    {stockInfo.text}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
                  {p.name}
                </h3>
                
                {/* Descripción corta */}
                {p.short_description && (
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {stripHtml(p.short_description)}
                  </p>
                )}
                
                {/* Categorías del producto */}
                {p.categories && p.categories.length > 0 && (
                  <div className="mb-3">
                    {p.categories.slice(0, 2).map((category) => (
                      <span
                        key={category.id}
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1 border border-blue-300"
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

          {/* Modal */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* Imagen */}
                <div className="space-y-4">
                  <img
                    src={selectedProduct.images[0]?.src || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='18'%3EImagen no disponible%3C/text%3E%3C/svg%3E"}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  
                  {/* Miniaturas adicionales si hay más imágenes */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto">
                      {selectedProduct.images.slice(1, 4).map((image, index) => (
                        <img
                          key={index}
                          src={image.src}
                          alt={image.alt || `${selectedProduct.name} ${index + 2}`}
                          className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Información del producto */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedProduct.name}
                    </h2>
                    
                    {/* Estado de stock */}
                    <div className="mb-4">
                      {(() => {
                        const stockInfo = getStockStatus(selectedProduct.stock_status);
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
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">Categorías</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.categories.map((category) => (
                          <span
                            key={category.id}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-300"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Descripción */}
                  {selectedProduct.description && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">Descripción</h3>
                      <div 
                        className="text-gray-700 prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
                      />
                    </div>
                  )}

                  {/* Botón de acción */}
                  <div className="flex justify-center">
                    <a 
                      href="https://wa.me/5492914460056?text=Hola, me interesa el producto: " 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Contacta por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mensaje si no hay productos */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No se encontraron productos</div>
          <p className="text-gray-400">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Intenta cambiar los filtros de búsqueda'
              : 'No hay productos disponibles en este momento'
            }
          </p>
        </div>
      )}
    </div>
  );
}