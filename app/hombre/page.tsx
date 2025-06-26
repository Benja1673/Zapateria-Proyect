"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"

export default function HombrePage() {
  const userId = "user_demo_123"

  const products = [
    {
      id: "prod_botin_guante",
      name: "Guante",
      subtitle: "Botín Dallas Cuero 35640 Hombre",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      image: "/images/zapato-botin-marron.png",
      colors: ["negro", "café"],
      rating: 5,
      reviews: 0,
    },
    {
      id: "prod_zapato_caterpillar",
      name: "Caterpillar",
      subtitle: "Zapato Deportivo Urbano Negro",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      image: "/images/zapato-deportivo-negro.png",
      colors: ["negro", "gris"],
      rating: 4.8,
      reviews: 12,
    },
    {
      id: "prod_bota_panama",
      name: "Panama Jack",
      subtitle: "Bota Outdoor Cuero Negro",
      price: 44990,
      originalPrice: 73990,
      discount: 39,
      image: "/images/bota-negra-outdoor.png",
      colors: ["negro"],
      rating: 4.5,
      reviews: 8,
    },
    {
      id: "hombre_4",
      name: "Florsheim",
      subtitle: "Botín Casual Lodge Chukka Negro",
      price: 104990,
      originalPrice: 149990,
      discount: 30,
      image: "/images/botin-negro-cuero-formal.png",
      colors: ["negro"],
      rating: 4.7,
      reviews: 15,
    },
    {
      id: "hombre_5",
      name: "Timberland",
      subtitle: "Bota Clásica 6-Inch Premium Camel",
      price: 89990,
      originalPrice: 119990,
      discount: 25,
      image: "/images/bota-timberland-camel.png",
      colors: ["camel", "miel"],
      rating: 4.9,
      reviews: 32,
    },
    {
      id: "hombre_6",
      name: "Merrell",
      subtitle: "Zapatilla Outdoor Hiking Beige",
      price: 67990,
      originalPrice: 89990,
      discount: 24,
      image: "/images/zapatilla-outdoor-beige.png",
      colors: ["beige", "caqui"],
      rating: 4.6,
      reviews: 18,
    },
    {
      id: "hombre_7",
      name: "Salomon",
      subtitle: "Zapatilla Hiking Técnica Negra",
      price: 79990,
      originalPrice: 109990,
      discount: 27,
      image: "/images/zapatilla-hiking-negra.png",
      colors: ["negro", "gris"],
      rating: 4.8,
      reviews: 24,
    },
    {
      id: "hombre_8",
      name: "Columbia",
      subtitle: "Zapatilla Deportiva Outdoor Negra",
      price: 59990,
      originalPrice: 79990,
      discount: 25,
      image: "/images/zapatilla-deportiva-negra-gris.png",
      colors: ["negro", "gris"],
      rating: 4.4,
      reviews: 11,
    },
    {
      id: "hombre_9",
      name: "Panama Jack",
      subtitle: "Bota Montaña Cuero Marrón Premium",
      price: 94990,
      originalPrice: 129990,
      discount: 27,
      image: "/images/bota-panama-jack-marron.png",
      colors: ["marrón", "negro"],
      rating: 4.7,
      reviews: 19,
    },
    {
      id: "hombre_10",
      name: "The North Face",
      subtitle: "Zapatilla Trail Running Azul Técnica",
      price: 84990,
      originalPrice: 114990,
      discount: 26,
      image: "/images/zapatilla-trail-azul-naranja.png",
      colors: ["azul", "naranja"],
      rating: 4.6,
      reviews: 14,
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
          <Navigation currentPage="hombre" />
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
