"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FiltersSidebarProps {
  availableBrands: string[]
  availableTypes: string[]
  selectedBrands: string[]
  selectedTypes: string[]
  priceRange: [number, number]
  onBrandChange: (brands: string[]) => void
  onTypeChange: (types: string[]) => void
  onPriceRangeChange: (range: [number, number]) => void
  onClearFilters: () => void
  totalResults: number
}

export default function FiltersSidebar({
  availableBrands,
  availableTypes,
  selectedBrands,
  selectedTypes,
  priceRange,
  onBrandChange,
  onTypeChange,
  onPriceRangeChange,
  onClearFilters,
  totalResults,
}: FiltersSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    types: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleBrandToggle = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand]
    onBrandChange(newBrands)
  }

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type) ? selectedTypes.filter((t) => t !== type) : [...selectedTypes, type]
    onTypeChange(newTypes)
  }

  const activeFiltersCount =
    selectedBrands.length + selectedTypes.length + (priceRange[0] > 0 || priceRange[1] < 200000 ? 1 : 0)

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filtros</h2>
            {activeFiltersCount > 0 && <Badge variant="secondary">{activeFiltersCount}</Badge>}
          </div>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              <X className="h-4 w-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>
        <div className="text-sm text-gray-600">
          {totalResults} producto{totalResults !== 1 ? "s" : ""} encontrado{totalResults !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Filtro por Tipo */}
        <Card>
          <CardHeader className="pb-3">
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
              onClick={() => toggleSection("types")}
            >
              <CardTitle className="text-sm font-medium">Tipo de Calzado</CardTitle>
              {expandedSections.types ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CardHeader>
          {expandedSections.types && (
            <CardContent className="pt-0">
              <div className="space-y-3">
                {availableTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={() => handleTypeToggle(type)}
                    />
                    <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Filtro por Marca */}
        <Card>
          <CardHeader className="pb-3">
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
              onClick={() => toggleSection("brands")}
            >
              <CardTitle className="text-sm font-medium">Marca</CardTitle>
              {expandedSections.brands ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CardHeader>
          {expandedSections.brands && (
            <CardContent className="pt-0">
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {availableBrands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => handleBrandToggle(brand)}
                    />
                    <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Filtro por Precio */}
        <Card>
          <CardHeader className="pb-3">
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
              onClick={() => toggleSection("price")}
            >
              <CardTitle className="text-sm font-medium">Rango de Precio</CardTitle>
              {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CardHeader>
          {expandedSections.price && (
            <CardContent className="pt-0">
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={(value: number[]) => onPriceRangeChange(value as [number, number])}
                  max={200000}
                  min={0}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPriceRangeChange([0, 50000])}
                    className="text-xs"
                  >
                    Hasta $50k
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPriceRangeChange([50000, 100000])}
                    className="text-xs"
                  >
                    $50k - $100k
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPriceRangeChange([100000, 150000])}
                    className="text-xs"
                  >
                    $100k - $150k
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPriceRangeChange([150000, 200000])}
                    className="text-xs"
                  >
                    Más de $150k
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}
