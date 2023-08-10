'use client'
import Hero from "@/components/Hero"
import Reviews from "@/components/Reviews"
import About from "@/components/About"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Pricing />
      <Contact />
    </main>
  )
}