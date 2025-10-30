export default function Gallery() {
  const images = [
    {
      id: 1,
      title: "Lingkungan Pertanian dan Peternakan",
      image: "/rice-field-landscape-sunset.jpg",
    },
    {
      id: 2,
      title: "UMKM Desa",
      image: "/community-gathering-cooperation.jpg",
    },
    {
      id: 3,
      title: "Pasar Tradisional",
      image: "/traditional-market-local-products.jpg",
    },
    {
      id: 4,
      title: "Sekolah Desa",
      image: "/school-building-education.jpg",
    },
    {
      id: 5,
      title: "Rumah Ibadah",
      image: "/mosque-temple-religious-building.jpg",
    },
    {
      id: 6,
      title: "Kegiatan Desa",
      image: "/village-event-celebration-gathering.jpg",
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Galeri</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Momen Berharga Desa Sejahtera</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi foto kegiatan dan momen indah dari kehidupan sehari-hari di desa kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div key={item.id} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
