import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Obtener carrito del usuario
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "userId es requerido" }, { status: 400 })
    }

    const cartItems = await prisma.cartItem.findMany({
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

    // Calcular total
    const total = cartItems.reduce((sum, item) => {
      return sum + Number(item.product.price) * item.quantity
    }, 0)

    return NextResponse.json({
      items: cartItems,
      total,
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    })
  } catch (error) {
    console.error("Error al obtener carrito:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// POST - Agregar al carrito
export async function POST(request: NextRequest) {
  try {
    const { userId, productId, quantity = 1, size, color } = await request.json()

    if (!userId || !productId) {
      return NextResponse.json({ error: "userId y productId son requeridos" }, { status: 400 })
    }

    // Verificar si ya existe el item en el carrito
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId_size_color: {
          userId,
          productId,
          size: size || "",
          color: color || "",
        },
      },
    })

    let cartItem

    if (existingItem) {
      // Actualizar cantidad
      cartItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
        include: {
          product: {
            include: {
              images: true,
              brand: true,
            },
          },
        },
      })
    } else {
      // Crear nuevo item
      cartItem = await prisma.cartItem.create({
        data: {
          userId,
          productId,
          quantity,
          size,
          color,
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
    }

    return NextResponse.json(cartItem, { status: 201 })
  } catch (error) {
    console.error("Error al agregar al carrito:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// PUT - Actualizar cantidad en carrito
export async function PUT(request: NextRequest) {
  try {
    const { cartItemId, quantity } = await request.json()

    if (!cartItemId || quantity < 1) {
      return NextResponse.json({ error: "cartItemId y quantity válida son requeridos" }, { status: 400 })
    }

    const cartItem = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
      include: {
        product: {
          include: {
            images: true,
            brand: true,
          },
        },
      },
    })

    return NextResponse.json(cartItem)
  } catch (error) {
    console.error("Error al actualizar carrito:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// DELETE - Eliminar del carrito
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const cartItemId = searchParams.get("cartItemId")

    if (!cartItemId) {
      return NextResponse.json({ error: "cartItemId es requerido" }, { status: 400 })
    }

    await prisma.cartItem.delete({
      where: { id: cartItemId },
    })

    return NextResponse.json({ message: "Eliminado del carrito" })
  } catch (error) {
    console.error("Error al eliminar del carrito:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
