"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: string
  created_at: string
}

export default function MessagesTab() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/admin/messages", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      const data = await response.json()
      setMessages(data)
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteMessage = async (id: string) => {
    if (!confirm("Hapus pesan ini?")) return

    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      setMessages(messages.filter((m) => m.id !== id))
      setSelectedMessage(null)
    } catch (error) {
      console.error("Error deleting message:", error)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Messages List */}
      <div className="md:col-span-1">
        <h3 className="font-semibold mb-4">Daftar Pesan ({messages.length})</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {messages.map((msg) => (
            <Card
              key={msg.id}
              className={`p-3 cursor-pointer hover:bg-secondary transition-colors ${
                selectedMessage?.id === msg.id ? "bg-secondary" : ""
              }`}
              onClick={() => setSelectedMessage(msg)}
            >
              <p className="font-medium text-sm truncate">{msg.name}</p>
              <p className="text-xs text-muted-foreground truncate">{msg.subject}</p>
              <Badge variant="outline" className="mt-2 text-xs">
                {msg.status === "unread" ? "Belum Dibaca" : "Dibaca"}
              </Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* Message Detail */}
      <div className="md:col-span-2">
        {selectedMessage ? (
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Nama</label>
                <p className="font-semibold">{selectedMessage.name}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Email</label>
                <p className="font-semibold">{selectedMessage.email}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Subjek</label>
                <p className="font-semibold">{selectedMessage.subject}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Pesan</label>
                <p className="mt-2 p-3 bg-secondary rounded-md">{selectedMessage.message}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Tanggal</label>
                <p className="font-semibold">{new Date(selectedMessage.created_at).toLocaleString("id-ID")}</p>
              </div>
              <Button variant="destructive" onClick={() => deleteMessage(selectedMessage.id)}>
                Hapus Pesan
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-6 text-center text-muted-foreground">Pilih pesan untuk melihat detail</Card>
        )}
      </div>
    </div>
  )
}
