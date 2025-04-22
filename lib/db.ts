import { Pool } from "pg"
import { v4 as uuidv4 } from "uuid"

// Initialize PostgreSQL connection pool with conditional SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Only use SSL for production environments, not for localhost
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
})

// Types
export type User = {
  id: string
  email: string
  name: string
  password: string // In a real app, this would be hashed
  createdAt: Date
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  features: string[]
  colors: { id: string; name: string; class: string }[]
  sizes: string[]
  stock: number
  sku: string
  slug: string
  createdAt: Date
}

export type CartItem = {
  id: string
  productId: string
  quantity: number
  color: string
  size: string
}

export type Order = {
  id: string
  userId: string | null // null for guest checkout
  items: {
    productId: string
    quantity: number
    price: number
    color: string
    size: string
  }[]
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shippingAddress: {
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod: string
  subtotal: number
  shipping: number
  tax: number
  total: number
  createdAt: Date
}

// Database initialization
export const initializeDatabase = async () => {
  try {
    console.log("Connecting to Supabase PostgreSQL database...")

    // Test the connection first
    const client = await pool.connect()
    try {
      const res = await client.query("SELECT NOW()")
      console.log("Database connection successful:", res.rows[0])
    } finally {
      client.release()
    }

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create products table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        images TEXT[] NOT NULL,
        category TEXT NOT NULL,
        features TEXT[] NOT NULL,
        colors JSONB NOT NULL,
        sizes TEXT[] NOT NULL,
        stock INTEGER NOT NULL,
        sku TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create carts table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS carts (
        id UUID PRIMARY KEY,
        user_id UUID REFERENCES users(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create cart_items table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id UUID PRIMARY KEY,
        cart_id UUID REFERENCES carts(id),
        product_id UUID REFERENCES products(id),
        quantity INTEGER NOT NULL,
        color TEXT NOT NULL,
        size TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create orders table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id UUID PRIMARY KEY,
        user_id UUID REFERENCES users(id),
        status TEXT NOT NULL,
        shipping_address JSONB NOT NULL,
        payment_method TEXT NOT NULL,
        subtotal DECIMAL(10, 2) NOT NULL,
        shipping DECIMAL(10, 2) NOT NULL,
        tax DECIMAL(10, 2) NOT NULL,
        total DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create order_items table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS order_items (
        id UUID PRIMARY KEY,
        order_id UUID REFERENCES orders(id),
        product_id UUID REFERENCES products(id),
        quantity INTEGER NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        color TEXT NOT NULL,
        size TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)

    console.log("Database tables initialized successfully")
  } catch (error) {
    console.error("Error initializing database:", error)
    throw error
  }
}

// User methods
export const createUser = async (userData: Omit<User, "id" | "createdAt">) => {
  try {
    const id = uuidv4()
    const { email, name, password } = userData

    const result = await pool.query(
      "INSERT INTO users (id, email, name, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, email, name, password],
    )

    return result.rows[0]
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    return result.rows[0]
  } catch (error) {
    console.error("Error getting user by email:", error)
    throw error
  }
}

export const getUserById = async (id: string) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id])
    return result.rows[0]
  } catch (error) {
    console.error("Error getting user by id:", error)
    throw error
  }
}

// Product methods
export const createProduct = async (productData: Omit<Product, "id" | "createdAt">) => {
  try {
    const id = uuidv4()
    const { name, description, price, images, category, features, colors, sizes, stock, sku, slug } = productData

    const result = await pool.query(
      `INSERT INTO products 
       (id, name, description, price, images, category, features, colors, sizes, stock, sku, slug) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
       RETURNING *`,
      [id, name, description, price, images, category, features, JSON.stringify(colors), sizes, stock, sku, slug],
    )

    return result.rows[0]
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}

export const getProducts = async (category?: string, limit?: number) => {
  try {
    let query = "SELECT * FROM products"
    const params: any[] = []

    if (category) {
      query += " WHERE category = $1"
      params.push(category)
    }

    if (limit) {
      query += ` LIMIT ${limit}`
    }

    const result = await pool.query(query, params)
    return result.rows
  } catch (error) {
    console.error("Error getting products:", error)
    throw error
  }
}

export const getProductById = async (id: string) => {
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id])
    return result.rows[0]
  } catch (error) {
    console.error("Error getting product by id:", error)
    throw error
  }
}

export const getProductBySlug = async (slug: string) => {
  try {
    const result = await pool.query("SELECT * FROM products WHERE slug = $1", [slug])
    return result.rows[0]
  } catch (error) {
    console.error("Error getting product by slug:", error)
    throw error
  }
}

// Cart methods
export const getCart = async (userId: string) => {
  try {
    // Get or create cart
    let cartResult = await pool.query("SELECT * FROM carts WHERE user_id = $1", [userId])

    if (cartResult.rows.length === 0) {
      const cartId = uuidv4()
      cartResult = await pool.query("INSERT INTO carts (id, user_id) VALUES ($1, $2) RETURNING *", [cartId, userId])
    }

    const cartId = cartResult.rows[0].id

    // Get cart items
    const itemsResult = await pool.query(
      `SELECT ci.*, p.name, p.price, p.images 
       FROM cart_items ci 
       JOIN products p ON ci.product_id = p.id 
       WHERE ci.cart_id = $1`,
      [cartId],
    )

    return {
      id: cartId,
      userId,
      items: itemsResult.rows,
    }
  } catch (error) {
    console.error("Error getting cart:", error)
    throw error
  }
}

export const addToCart = async (userId: string, item: Omit<CartItem, "id">) => {
  try {
    // Get or create cart
    const cartResult = await pool.query("SELECT * FROM carts WHERE user_id = $1", [userId])

    let cartId
    if (cartResult.rows.length === 0) {
      cartId = uuidv4()
      await pool.query("INSERT INTO carts (id, user_id) VALUES ($1, $2)", [cartId, userId])
    } else {
      cartId = cartResult.rows[0].id
    }

    // Check if item already exists
    const existingItemResult = await pool.query(
      "SELECT * FROM cart_items WHERE cart_id = $1 AND product_id = $2 AND color = $3 AND size = $4",
      [cartId, item.productId, item.color, item.size],
    )

    if (existingItemResult.rows.length > 0) {
      // Update quantity
      const existingItem = existingItemResult.rows[0]
      await pool.query("UPDATE cart_items SET quantity = $1 WHERE id = $2", [
        existingItem.quantity + item.quantity,
        existingItem.id,
      ])
    } else {
      // Add new item
      const itemId = uuidv4()
      await pool.query(
        "INSERT INTO cart_items (id, cart_id, product_id, quantity, color, size) VALUES ($1, $2, $3, $4, $5, $6)",
        [itemId, cartId, item.productId, item.quantity, item.color, item.size],
      )
    }

    return getCart(userId)
  } catch (error) {
    console.error("Error adding to cart:", error)
    throw error
  }
}

export const updateCartItem = async (userId: string, itemId: string, quantity: number) => {
  try {
    await pool.query(
      `UPDATE cart_items 
       SET quantity = $1 
       WHERE id = $2 AND cart_id IN (SELECT id FROM carts WHERE user_id = $3)`,
      [quantity, itemId, userId],
    )

    return getCart(userId)
  } catch (error) {
    console.error("Error updating cart item:", error)
    throw error
  }
}

export const removeCartItem = async (userId: string, itemId: string) => {
  try {
    await pool.query(
      `DELETE FROM cart_items 
       WHERE id = $1 AND cart_id IN (SELECT id FROM carts WHERE user_id = $2)`,
      [itemId, userId],
    )

    return getCart(userId)
  } catch (error) {
    console.error("Error removing cart item:", error)
    throw error
  }
}

// Order methods
export const createOrder = async (orderData: Omit<Order, "id" | "createdAt">) => {
  try {
    const client = await pool.connect()

    try {
      await client.query("BEGIN")

      const orderId = uuidv4()
      const { userId, items, status, shippingAddress, paymentMethod, subtotal, shipping, tax, total } = orderData

      // Create order
      await client.query(
        `INSERT INTO orders 
         (id, user_id, status, shipping_address, payment_method, subtotal, shipping, tax, total) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [orderId, userId, status, JSON.stringify(shippingAddress), paymentMethod, subtotal, shipping, tax, total],
      )

      // Add order items
      for (const item of items) {
        const orderItemId = uuidv4()
        await client.query(
          `INSERT INTO order_items 
           (id, order_id, product_id, quantity, price, color, size) 
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [orderItemId, orderId, item.productId, item.quantity, item.price, item.color, item.size],
        )
      }

      // Clear cart if user is logged in
      if (userId) {
        const cartResult = await client.query("SELECT id FROM carts WHERE user_id = $1", [userId])
        if (cartResult.rows.length > 0) {
          const cartId = cartResult.rows[0].id
          await client.query("DELETE FROM cart_items WHERE cart_id = $1", [cartId])
        }
      }

      await client.query("COMMIT")

      // Get complete order
      const orderResult = await client.query("SELECT * FROM orders WHERE id = $1", [orderId])
      const orderItemsResult = await client.query(
        `SELECT oi.*, p.name, p.images 
         FROM order_items oi 
         JOIN products p ON oi.product_id = p.id 
         WHERE oi.order_id = $1`,
        [orderId],
      )

      return {
        ...orderResult.rows[0],
        items: orderItemsResult.rows,
      }
    } catch (error) {
      await client.query("ROLLBACK")
      throw error
    } finally {
      client.release()
    }
  } catch (error) {
    console.error("Error creating order:", error)
    throw error
  }
}

export const getOrdersByUserId = async (userId: string) => {
  try {
    const ordersResult = await pool.query("SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC", [userId])

    const orders = []
    for (const order of ordersResult.rows) {
      const orderItemsResult = await pool.query(
        `SELECT oi.*, p.name, p.images 
         FROM order_items oi 
         JOIN products p ON oi.product_id = p.id 
         WHERE oi.order_id = $1`,
        [order.id],
      )

      orders.push({
        ...order,
        items: orderItemsResult.rows,
      })
    }

    return orders
  } catch (error) {
    console.error("Error getting orders by user id:", error)
    throw error
  }
}

export const getOrderById = async (id: string) => {
  try {
    const orderResult = await pool.query("SELECT * FROM orders WHERE id = $1", [id])

    if (orderResult.rows.length === 0) {
      return null
    }

    const orderItemsResult = await pool.query(
      `SELECT oi.*, p.name, p.images 
       FROM order_items oi 
       JOIN products p ON oi.product_id = p.id 
       WHERE oi.order_id = $1`,
      [id],
    )

    return {
      ...orderResult.rows[0],
      items: orderItemsResult.rows,
    }
  } catch (error) {
    console.error("Error getting order by id:", error)
    throw error
  }
}

// Initialize sample data
export const seedSampleData = async () => {
  try {
    // Check if products already exist
    const productsResult = await pool.query("SELECT COUNT(*) FROM products")
    if (Number.parseInt(productsResult.rows[0].count) > 0) {
      console.log("Sample data already exists")
      return
    }

    console.log("Seeding sample data...")

    // Sample products
    const products = [
      {
        name: "Carrara White Marble",
        description:
          "Premium Italian Carrara White Marble, known for its soft white background with elegant gray veining. Perfect for countertops, flooring, and wall cladding.",
        price: 129.99,
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        category: "italian-marble",
        features: [
          "Premium Italian marble",
          "Elegant gray veining on white background",
          "Polished finish",
          "Suitable for indoor use",
          "Resistant to stains when sealed properly",
        ],
        colors: [{ id: "white", name: "White", class: "bg-white border border-gray-200" }],
        sizes: ["12x12", "18x18", "24x24", "Custom"],
        stock: 500,
        sku: "CWM-001",
        slug: "carrara-white-marble",
      },
      {
        name: "Black Galaxy Granite",
        description:
          "Luxurious Black Galaxy Granite from India featuring a deep black background with copper/gold flecks. Ideal for kitchen countertops and high-traffic areas.",
        price: 89.99,
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        category: "granite",
        features: [
          "Premium Indian granite",
          "Deep black with gold/copper flecks",
          "Highly durable and scratch-resistant",
          "Heat resistant",
          "Low maintenance",
        ],
        colors: [{ id: "black", name: "Black", class: "bg-black" }],
        sizes: ["12x12", "18x18", "24x24", "Custom"],
        stock: 350,
        sku: "BGG-001",
        slug: "black-galaxy-granite",
      },
      {
        name: "Honey Onyx",
        description:
          "Translucent Honey Onyx with warm amber tones and dramatic veining. Perfect for backlit features, accent walls, and luxury bathroom applications.",
        price: 199.99,
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        category: "onyx",
        features: [
          "Translucent natural onyx",
          "Warm honey/amber tones",
          "Can be backlit for dramatic effect",
          "Suitable for accent walls and features",
          "Each piece has unique patterns",
        ],
        colors: [{ id: "honey", name: "Honey", class: "bg-yellow-600" }],
        sizes: ["12x12", "18x18", "24x24", "Custom"],
        stock: 200,
        sku: "HO-001",
        slug: "honey-onyx",
      },
      {
        name: "Calacatta Gold Marble",
        description:
          "Prestigious Calacatta Gold Marble from Italy with distinctive gold veining on a bright white background. The epitome of luxury for high-end interiors.",
        price: 249.99,
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        category: "italian-marble",
        features: [
          "Premium Italian marble",
          "Distinctive gold veining on white background",
          "Polished finish",
          "Suitable for luxury interiors",
          "Each slab has unique patterns",
        ],
        colors: [{ id: "white-gold", name: "White/Gold", class: "bg-white border border-yellow-300" }],
        sizes: ["12x12", "18x18", "24x24", "Custom"],
        stock: 150,
        sku: "CGM-001",
        slug: "calacatta-gold-marble",
      },
      {
        name: "Ziarat White Marble",
        description:
          "Premium Pakistani Ziarat White Marble, known for its pristine white background with subtle veining. Perfect for countertops, flooring, and wall cladding.",
        price: 119.99,
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        category: "pakistani-marble",
        features: [
          "Premium Pakistani marble",
          "Elegant subtle veining on white background",
          "Polished finish",
          "Suitable for indoor use",
          "Resistant to stains when sealed properly",
        ],
        colors: [{ id: "white", name: "White", class: "bg-white border border-gray-200" }],
        sizes: ["12x12", "18x18", "24x24", "Custom"],
        stock: 500,
        sku: "ZWM-001",
        slug: "ziarat-white-marble",
      },
    ]

    for (const product of products) {
      await createProduct(product)
    }

    console.log("Sample data seeded successfully")
  } catch (error) {
    console.error("Error seeding sample data:", error)
    throw error
  }
}

// Initialize database on server start
if (process.env.NODE_ENV !== "test") {
  initializeDatabase()
    .then(() => seedSampleData())
    .catch(console.error)
}

