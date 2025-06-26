"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, User, Trash2 } from "lucide-react"
import Navigation from "@/components/navigation"
import { useFavorites } from "@/hooks/useFavorites"
import { useCart } from "@/hooks/useCart"

export default function FavoritosPage() {
  // Por ahora usamos un userId fijo, después se puede obtener de la sesión
  const userId = "user_demo_123"
  const { favorites, loading, removeFromFavorites } = useFavorites(userId)
  const { addToCart } = useCart(userId)

  const handleRemoveFavorite = async (productId: string) => {
    await removeFromFavorites(productId)
  }

  const handleAddToCart = async (productId: string) => {
    const success = await addToCart(productId)
    if (success) {
      alert("¡Producto agregado al carrito!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando favoritos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-2 text-sm">
        DESPACHO GRATIS sólo Región Metropolitana por compras sobre $29.990
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/pasos-logo.png" alt="Pasos Logo" width={50} height={50} className="object-contain" />
              <span className="text-4xl font-bold">
                PASOS
                <span className="text-red-600">.</span>
              </span>
            </Link>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <input
                  type="search"
                  placeholder="Buscar zapatos..."
                  className="px-4 py-2 border border-gray-300 rounded-lg w-64"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="bg-red-100">
                  <Heart className="h-5 w-5 text-red-600" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-600">
                    {favorites.length}
                  </Badge>
                  <span className="sr-only">Favoritos</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Mi cuenta</span>
                </Button>
                <Link href="/carrito">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Carrito</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mis Favoritos ❤️</h1>
          <p className="text-gray-600">
            {favorites.length === 0
              ? "No tienes productos favoritos aún"
              : `Tienes ${favorites.length} producto${favorites.length > 1 ? "s" : ""} en favoritos`}
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No hay favoritos aún</h2>
            <p className="text-gray-600 mb-6">Explora nuestros productos y agrega tus favoritos</p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">Explorar Productos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((favorite) => (
              <Card key={favorite.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={favorite.product.images[0]?.url || "/placeholder.svg"}
                      alt={favorite.product.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover rounded-t-lg"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => handleRemoveFavorite(favorite.productId)}
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900">{favorite.product.brand.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{favorite.product.name}</p>

                    {/* Price */}
                    <div className="mb-4">
                      {favorite.product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${favorite.product.originalPrice.toLocaleString()}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-bold text-xl text-gray-900">
                          ${favorite.product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleAddToCart(favorite.productId)}
                    >
                      🛒 Agregar al carro
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
