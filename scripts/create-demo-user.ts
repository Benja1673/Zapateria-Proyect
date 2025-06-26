import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function createDemoUser() {
  try {
    console.log("🔄 Creando usuario demo...")

    // Verificar si ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email: "demo@pasos.com" },
    })

    if (existingUser) {
      console.log("✅ Usuario demo ya existe:", existingUser.id)
      return existingUser.id
    }

    // Crear usuario demo
    const hashedPassword = await bcrypt.hash("demo123", 10)

    const user = await prisma.user.create({
      data: {
        id: "user_demo_123",
        email: "demo@pasos.com",
        name: "Usuario Demo",
        password: hashedPassword,
        phone: "+56912345678",
        address: "Av. Providencia 123",
        city: "Santiago",
        region: "Región Metropolitana",
        zipCode: "7500000",
        role: "CUSTOMER",
      },
    })

    console.log("✅ Usuario demo creado:", user.id)
    return user.id
  } catch (error) {
    console.error("❌ Error al crear usuario demo:", error)
  } finally {
    await prisma.$disconnect()
  }
}

createDemoUser()
