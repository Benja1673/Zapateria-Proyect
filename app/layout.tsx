import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zapatos Pasos - Tienda Online de Calzado",
  description:
    "La mejor tienda online de zapatos y calzado para hombre, mujer e infantil. Marcas premium con los mejores precios y envío gratis.",
  keywords: "zapatos, calzado, tienda online, hombre, mujer, infantil, botas, zapatillas",
  authors: [{ name: "Pasos" }],
  creator: "Pasos",
  publisher: "Pasos",
  robots: "index, follow",
  openGraph: {
    title: "Zapatos Pasos - Tienda Online de Calzado",
    description: "La mejor tienda online de zapatos y calzado para toda la familia",
    url: "https://zapatos-pasos.com",
    siteName: "Zapatos Pasos",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapatos Pasos - Tienda Online de Calzado",
    description: "La mejor tienda online de zapatos y calzado para toda la familia",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
