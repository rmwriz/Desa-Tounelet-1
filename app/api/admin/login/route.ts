import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Demo authentication - replace with real database check
    if (email === "admin@desa.com" && password === "admin123") {
      // In production, use proper JWT token generation
      const token = Buffer.from(`${email}:${Date.now()}`).toString("base64")

      return NextResponse.json({
        token,
        message: "Login berhasil",
      })
    }

    return NextResponse.json({ error: "Email atau password salah" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan saat login" }, { status: 500 })
  }
}
