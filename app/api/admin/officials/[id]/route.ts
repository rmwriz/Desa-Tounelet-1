import { type NextRequest, NextResponse } from "next/server"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    // Update in database
    return NextResponse.json({ message: "Perangkat desa diupdate" })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Delete from database
    return NextResponse.json({ message: "Perangkat desa dihapus" })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}
