export default function About() {
  const stats = [
    { label: "Penduduk", value: "5,234" },
    { label: "Keluarga", value: "1,156" },
    { label: "Tahun Berdiri", value: "1987" },
    { label: "Luas Wilayah", value: "45 km²" },
  ]

  const officials = [
    {
      name: "Budi Santoso",
      position: "Kepala Desa",
      image: "/kepala-desa-pria.jpg",
    },
    {
      name: "Siti Nurhaliza",
      position: "Sekretaris Desa",
      image: "/sekretaris-desa-wanita.jpg",
    },
    {
      name: "Ahmad Wijaya",
      position: "Bendahara Desa",
      image: "/bendahara-desa-pria.jpg",
    },
    {
      name: "Rina Kusuma",
      position: "Kepala Urusan Pembangunan",
      image: "/kepala-urusan-pembangunan-wanita.jpg",
    },
    {
      name: "Hendra Gunawan",
      position: "Kepala Urusan Pemerintahan",
      image: "/kepala-urusan-pemerintahan-pria.jpg",
    },
    {
      name: "Dewi Lestari",
      position: "Kepala Urusan Kesejahteraan",
      image: "/kepala-urusan-kesejahteraan-wanita.jpg",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Tentang Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Profil Desa Tounelet Satu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desa Tounelet Satu adalah desa yang terletak di kecamatan Sonder, Minahasa dengan potensi pertanian dan
            peternakan babi yang besar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="/village-community-gathering-traditional-culture.jpg"
            alt="Tentang Desa"
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Sejarah Desa</h3>
              <p className="text-foreground/80 leading-relaxed">
                Desa Sejahtera didirikan pada tahun 1987 dengan nama awal Desa Tounelet Satu. Bermula dari sebuah
                pemukiman kecil yang terdiri dari beberapa keluarga petani, desa ini berkembang pesat menjadi komunitas
                yang solid dan sejahtera. Melalui kerja keras dan gotong royong, masyarakat desa terus membangun
                infrastruktur dan meningkatkan kualitas hidup bersama.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Visi Kami</h3>
              <p className="text-foreground/80 leading-relaxed">
                Mewujudkan desa yang maju, mandiri, dan sejahtera dengan memanfaatkan potensi lokal dan teknologi modern
                untuk meningkatkan kualitas hidup masyarakat.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Misi Kami</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Meningkatkan kesejahteraan ekonomi masyarakat</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Menyediakan layanan publik yang berkualitas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Melestarikan budaya dan lingkungan lokal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-20" id="officials">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Struktur Organisasi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perangkat Desa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tim profesional yang berdedikasi untuk melayani dan memajukan Desa Sejahtera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officials.map((official) => (
              <div
                key={official.name}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <img
                  src={official.image || "/placeholder.svg"}
                  alt={official.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{official.name}</h3>
                  <p className="text-primary font-semibold">{official.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
