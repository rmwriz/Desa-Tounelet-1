import { type NextRequest, NextResponse } from "next/server"

// Demo data
const demoOfficials = [
  {
    id: "1",
    name: "Kepala Desa",
    position: "Kepala Desa",
    description: "Memimpin dan mengelola pemerintahan desa",
    image_url: "/kepala-desa-pria.jpg",
    contact: "081234567890",
  },
]

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json(demoOfficials)
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
    return NextResponse.json({ message: "Perangkat desa ditambahkan" })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}
