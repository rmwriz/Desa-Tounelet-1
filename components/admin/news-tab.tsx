"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface News {
  id: string
  title: string
  excerpt: string
  content: string
  image_url: string
  author: string
  published_at: string
}

export default function NewsTab() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image_url: "",
    author: "",
  })

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch("/api/admin/news", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.error("Error fetching news:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const method = editingId ? "PUT" : "POST"
      const url = editingId ? `/api/admin/news/${editingId}` : "/api/admin/news"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        fetchNews()
        setEditingId(null)
        setFormData({ title: "", excerpt: "", content: "", image_url: "", author: "" })
      }
    } catch (error) {
      console.error("Error saving news:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus berita ini?")) return

    try {
      await fetch(`/api/admin/news/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      fetchNews()
    } catch (error) {
      console.error("Error deleting news:", error)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      {/* Form */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">{editingId ? "Edit Berita" : "Tambah Berita Baru"}</h3>
        <div className="space-y-4">
          <Input
            placeholder="Judul Berita"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Input
            placeholder="Ringkasan"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          />
          <Textarea
            placeholder="Konten Berita"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={5}
          />
          <Input
            placeholder="URL Gambar"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
          />
          <Input
            placeholder="Penulis"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          />
          <div className="flex gap-2">
            <Button onClick={handleSave}>{editingId ? "Update" : "Tambah"}</Button>
            {editingId && (
              <Button
                variant="outline"
                onClick={() => {
                  setEditingId(null)
                  setFormData({ title: "", excerpt: "", content: "", image_url: "", author: "" })
                }}
              >
                Batal
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* News List */}
      <div className="grid gap-4">
        {news.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-2">Penulis: {item.author}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditingId(item.id)
                    setFormData({
                      title: item.title,
                      excerpt: item.excerpt,
                      content: item.content,
                      image_url: item.image_url,
                      author: item.author,
                    })
                  }}
                >
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
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
