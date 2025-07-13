import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "GWA Calculator and Dean’s List Qualification System",
    description:
      "A PHP-powered tool for calculating and verifying Dean's List eligibility for WMSU CCS college students.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/nekolaiv/student-gwa-system",
    live: "#",
  },
  {
    title: "VAWC Portal - WMSU | DILG",
    description:
      "A Django-powered portal for reporting and managing Violence Against Women (VAWC) cases, built with Bootstrap and JavaScript.",
    technologies: ["Django", "Bootstrap", "CSS", "JavaScript"],
    github: "https://github.com/jdcbdev/VawcPortalFinal ",
    live: "http://vawc.jdcbdev.website/",
  },
  {
    title: "Items Crudified",
    description:
      "A Django-based item manager with full CRUD features for easy tracking and organization.",
    technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
    github: "https://github.com/nekolaiv/items-crudified",
    live: "https://nekolaiv.pythonanywhere.com/",
  },
  {
    title: "Developer Website",
    description:
      "A minimalist portfolio website showcasing clean design principles, smooth animations, and optimal performance across all devices.",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/nekolaiv/developer-website",
    live: "https://nekolaiv.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Selected Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800"
            >
              <CardHeader>
                <CardTitle className="text-xl font-medium">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
