import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Potential from "@/components/potential"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import News from "@/components/news"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Potential />
      <Services />
      <Gallery />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
