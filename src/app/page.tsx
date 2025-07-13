import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Hero />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
}
