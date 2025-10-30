"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Official {
  id: string
  name: string
  position: string
  description: string
  image_url: string
  contact: string
}

export default function OfficialsTab() {
  const [officials, setOfficials] = useState<Official[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
    image_url: "",
    contact: "",
  })

  useEffect(() => {
    fetchOfficials()
  }, [])

  const fetchOfficials = async () => {
    try {
      const response = await fetch("/api/admin/officials", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      const data = await response.json()
      setOfficials(data)
    } catch (error) {
      console.error("Error fetching officials:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const method = editingId ? "PUT" : "POST"
      const url = editingId ? `/api/admin/officials/${editingId}` : "/api/admin/officials"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        fetchOfficials()
        setEditingId(null)
        setFormData({ name: "", position: "", description: "", image_url: "", contact: "" })
      }
    } catch (error) {
      console.error("Error saving official:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus perangkat desa ini?")) return

    try {
      await fetch(`/api/admin/officials/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      fetchOfficials()
    } catch (error) {
      console.error("Error deleting official:", error)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      {/* Form */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">{editingId ? "Edit Perangkat Desa" : "Tambah Perangkat Desa"}</h3>
        <div className="space-y-4">
          <Input
            placeholder="Nama"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            placeholder="Jabatan"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          />
          <Textarea
            placeholder="Deskripsi"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
          />
          <Input
            placeholder="URL Foto"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
          />
          <Input
            placeholder="Kontak"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
          <div className="flex gap-2">
            <Button onClick={handleSave}>{editingId ? "Update" : "Tambah"}</Button>
            {editingId && (
              <Button
                variant="outline"
                onClick={() => {
                  setEditingId(null)
                  setFormData({ name: "", position: "", description: "", image_url: "", contact: "" })
                }}
              >
                Batal
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Officials List */}
      <div className="grid gap-4">
        {officials.map((official) => (
          <Card key={official.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold">{official.name}</h4>
                <p className="text-sm text-primary font-medium">{official.position}</p>
                <p className="text-sm text-muted-foreground mt-1">{official.description}</p>
                <p className="text-xs text-muted-foreground mt-2">Kontak: {official.contact}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditingId(official.id)
                    setFormData({
                      name: official.name,
                      position: official.position,
                      description: official.description,
                      image_url: official.image_url,
                      contact: official.contact,
                    })
                  }}
                >
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(official.id)}>
                  Hapus
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
