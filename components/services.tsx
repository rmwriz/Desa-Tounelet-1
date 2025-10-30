import {
  Building2,
  Heart,
  BookOpen,
  Zap,
  Droplets,
  Users,
  Utensils,
  Trophy,
  Church,
  Truck,
  Wifi,
  Home,
} from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Balai Desa",
      description: "Pusat administrasi dan pelayanan publik untuk semua kebutuhan masyarakat desa",
    },
    {
      icon: Heart,
      title: "Puskesmas",
      description: "Fasilitas kesehatan dasar dengan layanan medis dan program vaksinasi",
    },
    {
      icon: BookOpen,
      title: "Sekolah Dasar",
      description: "Fasilitas pendidikan berkualitas untuk anak-anak usia sekolah dasar",
    },
    {
      icon: Zap,
      title: "Jaringan Listrik",
      description: "Sistem kelistrikan yang stabil untuk mendukung kehidupan masyarakat",
    },
    {
      icon: Droplets,
      title: "Sistem Air Bersih",
      description: "Penyediaan air bersih berkualitas untuk kebutuhan sehari-hari masyarakat",
    },
    {
      icon: Users,
      title: "Ruang Pertemuan",
      description: "Fasilitas untuk kegiatan sosial, rapat, dan acara-acara komunitas",
    },
    {
      icon: Utensils,
      title: "Pasar Tradisional",
      description: "Tempat transaksi jual beli kebutuhan sehari-hari dan produk lokal",
    },
    {
      icon: Trophy,
      title: "Lapangan Olahraga",
      description: "Fasilitas olahraga untuk kegiatan fisik dan kompetisi masyarakat",
    },
    {
      icon: Church,
      title: "Tempat Ibadah",
      description: "Fasilitas ibadah untuk berbagai agama dan kepercayaan masyarakat",
    },
    {
      icon: Truck,
      title: "Jalan Desa",
      description: "Infrastruktur jalan yang baik untuk mobilitas dan transportasi masyarakat",
    },
    {
      icon: Wifi,
      title: "Pusat Internet",
      description: "Akses internet publik untuk mendukung literasi digital masyarakat",
    },
    {
      icon: Home,
      title: "Rumah Dhuafa",
      description: "Program perumahan untuk keluarga kurang mampu dan pemberdayaan ekonomi",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Sarana Prasarana</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">PSU (Prasarana, Sarana &amp; Utilitas)</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fasilitas dan sarana prasarana lengkap yang tersedia untuk mendukung kehidupan masyarakat desa
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
