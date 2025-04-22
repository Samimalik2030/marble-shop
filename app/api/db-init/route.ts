import { NextResponse } from "next/server"
import { initializeDatabase, seedSampleData } from "@/lib/db"

export async function GET() {
  try {
    // Initialize database tables
    await initializeDatabase()

    // Seed sample data
    await seedSampleData()

    return NextResponse.json({
      success: true,
      message: "Database initialized and sample data seeded successfully",
    })
  } catch (error) {
    console.error("Error initializing database:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to initialize database",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

