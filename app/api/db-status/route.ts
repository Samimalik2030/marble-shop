import { NextResponse } from "next/server"
import { Pool } from "pg"

export async function GET() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  })

  try {
    // Test database connection
    const client = await pool.connect()

    try {
      // Get PostgreSQL version
      const versionResult = await client.query("SELECT version()")
      const version = versionResult.rows[0].version

      // Get table counts
      const tablesResult = await client.query(`
        SELECT table_name, 
               (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name) AS column_count
        FROM information_schema.tables t
        WHERE table_schema = 'public'
        ORDER BY table_name
      `)

      // Get row counts for each table
      const rowCounts = {}
      for (const table of tablesResult.rows) {
        const countResult = await client.query(`SELECT COUNT(*) FROM "${table.table_name}"`)
        rowCounts[table.table_name] = Number.parseInt(countResult.rows[0].count)
      }

      return NextResponse.json({
        success: true,
        message: "Database connection successful",
        data: {
          version,
          tables: tablesResult.rows.map((table) => ({
            name: table.table_name,
            columnCount: Number.parseInt(table.column_count),
            rowCount: rowCounts[table.table_name] || 0,
          })),
        },
      })
    } finally {
      client.release()
    }
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  } finally {
    await pool.end()
  }
}

