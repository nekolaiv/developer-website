"use client"

import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

const experience = [
  {
    title: "Intern Developer",
    company: "VAWC Portal - WMSU | DILG",
    period: "February 2025 - July 2025",
    description:
      "Maintained and enhanced website features during internship by fixing bugs, updating components, and ensuring responsive user experience.",
  },
]

const education = [
  {
    degree: "Associate Degree in Computer Technology",
    major: "Major in Application Development",
    description:
      "A comprehensive program focused on practical and theoretical foundations of software development, including programming concepts, database management, web technologies, and hands-on integration of modern AI tools and practices.",
    skills: [
      {
        category: "Core Programming",
        items: [
          "Programming Fundamentals (C++, Java, Python, JavaScript)",
          "Object-Oriented Programming (Python, Java)",
        ],
      },
      {
        category: "Web Development",
        items: [
          "Full-Stack Web Development",
          "Frontend Development (HTML, CSS, JavaScript, React)",
          "Backend Development (Django, PHP)",
        ],
      },
      {
        category: "Database & Tools",
        items: [
          "Database Design & Management (MySQL, phpMyAdmin)",
          "Version Control (Git, GitHub)",
        ],
      },
      {
        category: "Design & Debugging",
        items: [
          "Responsive UI/UX Design with Tailwind CSS",
          "Debugging and Code Optimization",
          "Prototype Development (Figma)",
        ],
      },
      {
        category: "Mobile Development",
        items: [
          "Mobile App Development (Flutter, FlutterFlow)",
        ],
      },
      {
        category: "AI & ML",
        items: [
          "AI Model Integration (TensorFlow, scikit-learn)",
          "Prompt Engineering for LLMs (ChatGPT)",
          "AI Application Development (predictive models)",
          "AI Model Training & Deployment (Google Colab, Jupyter Notebooks)",
        ],
      },
      {
        category: "Data Analysis",
        items: [
          "Data Cleaning and Preprocessing (Pandas, NumPy)",
          "Basic Exploratory Data Analysis (EDA)",
          "Introductory Feature Engineering",
        ],
      },
      {
        category: "Others",
        items: ["Project Management & Team Collaboration"],
      },
    ],
  },
]

const skills = [
  // Programming Languages
  "JavaScript / TypeScript",
  "Python",
  "Java",
  "C++",
  "PHP",

  // Web Development
  "React / Next.js",
  "Django",
  "HTML / CSS",
  "Tailwind CSS",

  // Mobile Development
  "Flutter",
  "FlutterFlow",

  // AI & Machine Learning
  "Prompt Engineering",
  "ChatGPT",
  "AI Model Integration",
  "Model Training & Deployment (Colab, Jupyter)",

  // Tools & Practices
  "Git / GitHub",
  "MySQL / phpMyAdmin",
  "Figma",
  "Debugging & Testing",
  "Project Management",
]


export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement("a")
    link.href = "/Resume-v1.pdf" // You would place your actual resume file in the public folder
    link.download = "Nekolaiv-Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            My professional journey and technical expertise.
          </p>
          <Button
            onClick={handleDownload}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-light">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-medium">{job.title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">{job.company}</p>
                  <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-light">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {edu.major}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>

                  {edu.skills && edu.skills.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Skills Acquired:
                      </p>
                      <div className="space-y-4">
                        {edu.skills.map((skillGroup, i) => (
                          <div key={i}>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                              {skillGroup.category}
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 space-y-1">
                              {skillGroup.items.map((item, j) => (
                                <li key={j}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-light">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
