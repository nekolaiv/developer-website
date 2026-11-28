import type { Metadata } from "next"
import { CloudRain, Download, Github, WifiOff, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Wash or Not - Nekolaiv",
  description:
    "Will your clothes dry today? A simple rain guide for laundry day. Download the Android app.",
}

// Every version of the APK is uploaded to this Google Drive folder.
const APK_URL = "https://drive.google.com/drive/folders/1Go8yh_C59EujodsVwI6Sd4oXFd4oWbYW"
const REPO_URL = "https://github.com/nekolaiv/wash-or-not"

const steps = [
  "Open the download folder and tap the newest APK file, then Download. If Drive says it can't scan the file for viruses, tap Download anyway.",
  "If your phone asks, allow installs from this browser. This is normal for apps outside the Play Store.",
  "Tap Install, then open Wash or Not.",
]

const facts = [
  {
    icon: CloudRain,
    title: "Rain only",
    text: "The answer looks at rain from 8 AM to 6 PM. Clothes are assumed to hang outside.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    text: "It keeps your last forecast, so you still see an answer with no signal.",
  },
  {
    icon: Eye,
    title: "A guide, not a promise",
    text: "Weather can change. Always peek at the sky before you hang your clothes.",
  },
]

export default function WashOrNotPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <section className="pt-14 pb-10">
          <div
            aria-hidden="true"
            className="w-20 h-20 rounded-[26px] grid place-items-center shadow-lg bg-gradient-to-b from-[#8DB6DC] to-[#5B8DC0]"
          >
            <svg viewBox="0 0 100 100" className="w-12 h-12 fill-white stroke-white" strokeWidth={3} strokeLinejoin="round">
              <path
                fillRule="evenodd"
                d="M36 20 Q50 33 64 20 L80 28 L94 46 L82 56 L74 48 L74 86 L26 86 L26 48 L18 56 L6 46 L20 28 Z M50 40 C50 40 35 56 35 66 A15 15 0 0 0 65 66 C65 56 50 40 50 40 Z"
              />
            </svg>
          </div>

          <h1 className="mt-7 text-4xl sm:text-5xl font-light tracking-tight">
            Wash or Not<span className="text-[#6A9BCC]">.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Will your clothes dry today? One look tells you if it is a good day to wash and hang your laundry outside.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#6A9BCC] px-6 py-3.5 text-base font-medium text-white shadow-lg transition-transform active:scale-[0.98] hover:bg-[#5B8DC0]"
            >
              <Download className="h-5 w-5" />
              Download for Android
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-800 px-5 py-3.5 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              Code
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-500">Free APK file on Google Drive. Android 6 or newer.</p>
        </section>

        <section className="rounded-3xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-base font-medium mb-4">How to install</h2>
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex-none h-6 w-6 rounded-lg bg-[#DDE9F6] dark:bg-[#263444] text-[#5B8DC0] dark:text-[#86B3DE] text-xs font-medium grid place-items-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-4 grid gap-3">
          {facts.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl bg-gray-100 dark:bg-gray-900 p-4"
            >
              <Icon className="h-5 w-5 mt-0.5 flex-none text-[#6A9BCC]" />
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            </div>
          ))}
        </section>

        <p className="mt-10 text-center text-xs text-gray-500">Weather by Open-Meteo.</p>
      </div>
    </main>
  )
}
