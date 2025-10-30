import { Sprout, Fish, Briefcase, Hammer, Truck, Lightbulb } from "lucide-react"

export default function Potential() {
  const potentials = [
    {
      icon: Sprout,
      title: "Pertanian Organik",
      description: "Lahan subur dengan hasil panen berkualitas tinggi dan potensi ekspor",
    },
    {
      icon: Fish,
      title: "Perikanan",
      description: "Sumber air yang melimpah untuk budidaya ikan dan udang berkualitas",
    },
    {
      icon: Briefcase,
      title: "UMKM Lokal",
      description: "Produk kerajinan tangan dan makanan tradisional yang diminati pasar",
    },
    {
      icon: Hammer,
      title: "Kerajinan Tradisional",
      description: "Warisan budaya dan keahlian lokal yang bernilai ekonomi tinggi",
    },
    {
      icon: Truck,
      title: "Pariwisata",
      description: "Keindahan alam dan budaya lokal yang menarik untuk pengembangan wisata",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Lokal",
      description: "Ide-ide kreatif masyarakat untuk pengembangan ekonomi berkelanjutan",
    },
  ]

  return (
    <section id="potential" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Potensi Desa</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sumber Daya dan Potensi Ekonomi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desa kami memiliki berbagai potensi yang dapat dikembangkan untuk meningkatkan kesejahteraan masyarakat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {potentials.map((potential, index) => {
            const Icon = potential.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{potential.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{potential.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
