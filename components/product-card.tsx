"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { useFavorites } from "@/hooks/useFavorites"
import { useCart } from "@/hooks/useCart"
import { useState } from "react"

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

interface ProductCardProps {
  product: Product
  userId: string
}

export default function ProductCard({ product, userId }: ProductCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites(userId)
  const { addToCart } = useCart(userId)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false)

  const handleToggleFavorite = async () => {
    setIsTogglingFavorite(true)
    try {
      let message = ""
      if (isFavorite(product.id)) {
        await removeFromFavorites(product.id)
        message = "Producto eliminado de favoritos"
      } else {
        await addToFavorites(product.id)
        message = "¡Producto agregado a favoritos!"
      }

      // Mostrar notificación
      const notification = document.createElement("div")
      notification.className = "fixed top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
      notification.textContent = message
      document.body.appendChild(notification)
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 3000)
    } finally {
      setIsTogglingFavorite(false)
    }
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    try {
      const success = await addToCart(product.id)
      if (success) {
        const notification = document.createElement("div")
        notification.className = "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        notification.textContent = "¡Producto agregado al carrito!"
        document.body.appendChild(notification)
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 3000)
      }
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
              isFavorite(product.id) ? "text-red-600" : "text-gray-400"
            }`}
            onClick={handleToggleFavorite}
            disabled={isTogglingFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-current" : ""}`} />
          </Button>
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs">Despacho Gratis en App</Badge>
          )}
          {product.discount && (
            <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm text-gray-900">{product.brand || product.name}</h3>
          <p className="text-xs text-gray-600 mb-2">{product.subtitle}</p>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 text-xs">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mb-3">
            {product.originalPrice && (
              <div className="text-xs text-gray-500 line-through">${product.originalPrice.toLocaleString()}</div>
            )}
            <div className="flex items-center">
              {product.discount && (
                <span className="text-xs bg-red-100 text-red-600 px-1 rounded mr-2">{product.discount}%</span>
              )}
              <span className="font-bold text-sm">${product.price.toLocaleString()}</span>
            </div>
            {product.price <= 40990 && (
              <Badge variant="secondary" className="text-xs mt-1">
                CMR
              </Badge>
            )}
          </div>

          {/* Colors */}
          <div className="flex space-x-1 mb-3">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded border ${
                  color === "negro"
                    ? "bg-black"
                    : color === "café" || color === "marrón"
                      ? "bg-amber-800"
                      : color === "azul"
                        ? "bg-blue-600"
                        : color === "rojo"
                          ? "bg-red-600"
                          : color === "blanco"
                            ? "bg-white border-gray-400"
                            : color === "verde"
                              ? "bg-green-600"
                              : color === "gris"
                                ? "bg-gray-500"
                                : color === "vino"
                                  ? "bg-red-800"
                                  : color === "rosado"
                                    ? "bg-pink-300"
                                    : color === "amarillo"
                                      ? "bg-yellow-400"
                                      : color === "beige"
                                        ? "bg-amber-200"
                                        : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? "Agregando..." : "🛒 Agregar al carro"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
