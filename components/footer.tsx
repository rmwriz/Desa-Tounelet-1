import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Desa Tounelet Satu</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Membangun masa depan yang lebih baik melalui kolaborasi dan inovasi untuk kesejahteraan bersama.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#news" className="text-background/80 hover:text-background transition-colors">
                  Berita
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Pertanian
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Pendidikan
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Kesehatan
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Infrastruktur
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
            <p>&copy; 2025 Desa Tounelet Satu. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Syarat Layanan
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
