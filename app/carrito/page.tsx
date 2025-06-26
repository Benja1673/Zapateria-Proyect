"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, User, Plus, Minus, Trash2 } from "lucide-react"
import Navigation from "@/components/navigation"
import { useCart } from "@/hooks/useCart"

export default function CarritoPage() {
  // Por ahora usamos un userId fijo, después se puede obtener de la sesión
  const userId = "user_demo_123"
  const { cart, loading, updateQuantity, removeFromCart } = useCart(userId)

  const handleUpdateQuantity = async (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    await updateQuantity(cartItemId, newQuantity)
  }

  const handleRemoveItem = async (cartItemId: string) => {
    await removeFromCart(cartItemId)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando carrito...</p>
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
                <Link href="/favoritos">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Favoritos</span>
                  </Button>
                </Link>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Mi cuenta</span>
                </Button>
                <Button variant="ghost" size="icon" className="relative bg-blue-100">
                  <ShoppingCart className="h-5 w-5 text-blue-600" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-blue-600">
                    {cart.itemCount}
                  </Badge>
                </Button>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mi Carrito 🛒</h1>
          <p className="text-gray-600">
            {cart.itemCount === 0
              ? "Tu carrito está vacío"
              : `Tienes ${cart.itemCount} producto${cart.itemCount > 1 ? "s" : ""} en tu carrito`}
          </p>
        </div>

        {cart.itemCount === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-6">Agrega productos para comenzar tu compra</p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">Explorar Productos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items del carrito */}
            <div className="lg:col-span-2 space-y-4">
              {cart.items.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.product.images[0]?.url || "/placeholder.svg"}
                      alt={item.product.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.product.brand.name}</h3>
                      <p className="text-gray-600">{item.product.name}</p>
                      {item.size && <p className="text-sm text-gray-500">Talla: {item.size}</p>}
                      {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                      <p className="font-bold text-lg">${item.product.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${cart.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío:</span>
                    <span className="text-green-600">{cart.total > 29990 ? "GRATIS" : "$3.990"}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${(cart.total + (cart.total > 29990 ? 0 : 3990)).toLocaleString()}</span>
                  </div>
                </div>
                {cart.total <= 29990 && (
                  <p className="text-sm text-gray-600 mb-4">
                    Agrega ${(29990 - cart.total).toLocaleString()} más para envío gratis
                  </p>
                )}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Proceder al Checkout</Button>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
