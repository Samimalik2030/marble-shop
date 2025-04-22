import { NextResponse } from "next/server"
import { addToCart, getCart, removeCartItem, updateCartItem } from "@/lib/db"

// Mock user ID for demo purposes
// In a real app, this would come from authentication
const MOCK_USER_ID = "user-123"

export async function GET() {
  const cart = getCart(MOCK_USER_ID)

  return NextResponse.json(cart || { userId: MOCK_USER_ID, items: [] })
}

export async function POST(request: Request) {
  const body = await request.json()

  if (!body.productId || !body.quantity || !body.color || !body.size) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const cart = addToCart(MOCK_USER_ID, {
    productId: body.productId,
    quantity: body.quantity,
    color: body.color,
    size: body.size,
  })

  return NextResponse.json(cart)
}

export async function PUT(request: Request) {
  const body = await request.json()

  if (!body.itemId || !body.quantity) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const cart = updateCartItem(MOCK_USER_ID, body.itemId, body.quantity)

  return NextResponse.json(cart)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const itemId = searchParams.get("itemId")

  if (!itemId) {
    return NextResponse.json({ error: "Missing itemId parameter" }, { status: 400 })
  }

  const cart = removeCartItem(MOCK_USER_ID, itemId)

  return NextResponse.json(cart)
}

