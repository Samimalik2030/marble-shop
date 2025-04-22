import { NextResponse } from "next/server"
import { createUser, getUserByEmail } from "@/lib/db"

export async function POST(request: Request) {
  const body = await request.json()

  if (!body.email || !body.password) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Check if user exists for login
  if (body.action === "login") {
    const user = getUserByEmail(body.email)

    if (!user || user.password !== body.password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // In a real app, you would create a session or JWT token here
    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
    })
  }

  // Create new user for signup
  if (body.action === "signup") {
    const existingUser = getUserByEmail(body.email)

    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 })
    }

    const newUser = createUser({
      email: body.email,
      password: body.password, // In a real app, this would be hashed
      name: body.name || "",
    })

    // In a real app, you would create a session or JWT token here
    return NextResponse.json({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    })
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}

