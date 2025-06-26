"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"

export default function MujerPage() {
  const userId = "user_demo_123"

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
          <Navigation currentPage="mujer" />
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
