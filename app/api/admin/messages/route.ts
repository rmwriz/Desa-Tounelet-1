import { type NextRequest, NextResponse } from "next/server"

// Demo data - replace with real database queries
const demoMessages = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@example.com",
    subject: "Pertanyaan tentang layanan desa",
    message: "Saya ingin mengetahui lebih lanjut tentang program pemberdayaan masyarakat.",
    status: "unread",
    created_at: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    // Verify token
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Return demo messages
    return NextResponse.json(demoMessages)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}
