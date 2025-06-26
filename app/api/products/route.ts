import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Obtener productos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categorySlug = searchParams.get("category")
    const limit = searchParams.get("limit")

    const products = await prisma.product.findMany({
      where: categorySlug
        ? {
            category: {
              slug: categorySlug,
            },
            isActive: true,
          }
        : { isActive: true },
      include: {
        images: true,
        brand: true,
        category: true,
        colors: true,
        sizes: true,
      },
      take: limit ? Number.parseInt(limit) : undefined,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error al obtener productos:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
