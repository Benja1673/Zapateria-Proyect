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

export default function MujerPage() {
  const userId = "user_demo_123"
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: "mujer_1",
      name: "Modare",
      subtitle: "Zapatos de Tacón Alto Vino Mujer",
      price: 52990,
      originalPrice: 74990,
      discount: 29,
      image: "/images/zapato-tacon-vino.png",
      colors: ["vino", "negro"],
      rating: 4.6,
      reviews: 12,
      brand: "Modare",
    },
    {
      id: "mujer_2",
      name: "Piccadilly",
      subtitle: "Zapatos Planos con Ojales Negro",
      price: 38990,
      originalPrice: 54990,
      discount: 29,
      image: "/images/zapato-plano-negro-ojales.png",
      colors: ["negro"],
      rating: 4.3,
      reviews: 8,
      brand: "Piccadilly",
    },
    {
      id: "mujer_3",
      name: "Bata",
      subtitle: "Botas Altas Cuero Negro con Hebilla",
      price: 67990,
      originalPrice: 89990,
      discount: 24,
      image: "/images/bota-alta-negra-hebilla.png",
      colors: ["negro", "café"],
      rating: 4.7,
      reviews: 15,
      brand: "Bata",
    },
    {
      id: "mujer_4",
      name: "Adidas",
      subtitle: "Zapatillas Deportivas Azul Mujer",
      price: 59990,
      originalPrice: 79990,
      discount: 25,
      image: "/images/zapatilla-adidas-azul.png",
      colors: ["azul", "blanco"],
      rating: 4.8,
      reviews: 22,
      brand: "Adidas",
    },
    {
      id: "mujer_5",
      name: "Columbia",
      subtitle: "Zapatillas Outdoor Azul Marino",
      price: 72990,
      originalPrice: 99990,
      discount: 27,
      image: "/images/zapatilla-outdoor-azul.png",
      colors: ["azul", "gris"],
      rating: 4.5,
      reviews: 10,
      brand: "Columbia",
    },
    {
      id: "mujer_6",
      name: "Adidas",
      subtitle: "Zapatillas Blancas Clásicas Mujer",
      price: 54990,
      originalPrice: 74990,
      discount: 27,
      image: "/images/zapatilla-adidas-blanca.png",
      colors: ["blanco", "gris"],
      rating: 4.9,
      reviews: 28,
      brand: "Adidas",
    },
    {
      id: "mujer_7",
      name: "Clarks",
      subtitle: "Zapatos de Tacón Vino con Correa",
      price: 79990,
      originalPrice: 109990,
      discount: 27,
      image: "/images/zapato-tacon-vino-correa.png",
      colors: ["vino", "negro"],
      rating: 4.5,
      reviews: 16,
      brand: "Clarks",
    },
    {
      id: "mujer_8",
      name: "Dr. Martens",
      subtitle: "Botín Chelsea Negro Cuero Premium",
      price: 89990,
      originalPrice: 119990,
      discount: 25,
      image: "/images/botin-negro-chelsea.png",
      colors: ["negro"],
      rating: 4.8,
      reviews: 21,
      brand: "Dr. Martens",
    },
    {
      id: "mujer_9",
      name: "Sorel",
      subtitle: "Bota de Invierno Negra con Peluche",
      price: 94990,
      originalPrice: 129990,
      discount: 27,
      image: "/images/bota-invierno-negra-peluche.png",
      colors: ["negro", "gris"],
      rating: 4.7,
      reviews: 13,
      brand: "Sorel",
    },
    {
      id: "mujer_10",
      name: "UGG",
      subtitle: "Bota Camel Cómoda con Botón Decorativo",
      price: 119990,
      originalPrice: 159990,
      discount: 25,
      image: "/images/bota-ugg-camel-boton.png",
      colors: ["camel", "beige"],
      rating: 4.9,
      reviews: 35,
      brand: "UGG",
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
          <Navigation currentPage="mujer" />
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
                  placeholder="Buscar calzado para mujer..."
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
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Calzado para Mujer</h1>
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
