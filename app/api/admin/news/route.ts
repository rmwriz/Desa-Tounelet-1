import { type NextRequest, NextResponse } from "next/server"

// Demo data
const demoNews = [
  {
    id: "1",
    title: "Program Pemberdayaan Masyarakat Dimulai",
    excerpt: "Pemerintah desa meluncurkan program pemberdayaan untuk meningkatkan ekonomi lokal",
    content: "Konten lengkap berita...",
    image_url: "/public/news-1.jpg",
    author: "Admin",
    published_at: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json(demoNews)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    // Save to database
    return NextResponse.json({ message: "Berita ditambahkan" })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}
