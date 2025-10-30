import { type NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Delete from database
    return NextResponse.json({ message: "Pesan dihapus" })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
}
