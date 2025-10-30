"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MessagesTab from "@/components/admin/messages-tab"
import NewsTab from "@/components/admin/news-tab"
import OfficialsTab from "@/components/admin/officials-tab"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin")
      return
    }
    setIsAuthenticated(true)
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin")
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="bg-primary-foreground text-primary hover:bg-secondary"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="messages" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="messages">Pesan Masuk</TabsTrigger>
            <TabsTrigger value="news">Berita</TabsTrigger>
            <TabsTrigger value="officials">Perangkat Desa</TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="mt-6">
            <MessagesTab />
          </TabsContent>

          <TabsContent value="news" className="mt-6">
            <NewsTab />
          </TabsContent>

          <TabsContent value="officials" className="mt-6">
            <OfficialsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
