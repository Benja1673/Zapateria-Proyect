"use client"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"

export default function HomePage() {
  const userId = "user_demo_123"

  const featuredProducts = [
    {
      id: "prod_botin_guante",
      name: "Guante",
      subtitle: "Botín Dallas Cuero 35640 Hombre",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      image: "/images/zapato-botin-marron.png",
      colors: ["negro", "café"],
      rating: 5.0,
      reviews: 0,
      brand: "Guante",
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
      brand: "Caterpillar",
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
      brand: "Bata",
    },
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
      brand: "Marvel",
    },
  ]

  const shopTheLookProducts = [
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
      brand: "Panama Jack",
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
      brand: "Timberland",
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
      brand: "Clarks",
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
      brand: "Adidas",
    },
  ]

  return (
    <>
      <Head>
        <title>Zapatos Pasos - Inicio</title>
        <meta name="description" content="Descubre la mejor selección de zapatos y calzado con ofertas increíbles" />
      </Head>
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
            <Navigation />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Model */}
              <div className="hidden lg:block">
                <Image
                  src="/images/hero-couple.png"
                  alt="Pareja joven con zapatillas deportivas"
                  width={400}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Center Content */}
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold">
                  ZAPATOS
                  <br />Y CALZADO
                </h1>
                <div className="bg-red-600 text-white px-6 py-2 inline-block text-sm font-medium rounded">
                  HASTA EL 31 DE DICIEMBRE
                </div>
                <div className="bg-red-600 text-white p-8 rounded-lg inline-block">
                  <div className="text-6xl md:text-8xl font-bold">
                    50<span className="text-3xl">%</span>
                  </div>
                  <div className="text-lg font-medium">CON EL CUPÓN</div>
                  <div className="bg-white text-red-600 px-4 py-2 rounded font-bold text-xl mt-2">PASOS50</div>
                </div>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
                  VER TODO
                </Button>
              </div>

              {/* Right Model */}
              <div className="hidden lg:block">
                <Image
                  src="/images/hero-woman-hd.png"
                  alt="Mujer con zapatos casuales"
                  width={400}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">LOS MÁS VENDIDOS</h2>
              <h3 className="text-4xl font-bold text-gray-900">⚡IMPERDIBLES PASOS⚡</h3>
              <p className="text-gray-600 mt-2">¡Agrega tus favoritos y compra desde aquí!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} userId={userId} />
              ))}
            </div>
          </div>
        </section>

        {/* Shop The Look Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">SHOP THE LOOK</h2>
              <p className="text-gray-600 mt-2">¡Encuentra tu estilo perfecto y agrégalo al carrito!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopTheLookProducts.map((product) => (
                <ProductCard key={product.id} product={product} userId={userId} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Te gustó algo?</h2>
            <p className="text-xl mb-6">¡Agrégalo a favoritos ❤️ o al carrito 🛒 directamente desde aquí!</p>
            <div className="flex justify-center space-x-4">
              <Link href="/favoritos">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Ver Mis Favoritos ❤️
                </Button>
              </Link>
              <Link href="/carrito">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Ver Mi Carrito 🛒
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">PASOS</h3>
                <p className="text-gray-400">Tu tienda de confianza para el mejor calzado</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categorías</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/hombre" className="hover:text-white">
                      Hombre
                    </Link>
                  </li>
                  <li>
                    <Link href="/mujer" className="hover:text-white">
                      Mujer
                    </Link>
                  </li>
                  <li>
                    <Link href="/infantil" className="hover:text-white">
                      Infantil
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Ayuda</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/contacto" className="hover:text-white">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href="/envios" className="hover:text-white">
                      Envíos
                    </Link>
                  </li>
                  <li>
                    <Link href="/devoluciones" className="hover:text-white">
                      Devoluciones
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>📘
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>📷
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Pasos. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
