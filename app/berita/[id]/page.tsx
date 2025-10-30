"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"

export default function NewsDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id

  // Data berita lengkap
  const newsData = {
    1: {
      id: 1,
      title: "Peluncuran Program Pertanian Organik",
      date: "15 Oktober 2024",
      author: "Admin Desa",
      image: "/organic-farming-agriculture.jpg",
      excerpt:
        "Desa Sejahtera meluncurkan program pertanian organik untuk meningkatkan kualitas hasil panen dan kesehatan masyarakat.",
      content: `
        Dalam upaya meningkatkan kualitas hidup masyarakat dan menjaga kelestarian lingkungan, Desa Sejahtera telah meluncurkan Program Pertanian Organik yang komprehensif.

        Program ini dirancang untuk:
        • Meningkatkan kualitas hasil panen melalui metode pertanian berkelanjutan
        • Mengurangi penggunaan pestisida dan pupuk kimia berbahaya
        • Melatih petani lokal tentang teknik pertanian organik modern
        • Membuka pasar baru untuk produk organik desa

        Dengan dukungan penuh dari pemerintah desa dan partisipasi aktif masyarakat, program ini diharapkan dapat meningkatkan pendapatan petani hingga 40% dalam tahun pertama implementasi.

        Peserta program akan mendapatkan:
        • Pelatihan gratis tentang pertanian organik
        • Bantuan modal untuk pembelian bibit dan peralatan
        • Akses ke pasar untuk menjual produk organik
        • Sertifikasi organik internasional

        Kami mengundang semua petani di Desa Sejahtera untuk bergabung dalam program revolusioner ini. Pendaftaran dibuka hingga akhir bulan Oktober 2024.
      `,
    },
    2: {
      id: 2,
      title: "Renovasi Jalan Desa Selesai",
      date: "10 Oktober 2024",
      author: "Admin Desa",
      image: "/road-construction-infrastructure.jpg",
      excerpt:
        "Proyek renovasi jalan utama desa telah selesai dilaksanakan dengan hasil yang memuaskan dan aman untuk lalu lintas.",
      content: `
        Proyek renovasi jalan utama Desa Sejahtera telah berhasil diselesaikan dengan hasil yang memuaskan. Pekerjaan yang dimulai pada bulan Agustus 2024 ini telah mencakup seluruh ruas jalan utama sepanjang 5 kilometer.

        Hasil Renovasi:
        • Permukaan jalan yang halus dan aman untuk semua jenis kendaraan
        • Sistem drainase yang baik untuk mencegah genangan air
        • Marka jalan yang jelas dan reflektif
        • Lampu penerangan jalan di beberapa titik strategis

        Investasi Total: Rp 2.5 Miliar
        Durasi Proyek: 2 bulan
        Kontraktor: PT Jaya Konstruksi

        Dengan selesainya proyek ini, diharapkan:
        • Meningkatkan aksesibilitas ke desa
        • Mengurangi waktu tempuh perjalanan
        • Meningkatkan keselamatan berkendara
        • Mendukung pertumbuhan ekonomi lokal

        Terima kasih atas kesabaran dan dukungan masyarakat selama proses renovasi berlangsung.
      `,
    },
    3: {
      id: 3,
      title: "Festival Budaya Desa Sejahtera 2024",
      date: "05 Oktober 2024",
      author: "Admin Desa",
      image: "/cultural-festival-traditional-celebration.jpg",
      excerpt:
        "Rayakan keberagaman budaya lokal melalui festival tahunan yang menampilkan seni, musik, dan kuliner tradisional.",
      content: `
        Festival Budaya Desa Sejahtera 2024 akan diselenggarakan dengan meriah untuk merayakan kekayaan budaya lokal dan memperkuat ikatan komunitas.

        Jadwal Festival:
        • Tanggal: 20-22 Oktober 2024
        • Lokasi: Lapangan Desa Sejahtera
        • Jam Operasional: 09:00 - 22:00 WIT

        Acara-acara Utama:
        • Pertunjukan Tari Tradisional
        • Kompetisi Musik Lokal
        • Pameran Kerajinan Tangan
        • Lomba Masakan Tradisional
        • Pasar Kuliner Desa
        • Pertunjukan Teater Rakyat

        Peserta dari Luar Desa:
        Kami mengundang masyarakat dari desa-desa tetangga dan wisatawan untuk merasakan keindahan budaya Desa Sejahtera.

        Tiket Masuk:
        • Dewasa: Rp 25.000
        • Anak-anak: Rp 15.000
        • Keluarga (4 orang): Rp 75.000

        Mari bersama-sama melestarikan dan merayakan warisan budaya kita yang berharga!
      `,
    },
  }

  const news = newsData[id as keyof typeof newsData]

  if (!news) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Berita Tidak Ditemukan</h1>
          <button
            onClick={() => router.push("/#news")}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Kembali ke Berita
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/#news")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Share2 size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="mb-8 rounded-xl overflow-hidden h-96">
          <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{news.title}</h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{news.author}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-xl text-foreground/80 mb-8 leading-relaxed">{news.excerpt}</p>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {news.content.split("\n").map((paragraph, index) => {
            if (paragraph.trim().startsWith("•")) {
              return (
                <li key={index} className="text-foreground/70 leading-relaxed ml-6 mb-2">
                  {paragraph.trim().substring(1).trim()}
                </li>
              )
            }
            if (paragraph.trim().endsWith(":")) {
              return (
                <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                  {paragraph.trim()}
                </h3>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-foreground/70 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              )
            }
            return null
          })}
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <button
            onClick={() => router.push("/#news")}
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Kembali ke Semua Berita
          </button>
        </div>
      </article>
    </main>
  )
}
