import { NextResponse } from "next/server"
import { createOrder, getOrderById, getOrdersByUserId } from "@/lib/db"

// Mock user ID for demo purposes
// In a real app, this would come from authentication
const MOCK_USER_ID = "user-123"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get("id")

  if (orderId) {
    const order = getOrderById(orderId)

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(order)
  }

  const orders = getOrdersByUserId(MOCK_USER_ID)

  return NextResponse.json(orders)
}

export async function POST(request: Request) {
  const body = await request.json()

  if (!body.items || !body.shippingAddress || !body.paymentMethod) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const order = createOrder({
    userId: MOCK_USER_ID,
    items: body.items,
    status: "pending",
    shippingAddress: body.shippingAddress,
    paymentMethod: body.paymentMethod,
    subtotal: body.subtotal,
    shipping: body.shipping,
    tax: body.tax,
    total: body.total,
  })

  return NextResponse.json(order)
}

