"use client"

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">Selamat Datang di </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Desa Tounelet Satu</h1>
              <p className="text-xl text-muted-foreground">Kecaman Sonder, Minahasa </p>
            </div>
            <p className="text-foreground/80 leading-relaxed max-w-lg">
              Membangun masa depan yang lebih cerah melalui kolaborasi, inovasi, dan dedikasi untuk kesejahteraan
              bersama seluruh masyarakat desa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScroll("about")}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Pelajari Lebih Lanjut
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/village-landscape-with-green-fields-and-traditiona.jpg"
              alt="Desa Sejahtera"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
