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

interface CartItem {
  id: string
  quantity: number
  size?: string
  color?: string
  product: Product
}

interface CartData {
  items: CartItem[]
  total: number
  itemCount: number
}

export function useCart(userId: string) {
  const [cart, setCart] = useState<CartData>({ items: [], total: 0, itemCount: 0 })
  const [loading, setLoading] = useState(false)

  const fetchCart = async () => {
    if (!userId) return

    try {
      setLoading(true)
      const response = await fetch(`/api/cart?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        setCart(data)
      }
    } catch (error) {
      console.error("Error al cargar carrito:", error)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (productId: string, quantity = 1, size?: string, color?: string) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity, size, color }),
      })

      if (response.ok) {
        await fetchCart()
        return true
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error)
    }
    return false
  }

  const updateQuantity = async (cartItemId: string, quantity: number) => {
    try {
      const response = await fetch("/api/cart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItemId, quantity }),
      })

      if (response.ok) {
        await fetchCart()
        return true
      }
    } catch (error) {
      console.error("Error al actualizar carrito:", error)
    }
    return false
  }

  const removeFromCart = async (cartItemId: string) => {
    try {
      const response = await fetch(`/api/cart?cartItemId=${cartItemId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchCart()
        return true
      }
    } catch (error) {
      console.error("Error al eliminar del carrito:", error)
    }
    return false
  }

  useEffect(() => {
    fetchCart()
  }, [userId])

  return {
    cart,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    refetch: fetchCart,
  }
}
