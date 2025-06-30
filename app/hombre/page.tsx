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

export default function HombrePage() {
  const userId = "user_demo_123"
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: "prod_botin_guante",
      name: "Guante",
      subtitle: "Botín Dallas Cuero 35640 Hombre",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      image: "/images/zapato-botin-marron.png",
      colors: ["negro", "café"],
      rating: 5,
      reviews: 0,
      brand: "Guante",
    },
    {
      id: "prod_zapato_caterpillar",
      name: "Caterpillar",
      subtitle: "Zapato Deportivo Urbano Negro",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      image: "/images/zapato-deportivo-negro.png",
      colors: ["negro", "gris"],
      rating: 4.8,
      reviews: 12,
      brand: "Caterpillar",
    },
    {
      id: "prod_bota_panama",
      name: "Panama Jack",
      subtitle: "Bota Outdoor Cuero Negro",
      price: 44990,
      originalPrice: 73990,
      discount: 39,
      image: "/images/bota-negra-outdoor.png",
      colors: ["negro"],
      rating: 4.5,
      reviews: 8,
      brand: "Panama Jack",
    },
    {
      id: "hombre_4",
      name: "Florsheim",
      subtitle: "Botín Casual Lodge Chukka Negro",
      price: 104990,
      originalPrice: 149990,
      discount: 30,
      image: "/images/botin-negro-cuero-formal.png",
      colors: ["negro"],
      rating: 4.7,
      reviews: 15,
      brand: "Florsheim",
    },
    {
      id: "hombre_5",
      name: "Timberland",
      subtitle: "Bota Clásica 6-Inch Premium Camel",
      price: 89990,
      originalPrice: 119990,
      discount: 25,
      image: "/images/bota-timberland-camel.png",
      colors: ["camel", "miel"],
      rating: 4.9,
      reviews: 32,
      brand: "Timberland",
    },
    {
      id: "hombre_6",
      name: "Merrell",
      subtitle: "Zapatilla Outdoor Hiking Beige",
      price: 67990,
      originalPrice: 89990,
      discount: 24,
      image: "/images/zapatilla-outdoor-beige.png",
      colors: ["beige", "caqui"],
      rating: 4.6,
      reviews: 18,
      brand: "Merrell",
    },
    {
      id: "hombre_7",
      name: "Salomon",
      subtitle: "Zapatilla Hiking Técnica Negra",
      price: 79990,
      originalPrice: 109990,
      discount: 27,
      image: "/images/zapatilla-hiking-negra.png",
      colors: ["negro", "gris"],
      rating: 4.8,
      reviews: 24,
      brand: "Salomon",
    },
    {
      id: "hombre_8",
      name: "Columbia",
      subtitle: "Zapatilla Deportiva Outdoor Negra",
      price: 59990,
      originalPrice: 79990,
      discount: 25,
      image: "/images/zapatilla-deportiva-negra-gris.png",
      colors: ["negro", "gris"],
      rating: 4.4,
      reviews: 11,
      brand: "Columbia",
    },
    {
      id: "hombre_9",
      name: "Panama Jack",
      subtitle: "Bota Montaña Cuero Marrón Premium",
      price: 94990,
      originalPrice: 129990,
      discount: 27,
      image: "/images/bota-panama-jack-marron.png",
      colors: ["marrón", "negro"],
      rating: 4.7,
      reviews: 19,
      brand: "Panama Jack",
    },
    {
      id: "hombre_10",
      name: "The North Face",
      subtitle: "Zapatilla Trail Running Azul Técnica",
      price: 84990,
      originalPrice: 114990,
      discount: 26,
      image: "/images/zapatilla-trail-azul-naranja.png",
      colors: ["azul", "naranja"],
      rating: 4.6,
      reviews: 14,
      brand: "The North Face",
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
          <Navigation currentPage="hombre" />
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
                  placeholder="Buscar calzado para hombre..."
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
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Calzado para Hombre</h1>
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
