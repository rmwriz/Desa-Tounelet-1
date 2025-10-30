"use client"

import { Calendar, User } from "lucide-react"
import Link from "next/link"

export default function News() {
  const news = [
    {
      id: 1,
      title: "Peluncuran Program Pertanian Organik",
      excerpt:
        "Desa Sejahtera meluncurkan program pertanian organik untuk meningkatkan kualitas hasil panen dan kesehatan masyarakat.",
      date: "15 Oktober 2024",
      author: "Admin Desa",
      image: "/organic-farming-agriculture.jpg",
    },
    {
      id: 2,
      title: "Renovasi Jalan Desa Selesai",
      excerpt:
        "Proyek renovasi jalan utama desa telah selesai dilaksanakan dengan hasil yang memuaskan dan aman untuk lalu lintas.",
      date: "10 Oktober 2024",
      author: "Admin Desa",
      image: "/road-construction-infrastructure.jpg",
    },
    {
      id: 3,
      title: "Festival Budaya Desa Sejahtera 2024",
      excerpt:
        "Rayakan keberagaman budaya lokal melalui festival tahunan yang menampilkan seni, musik, dan kuliner tradisional.",
      date: "05 Oktober 2024",
      author: "Admin Desa",
      image: "/cultural-festival-traditional-celebration.jpg",
    },
  ]

  return (
    <section id="news" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Berita Terbaru</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Informasi dan Pengumuman</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tetap update dengan berita dan pengumuman terbaru dari Desa Sejahtera
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link key={item.id} href={`/berita/${item.id}`}>
              <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {item.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/berita">
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
              Lihat Semua Berita
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
