import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="border-t border-gray-200">
      <div className="flex items-center justify-center space-x-8 py-4">
        <Link
          href="/mujer"
          className={`font-medium ${currentPage === "mujer" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
        >
          MUJER
        </Link>
        <Link
          href="/hombre"
          className={`font-medium ${currentPage === "hombre" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
        >
          HOMBRE
        </Link>
        <Link
          href="/infantil"
          className={`font-medium ${currentPage === "infantil" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
        >
          INFANTIL
        </Link>
        <div className="relative group">
          <button className="text-gray-700 hover:text-red-600 font-medium flex items-center">
            MARCAS
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link href="/marcas/guante" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Guante
              </Link>
              <Link href="/marcas/panama-jack" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Panama Jack
              </Link>
              <Link href="/marcas/caterpillar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Caterpillar
              </Link>
              <Link href="/marcas/hush-puppies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Hush Puppies
              </Link>
              <Link href="/marcas/london-adixt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                London Adixt
              </Link>
              <Link href="/marcas/florsheim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Florsheim
              </Link>
              <Link href="/marcas/veroz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Véroz
              </Link>
              <Link href="/marcas/alaniz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Alaniz
              </Link>
              <Link href="/marcas/nike" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Nike
              </Link>
              <Link href="/marcas/adidas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Adidas
              </Link>
              <Link href="/marcas/bubble-gummers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Bubble Gummers
              </Link>
            </div>
          </div>
        </div>
        <Link href="/" className="text-red-600 hover:text-red-700 font-medium">
          OFERTAS
        </Link>
      </div>
    </nav>
  )
}
