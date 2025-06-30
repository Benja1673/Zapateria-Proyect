"use client"

import { useState, useMemo } from "react"

interface Product {
  id: string
  name: string
  subtitle: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  colors: string[]
  rating: number
  reviews: number
  brand?: string
}

interface FilterState {
  searchTerm: string
  selectedBrands: string[]
  selectedTypes: string[]
  priceRange: [number, number]
  sortBy: "relevance" | "name-asc" | "name-desc" | "price-asc" | "price-desc"
}

export function useFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedBrands: [],
    selectedTypes: [],
    priceRange: [0, 200000],
    sortBy: "relevance",
  })

  // Extraer marcas únicas de los productos
  const availableBrands = useMemo(() => {
    const brands = products.map((p) => p.brand || p.name).filter(Boolean)
    return [...new Set(brands)].sort()
  }, [products])

  // Extraer tipos únicos basados en palabras clave en el nombre/subtítulo
  const availableTypes = useMemo(() => {
    const types = new Set<string>()
    products.forEach((product) => {
      const text = `${product.name} ${product.subtitle}`.toLowerCase()

      if (text.includes("botín") || text.includes("botin")) types.add("Botines")
      if (text.includes("bota")) types.add("Botas")
      if (text.includes("zapatilla")) types.add("Zapatillas")
      if (text.includes("zapato") && !text.includes("zapatilla")) types.add("Zapatos")
      if (text.includes("sandalia")) types.add("Sandalias")
      if (text.includes("mocasín") || text.includes("mocasin")) types.add("Mocasines")
      if (text.includes("deportiv")) types.add("Deportivos")
      if (text.includes("casual")) types.add("Casuales")
      if (text.includes("formal")) types.add("Formales")
      if (text.includes("outdoor") || text.includes("hiking") || text.includes("trail")) types.add("Outdoor")
    })
    return Array.from(types).sort()
  }, [products])

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      // Filtro por búsqueda
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase()
        const matchesSearch =
          product.name.toLowerCase().includes(searchLower) ||
          product.subtitle.toLowerCase().includes(searchLower) ||
          (product.brand && product.brand.toLowerCase().includes(searchLower))

        if (!matchesSearch) return false
      }

      // Filtro por marca
      if (filters.selectedBrands.length > 0) {
        const productBrand = product.brand || product.name
        if (!filters.selectedBrands.includes(productBrand)) return false
      }

      // Filtro por tipo
      if (filters.selectedTypes.length > 0) {
        const text = `${product.name} ${product.subtitle}`.toLowerCase()
        const matchesType = filters.selectedTypes.some((type) => {
          switch (type) {
            case "Botines":
              return text.includes("botín") || text.includes("botin")
            case "Botas":
              return text.includes("bota") && !text.includes("botín") && !text.includes("botin")
            case "Zapatillas":
              return text.includes("zapatilla")
            case "Zapatos":
              return text.includes("zapato") && !text.includes("zapatilla")
            case "Sandalias":
              return text.includes("sandalia")
            case "Mocasines":
              return text.includes("mocasín") || text.includes("mocasin")
            case "Deportivos":
              return text.includes("deportiv")
            case "Casuales":
              return text.includes("casual")
            case "Formales":
              return text.includes("formal")
            case "Outdoor":
              return text.includes("outdoor") || text.includes("hiking") || text.includes("trail")
            default:
              return false
          }
        })
        if (!matchesType) return false
      }

      // Filtro por rango de precio
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      return true
    })

    // Ordenar productos
    switch (filters.sortBy) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      default:
        // Mantener orden original (relevancia)
        break
    }

    return filtered
  }, [products, filters])

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      selectedBrands: [],
      selectedTypes: [],
      priceRange: [0, 200000],
      sortBy: "relevance",
    })
  }

  return {
    filters,
    filteredProducts,
    availableBrands,
    availableTypes,
    updateFilters,
    clearFilters,
    totalResults: filteredProducts.length,
  }
}
