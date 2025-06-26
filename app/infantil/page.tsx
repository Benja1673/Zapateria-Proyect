"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"

export default function InfantilPage() {
  const userId = "user_demo_123"

  const products = [
    {
      id: "prod_capitan_america",
      name: "Marvel",
      subtitle: "Zapatillas Capitán América Infantil",
      price: 35990,
      originalPrice: 49990,
      discount: 28,
      image: "/images/zapatilla-capitan-america.png",
      colors: ["azul", "rojo", "blanco"],
      rating: 4.8,
      reviews: 15,
      sizes: ["28", "29", "30", "31", "32"],
    },
    {
      id: "infantil_2",
      name: "Marvel",
      subtitle: "Zapatillas Spider-Man Botín Infantil",
      price: 42990,
      originalPrice: 59990,
      discount: 28,
      image: "/images/zapatilla-spiderman-botin.png",
      colors: ["negro", "rojo"],
      rating: 4.6,
      reviews: 12,
      sizes: ["26", "27", "28", "29", "30"],
    },
    {
      id: "infantil_3",
      name: "Bubble Gummers",
      subtitle: "Zapatillas Deportivas Infantil",
      price: 29990,
      originalPrice: 39990,
      discount: 25,
      image: "/images/zapatilla-bubble-gummers.png",
      colors: ["gris", "amarillo"],
      rating: 4.5,
      reviews: 8,
      sizes: ["24", "25", "26", "27", "28"],
    },
    {
      id: "infantil_4",
      name: "Marvel",
      subtitle: "Zapatillas Spider-Man Azul Infantil",
      price: 38990,
      originalPrice: 54990,
      discount: 29,
      image: "/images/zapatilla-spiderman-azul.png",
      colors: ["azul", "rojo"],
      rating: 4.7,
      reviews: 10,
      sizes: ["29", "30", "31", "32", "33"],
    },
    {
      id: "infantil_5",
      name: "Nike",
      subtitle: "Zapatillas Deportivas Azul Marino",
      price: 45990,
      originalPrice: 64990,
      discount: 29,
      image: "/images/zapatilla-azul-marino.png",
      colors: ["azul"],
      rating: 4.3,
      reviews: 6,
      sizes: ["26", "27", "28", "29", "30"],
    },
    {
      id: "infantil_6",
      name: "Adidas",
      subtitle: "Zapatillas Blancas con Detalles Neón",
      price: 52990,
      originalPrice: 74990,
      discount: 29,
      image: "/images/zapatilla-blanca-neon.png",
      colors: ["blanco", "negro", "verde"],
      rating: 4.9,
      reviews: 20,
      sizes: ["27", "28", "29", "30", "31"],
    },
    {
      id: "infantil_7",
      name: "Puma",
      subtitle: "Zapatillas Azul con Verde Neón",
      price: 41990,
      originalPrice: 59990,
      discount: 30,
      image: "/images/zapatilla-azul-verde.png",
      colors: ["azul", "verde"],
      rating: 4.4,
      reviews: 14,
      sizes: ["24", "25", "26", "27", "28"],
    },
    {
      id: "infantil_8",
      name: "Converse",
      subtitle: "Zapatillas Negras Suela Marrón",
      price: 33990,
      originalPrice: 47990,
      discount: 29,
      image: "/images/zapatilla-negra-suela-marron.png",
      colors: ["negro", "marrón"],
      rating: 4.6,
      reviews: 9,
      sizes: ["30", "31", "32", "33", "34"],
    },
    {
      id: "infantil_9",
      name: "Fila",
      subtitle: "Zapatillas Blancas Clásicas",
      price: 28990,
      originalPrice: 39990,
      discount: 27,
      image: "/images/zapatilla-blanca-clasica.png",
      colors: ["blanco"],
      rating: 4.5,
      reviews: 11,
      sizes: ["28", "29", "30", "31", "32"],
    },
    {
      id: "infantil_10",
      name: "Nike",
      subtitle: "Zapatillas Deportivas Rosa Niña",
      price: 47990,
      originalPrice: 67990,
      discount: 29,
      image: "/images/zapatilla-nike-rosa-infantil.png",
      colors: ["rosa", "blanco"],
      rating: 4.7,
      reviews: 18,
      sizes: ["26", "27", "28", "29", "30"],
    },
  ]

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
          <Navigation currentPage="infantil" />
        </div>
      </div>

      {/* Breadcrumb and Filters */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            <Button variant="outline" size="sm" className="bg-white">
              🔄 Ordenar por: Más relevantes
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} userId={userId} />
          ))}
        </div>
      </main>
    </div>
  )
}
