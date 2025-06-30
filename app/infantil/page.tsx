"use client"
import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"
import FiltersSidebar from "@/components/filters-sidebar"
import SearchBar from "@/components/search-bar"
import SortDropdown from "@/components/sort-dropdown"
import { useFilters } from "@/hooks/useFilters"

export default function InfantilPage() {
  const userId = "user_demo_123"
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: "prod_capitan_america",
      name: "Marvel",
      subtitle: "Zapatillas Capitán América Infantil",
      price: 35990,
      originalPrice: 49990,
      discount: 28,
      image: "/images/zapatilla-capitan-america.png",
      colors: ["azul", "rojo", "blanco"],
      rating: 4.8,
      reviews: 15,
      brand: "Marvel",
    },
    {
      id: "infantil_2",
      name: "Marvel",
      subtitle: "Zapatillas Spider-Man Botín Infantil",
      price: 42990,
      originalPrice: 59990,
      discount: 28,
      image: "/images/zapatilla-spiderman-botin.png",
      colors: ["negro", "rojo"],
      rating: 4.6,
      reviews: 12,
      brand: "Marvel",
    },
    {
      id: "infantil_3",
      name: "Bubble Gummers",
      subtitle: "Zapatillas Deportivas Infantil",
      price: 29990,
      originalPrice: 39990,
      discount: 25,
      image: "/images/zapatilla-bubble-gummers.png",
      colors: ["gris", "amarillo"],
      rating: 4.5,
      reviews: 8,
      brand: "Bubble Gummers",
    },
    {
      id: "infantil_4",
      name: "Marvel",
      subtitle: "Zapatillas Spider-Man Azul Infantil",
      price: 38990,
      originalPrice: 54990,
      discount: 29,
      image: "/images/zapatilla-spiderman-azul.png",
      colors: ["azul", "rojo"],
      rating: 4.7,
      reviews: 10,
      brand: "Marvel",
    },
    {
      id: "infantil_5",
      name: "Nike",
      subtitle: "Zapatillas Deportivas Azul Marino",
      price: 45990,
      originalPrice: 64990,
      discount: 29,
      image: "/images/zapatilla-azul-marino.png",
      colors: ["azul"],
      rating: 4.3,
      reviews: 6,
      brand: "Nike",
    },
    {
      id: "infantil_6",
      name: "Adidas",
      subtitle: "Zapatillas Blancas con Detalles Neón",
      price: 52990,
      originalPrice: 74990,
      discount: 29,
      image: "/images/zapatilla-blanca-neon.png",
      colors: ["blanco", "negro", "verde"],
      rating: 4.9,
      reviews: 20,
      brand: "Adidas",
    },
    {
      id: "infantil_7",
      name: "Puma",
      subtitle: "Zapatillas Azul con Verde Neón",
      price: 41990,
      originalPrice: 59990,
      discount: 30,
      image: "/images/zapatilla-azul-verde.png",
      colors: ["azul", "verde"],
      rating: 4.4,
      reviews: 14,
      brand: "Puma",
    },
    {
      id: "infantil_8",
      name: "Converse",
      subtitle: "Zapatillas Negras Suela Marrón",
      price: 33990,
      originalPrice: 47990,
      discount: 29,
      image: "/images/zapatilla-negra-suela-marron.png",
      colors: ["negro", "marrón"],
      rating: 4.6,
      reviews: 9,
      brand: "Converse",
    },
    {
      id: "infantil_9",
      name: "Fila",
      subtitle: "Zapatillas Blancas Clásicas",
      price: 28990,
      originalPrice: 39990,
      discount: 27,
      image: "/images/zapatilla-blanca-clasica.png",
      colors: ["blanco"],
      rating: 4.5,
      reviews: 11,
      brand: "Fila",
    },
    {
      id: "infantil_10",
      name: "Nike",
      subtitle: "Zapatillas Deportivas Rosa Niña",
      price: 47990,
      originalPrice: 67990,
      discount: 29,
      image: "/images/zapatilla-nike-rosa-infantil.png",
      colors: ["rosa", "blanco"],
      rating: 4.7,
      reviews: 18,
      brand: "Nike",
    },
  ]

  const { filters, filteredProducts, availableBrands, availableTypes, updateFilters, clearFilters, totalResults } =
    useFilters(products)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-2 text-sm">
        DESPACHO GRATIS sólo Región Metropolitana por compras sobre $29.990
      </div>

      {/* Header */}
      <Header userId={userId} />

      {/* Navigation */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <Navigation currentPage="infantil" />
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="bg-white md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <div className="flex-1 md:w-96">
                <SearchBar
                  searchTerm={filters.searchTerm}
                  onSearchChange={(term) => updateFilters({ searchTerm: term })}
                  placeholder="Buscar calzado infantil..."
                />
              </div>
            </div>
            <SortDropdown sortBy={filters.sortBy} onSortChange={(sortBy) => updateFilters({ sortBy: sortBy as any })} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Desktop Filters Sidebar */}
        <div className={`hidden md:block ${showFilters ? "block" : "hidden"}`}>
          <FiltersSidebar
            availableBrands={availableBrands}
            availableTypes={availableTypes}
            selectedBrands={filters.selectedBrands}
            selectedTypes={filters.selectedTypes}
            priceRange={filters.priceRange}
            onBrandChange={(brands) => updateFilters({ selectedBrands: brands })}
            onTypeChange={(types) => updateFilters({ selectedTypes: types })}
            onPriceRangeChange={(range) => updateFilters({ priceRange: range })}
            onClearFilters={clearFilters}
            totalResults={totalResults}
          />
        </div>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowFilters(false)} />
            <div className="absolute left-0 top-0 h-full bg-white w-80 shadow-lg">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                    ✕
                  </Button>
                </div>
              </div>
              <FiltersSidebar
                availableBrands={availableBrands}
                availableTypes={availableTypes}
                selectedBrands={filters.selectedBrands}
                selectedTypes={filters.selectedTypes}
                priceRange={filters.priceRange}
                onBrandChange={(brands) => updateFilters({ selectedBrands: brands })}
                onTypeChange={(types) => updateFilters({ selectedTypes: types })}
                onPriceRangeChange={(range) => updateFilters({ priceRange: range })}
                onClearFilters={clearFilters}
                totalResults={totalResults}
              />
            </div>
          </div>
        )}

        {/* Products Grid */}
        <main className="flex-1 container mx-auto px-4 py-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">No se encontraron productos</h2>
              <p className="text-gray-600 mb-6">Intenta ajustar tus filtros o términos de búsqueda</p>
              <Button onClick={clearFilters} className="bg-red-600 hover:bg-red-700">
                Limpiar Filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Calzado Infantil</h1>
                <p className="text-gray-600">
                  {totalResults} producto{totalResults !== 1 ? "s" : ""} encontrado{totalResults !== 1 ? "s" : ""}
                  {filters.searchTerm && ` para "${filters.searchTerm}"`}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} userId={userId} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
