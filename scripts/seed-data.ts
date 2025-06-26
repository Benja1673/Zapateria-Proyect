import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Iniciando seed de la base de datos...")

  // Limpiar datos existentes
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.cartItem.deleteMany()
  await prisma.favorite.deleteMany()
  await prisma.review.deleteMany()
  await prisma.productSize.deleteMany()
  await prisma.productColor.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.product.deleteMany()
  await prisma.brand.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()

  // Crear categorías
  const categories = await prisma.category.createMany({
    data: [
      {
        id: "cat_hombre",
        name: "HOMBRE",
        slug: "hombre",
        description: "Calzado para hombre",
        isActive: true,
      },
      {
        id: "cat_mujer",
        name: "MUJER",
        slug: "mujer",
        description: "Calzado para mujer",
        isActive: true,
      },
      {
        id: "cat_infantil",
        name: "INFANTIL",
        slug: "infantil",
        description: "Calzado infantil",
        isActive: true,
      },
    ],
  })

  // Crear marcas
  const brands = await prisma.brand.createMany({
    data: [
      { id: "brand_guante", name: "Guante", slug: "guante", description: "Marca de calzado de cuero", isActive: true },
      {
        id: "brand_caterpillar",
        name: "Caterpillar",
        slug: "caterpillar",
        description: "Calzado industrial y casual",
        isActive: true,
      },
      {
        id: "brand_panama_jack",
        name: "Panama Jack",
        slug: "panama-jack",
        description: "Calzado outdoor y casual",
        isActive: true,
      },
      {
        id: "brand_florsheim",
        name: "Florsheim",
        slug: "florsheim",
        description: "Calzado formal y elegante",
        isActive: true,
      },
      {
        id: "brand_london_adixt",
        name: "London Adixt",
        slug: "london-adixt",
        description: "Calzado urbano y moderno",
        isActive: true,
      },
      { id: "brand_veroz", name: "Véroz", slug: "veroz", description: "Calzado deportivo y casual", isActive: true },
      { id: "brand_alaniz", name: "Alaniz", slug: "alaniz", description: "Calzado casual y cómodo", isActive: true },
      {
        id: "brand_marvel",
        name: "Marvel",
        slug: "marvel",
        description: "Calzado infantil con personajes",
        isActive: true,
      },
      { id: "brand_nike", name: "Nike", slug: "nike", description: "Calzado deportivo premium", isActive: true },
      {
        id: "brand_adidas",
        name: "Adidas",
        slug: "adidas",
        description: "Calzado deportivo y lifestyle",
        isActive: true,
      },
      {
        id: "brand_bubble_gummers",
        name: "Bubble Gummers",
        slug: "bubble-gummers",
        description: "Calzado infantil divertido",
        isActive: true,
      },
      { id: "brand_puma", name: "Puma", slug: "puma", description: "Calzado deportivo y urbano", isActive: true },
      {
        id: "brand_converse",
        name: "Converse",
        slug: "converse",
        description: "Calzado casual icónico",
        isActive: true,
      },
      { id: "brand_fila", name: "Fila", slug: "fila", description: "Calzado deportivo retro", isActive: true },
      {
        id: "brand_skechers",
        name: "Skechers",
        slug: "skechers",
        description: "Calzado cómodo y tecnológico",
        isActive: true,
      },
    ],
  })

  // Crear productos destacados
  const products = [
    {
      id: "prod_botin_guante",
      name: "Botín Dallas Cuero 35640 Hombre",
      slug: "botin-dallas-cuero-hombre",
      description: "Botín de cuero genuino para hombre, cómodo y resistente",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      sku: "GUA-35640",
      stock: 25,
      categoryId: "cat_hombre",
      brandId: "brand_guante",
      isFeatured: true,
      rating: 4.5,
      reviewCount: 8,
    },
    {
      id: "prod_zapato_caterpillar",
      name: "Zapato Deportivo Urbano Negro",
      slug: "zapato-deportivo-urbano-negro",
      description: "Zapato deportivo urbano con tecnología Cat",
      price: 55990,
      originalPrice: 69990,
      discount: 20,
      sku: "CAT-URB-001",
      stock: 30,
      categoryId: "cat_hombre",
      brandId: "brand_caterpillar",
      isFeatured: true,
      rating: 4.8,
      reviewCount: 12,
    },
    {
      id: "prod_bota_panama",
      name: "Bota Outdoor Cuero Negro",
      slug: "bota-outdoor-cuero-negro",
      description: "Bota outdoor resistente al agua",
      price: 44990,
      originalPrice: 73990,
      discount: 39,
      sku: "PJ-OUT-001",
      stock: 15,
      categoryId: "cat_hombre",
      brandId: "brand_panama_jack",
      isFeatured: true,
      rating: 4.5,
      reviewCount: 8,
    },
    {
      id: "prod_capitan_america",
      name: "Zapatillas Capitán América Infantil",
      slug: "zapatillas-capitan-america-infantil",
      description: "Zapatillas con diseño del Capitán América",
      price: 35990,
      originalPrice: 49990,
      discount: 28,
      sku: "MAR-CAP-001",
      stock: 20,
      categoryId: "cat_infantil",
      brandId: "brand_marvel",
      isFeatured: true,
      rating: 4.8,
      reviewCount: 15,
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }

  console.log("✅ Seed completado exitosamente!")
  console.log(`📦 Creadas ${categories.count} categorías`)
  console.log(`🏷️ Creadas ${brands.count} marcas`)
  console.log(`👟 Creados ${products.length} productos`)
}

main()
  .catch((e) => {
    console.error("❌ Error durante el seed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
