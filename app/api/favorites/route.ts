import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Obtener favoritos del usuario
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "userId es requerido" }, { status: 400 })
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        product: {
          include: {
            images: true,
            brand: true,
            category: true,
          },
        },
      },
    })

    return NextResponse.json(favorites)
  } catch (error) {
    console.error("Error al obtener favoritos:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// POST - Agregar a favoritos
export async function POST(request: NextRequest) {
  try {
    const { userId, productId } = await request.json()

    if (!userId || !productId) {
      return NextResponse.json({ error: "userId y productId son requeridos" }, { status: 400 })
    }

    // Verificar si ya existe en favoritos
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })

    if (existingFavorite) {
      return NextResponse.json({ message: "Ya está en favoritos" }, { status: 200 })
    }

    const favorite = await prisma.favorite.create({
      data: {
        userId,
        productId,
      },
      include: {
        product: {
          include: {
            images: true,
            brand: true,
          },
        },
      },
    })

    return NextResponse.json(favorite, { status: 201 })
  } catch (error) {
    console.error("Error al agregar a favoritos:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// DELETE - Quitar de favoritos
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const productId = searchParams.get("productId")

    if (!userId || !productId) {
      return NextResponse.json({ error: "userId y productId son requeridos" }, { status: 400 })
    }

    await prisma.favorite.delete({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })

    return NextResponse.json({ message: "Eliminado de favoritos" })
  } catch (error) {
    console.error("Error al eliminar de favoritos:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
