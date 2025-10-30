"use client"

import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AllNewsPage() {
  const allNews = [
    {
      id: 1,
      title: "Peluncuran Program Pertanian Organik",
      excerpt:
        "Desa Sejahtera meluncurkan program pertanian organik untuk meningkatkan kualitas hasil panen dan kesehatan masyarakat.",
      date: "15 Oktober 2024",
      author: "Admin Desa",
      image: "/organic-farming-agriculture.jpg",
      content:
        "Program pertanian organik ini dirancang untuk memberikan pelatihan kepada petani lokal tentang teknik pertanian berkelanjutan...",
    },
    {
      id: 2,
      title: "Renovasi Jalan Desa Selesai",
      excerpt:
        "Proyek renovasi jalan utama desa telah selesai dilaksanakan dengan hasil yang memuaskan dan aman untuk lalu lintas.",
      date: "10 Oktober 2024",
      author: "Admin Desa",
      image: "/road-construction-infrastructure.jpg",
      content:
        "Renovasi jalan sepanjang 5 kilometer telah diselesaikan dengan anggaran yang efisien dan kualitas terbaik...",
    },
    {
      id: 3,
      title: "Festival Budaya Desa Sejahtera 2024",
      excerpt:
        "Rayakan keberagaman budaya lokal melalui festival tahunan yang menampilkan seni, musik, dan kuliner tradisional.",
      date: "05 Oktober 2024",
      author: "Admin Desa",
      image: "/cultural-festival-traditional-celebration.jpg",
      content: "Festival budaya tahun ini menghadirkan berbagai pertunjukan seni tradisional dari berbagai daerah...",
    },
    {
      id: 4,
      title: "Pembukaan Pusat Kesehatan Masyarakat Baru",
      excerpt:
        "Pusat kesehatan masyarakat baru dilengkapi dengan fasilitas modern untuk melayani kesehatan warga desa.",
      date: "01 Oktober 2024",
      author: "Admin Desa",
      image: "/modern-health-center.jpg",
      content: "Pusat kesehatan baru ini dilengkapi dengan peralatan medis modern dan tenaga kesehatan profesional...",
    },
    {
      id: 5,
      title: "Program Beasiswa untuk Pelajar Berprestasi",
      excerpt:
        "Desa Sejahtera memberikan beasiswa kepada 50 pelajar berprestasi untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.",
      date: "25 September 2024",
      author: "Admin Desa",
      image: "/students-scholarship-education.jpg",
      content: "Program beasiswa ini merupakan komitmen desa untuk meningkatkan kualitas sumber daya manusia...",
    },
    {
      id: 6,
      title: "Pelatihan Keterampilan UMKM untuk Ibu Rumah Tangga",
      excerpt:
        "Desa mengadakan pelatihan keterampilan untuk memberdayakan ibu rumah tangga dalam mengembangkan usaha kecil menengah.",
      date: "20 September 2024",
      author: "Admin Desa",
      image: "/women-training-skills-umkm.jpg",
      content:
        "Pelatihan ini mencakup berbagai keterampilan seperti membuat kerajinan tangan, memasak, dan berdagang online...",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#news" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft size={20} />
            Kembali
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Semua Berita</h1>
          <p className="text-foreground/70 text-lg">Informasi dan pengumuman terbaru dari Desa Sejahtera</p>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((item) => (
            <Link key={item.id} href={`/berita/${item.id}`}>
              <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
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
                  <p className="text-foreground/70 leading-relaxed flex-grow">{item.excerpt}</p>
                  <div className="mt-4 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Baca Selengkapnya →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
