import { NextResponse } from "next/server"
import { Pool } from "pg"

export async function GET() {
  try {
    // Create a connection to test the database connection string
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Only use SSL for production environments, not for localhost
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    })

    // Test the connection
    const client = await pool.connect()

    try {
      // Test basic query
      const result = await client.query("SELECT NOW() as current_time")

      // Get database version
      const versionResult = await client.query("SELECT version()")

      // Get list of tables if they exist
      let tables = []
      try {
        const tablesResult = await client.query(`
          SELECT table_name 
          FROM information_schema.tables 
          WHERE table_schema = 'public'
        `)
        tables = tablesResult.rows.map((row) => row.table_name)
      } catch (error) {
        console.log("Could not fetch tables:", error)
      }

      return NextResponse.json({
        success: true,
        message: "Successfully connected to PostgreSQL database",
        data: {
          currentTime: result.rows[0].current_time,
          databaseVersion: versionResult.rows[0].version,
          connectionString: maskConnectionString(process.env.DATABASE_URL || ""),
          environment: process.env.NODE_ENV || "development",
          tables: tables,
        },
      })
    } finally {
      client.release()
      await pool.end()
    }
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to database",
        error: error instanceof Error ? error.message : "Unknown error",
        connectionString: maskConnectionString(process.env.DATABASE_URL || ""),
        environment: process.env.NODE_ENV || "development",
      },
      { status: 500 },
    )
  }
}

// Utility function to mask sensitive information in connection string
function maskConnectionString(connectionString: string): string {
  try {
    if (!connectionString) return "Connection string is empty"

    // Replace password with asterisks
    const maskedString = connectionString.replace(/(postgresql:\/\/[^:]+:)([^@]+)(@.+)/, "$1********$3")

    return maskedString
  } catch (error) {
    return "Error masking connection string"
  }
}

