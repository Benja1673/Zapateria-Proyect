import { config } from "dotenv"
import { PrismaClient } from "@prisma/client"
import path from "path"

// Cargar variables de entorno desde .env
config({ path: path.resolve(process.cwd(), ".env") })

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log("🔄 Probando conexión a la base de datos...")

    // Verificar que la variable de entorno se cargó
    console.log("🔍 DATABASE_URL encontrada:", process.env.DATABASE_URL ? "✅ Sí" : "❌ No")

    if (!process.env.DATABASE_URL) {
      console.error("❌ DATABASE_URL no está definida en las variables de entorno")
      console.log("📁 Directorio actual:", process.cwd())
      console.log("📄 Archivo .env existe:", require("fs").existsSync(".env") ? "✅ Sí" : "❌ No")
      return
    }

    // Intentar conectar
    await prisma.$connect()
    console.log("✅ Conexión exitosa a SQL Server!")

    // Probar una consulta simple
    const result = await prisma.$queryRaw`SELECT @@VERSION as version`
    console.log("📊 Versión de SQL Server:", result)

    // Verificar si existen tablas
    const tables = await prisma.$queryRaw`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_TYPE = 'BASE TABLE'
    `
    console.log("📋 Tablas existentes:", tables)
  } catch (error) {
    console.error("❌ Error de conexión:", error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
