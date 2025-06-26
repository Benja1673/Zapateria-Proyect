"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, User } from "lucide-react"
import { useFavorites } from "@/hooks/useFavorites"
import { useCart } from "@/hooks/useCart"

interface HeaderProps {
  userId: string
}

export default function Header({ userId }: HeaderProps) {
  const { favorites } = useFavorites(userId)
  const { cart } = useCart(userId)

  return (
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
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className={`h-5 w-5 ${favorites.length > 0 ? "text-red-600" : ""}`} />
                  {favorites.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-600">
                      {favorites.length}
                    </Badge>
                  )}
                  <span className="sr-only">Favoritos</span>
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Mi cuenta</span>
              </Button>
              <Link href="/carrito">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className={`h-5 w-5 ${cart.itemCount > 0 ? "text-blue-600" : ""}`} />
                  {cart.itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-blue-600">
                      {cart.itemCount}
                    </Badge>
                  )}
                  <span className="sr-only">Carrito</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
