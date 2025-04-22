import { NextResponse } from "next/server"
import { getProducts, getProductBySlug } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || undefined
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined
  const slug = searchParams.get("slug") || undefined

  if (slug) {
    const product = getProductBySlug(slug)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  }

  const products = getProducts(category, limit)

  return NextResponse.json(products)
}

