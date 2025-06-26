"use client"

import { useState, useEffect } from "react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: { url: string; isPrimary: boolean }[]
  brand: { name: string }
}

interface Favorite {
  id: string
  productId: string
  product: Product
}

export function useFavorites(userId: string) {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(false)

  const fetchFavorites = async () => {
    if (!userId) return

    try {
      setLoading(true)
      const response = await fetch(`/api/favorites?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        setFavorites(data)
      }
    } catch (error) {
      console.error("Error al cargar favoritos:", error)
    } finally {
      setLoading(false)
    }
  }

  const addToFavorites = async (productId: string) => {
    try {
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
      })

      if (response.ok) {
        await fetchFavorites()
        return true
      }
    } catch (error) {
      console.error("Error al agregar a favoritos:", error)
    }
    return false
  }

  const removeFromFavorites = async (productId: string) => {
    try {
      const response = await fetch(`/api/favorites?userId=${userId}&productId=${productId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchFavorites()
        return true
      }
    } catch (error) {
      console.error("Error al eliminar de favoritos:", error)
    }
    return false
  }

  const isFavorite = (productId: string) => {
    return favorites.some((fav) => fav.productId === productId)
  }

  useEffect(() => {
    fetchFavorites()
  }, [userId])

  return {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    refetch: fetchFavorites,
  }
}
