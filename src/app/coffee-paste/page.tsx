import type { Metadata } from "next"
import Image from "next/image"
import { Lock, MousePointer2, QrCode, Wifi } from "lucide-react"
import DownloadCard from "./download-card"

export const metadata: Metadata = {
  title: "Coffee Paste - Nekolaiv",
  description:
    "Send copy-pastes between your phone and your laptop in one tap. Scan a code, done. Download for Windows and Android.",
}

const facts = [
  {
    icon: QrCode,
    title: "Scan once, done",
    text: "Open the laptop app, scan its code with your phone's camera. That is the whole setup.",
  },
  {
    icon: Wifi,
    title: "Your own Wi-Fi only",
    text: "Phone and laptop talk directly over the local network. Nothing passes through a server.",
  },
  {
    icon: MousePointer2,
    title: "A trackpad, too",
    text: "Turn your phone into a trackpad for the laptop, with real two-finger scroll and momentum.",
  },
  {
    icon: Lock,
    title: "Private by design",
    text: "Every message is checked against the pairing code, so only your own paired laptop reads it.",
  },
]

const windowsSteps = [
  "Open the download folder above and tap the newest .zip file, then Download. If Drive says it can't scan the file for viruses, tap Download anyway. Unzip it anywhere (the whole folder, not just the .exe).",
  "Run coffee_paste.exe inside it. Windows will warn it is from an unrecognized publisher — click “More info,” then “Run anyway.”",
  "The first time, Windows Firewall will ask to let it communicate. Allow it on private networks (your home or office Wi-Fi).",
  "A code appears in the window. Open Coffee Paste on your phone and scan it.",
  "Optional: double-click Create Desktop Shortcut.bat in the same folder, so you can open it without digging through the folder. Closing the window quits the app — just open the shortcut again next time.",
]

const androidSteps = [
  "Open the download folder above and tap the newest .apk file, then Download. If Drive says it can't scan the file for viruses, tap Download anyway. Open it when it finishes.",
  "Your phone will ask to allow installs from this browser — allow it once. This is normal for an app outside the Play Store.",
  "Tap Install, then open Coffee Paste and scan the code shown on your laptop.",
]

export default function CoffeePastePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <section className="pt-14 pb-10">
          <Image
            src="/images/coffee-paste-icon.png"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-[26px] shadow-lg"
            priority
          />

          <h1 className="mt-7 text-4xl sm:text-5xl font-light tracking-tight">
            Coffee Paste<span className="text-[#A9744A]">.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Send copy-pastes between your phone and your laptop in one tap. Scan a code, and it
            just works.
          </p>

          <div className="mt-8">
            <DownloadCard />
          </div>
        </section>

        <section className="grid gap-3">
          {facts.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl bg-gray-100 dark:bg-gray-900 p-4">
              <Icon className="h-5 w-5 mt-0.5 flex-none text-[#A9744A]" />
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            </div>
          ))}
        </section>

        <details className="mt-4 group rounded-3xl border border-gray-200 dark:border-gray-800 p-6 open:pb-6">
          <summary className="cursor-pointer list-none text-base font-medium flex items-center justify-between">
            Windows setup guide
            <span className="text-gray-400 text-sm group-open:hidden">show</span>
            <span className="text-gray-400 text-sm hidden group-open:inline">hide</span>
          </summary>
          <ol className="mt-4 space-y-3">
            {windowsSteps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex-none h-6 w-6 rounded-lg bg-[#F3E7DA] dark:bg-[#2B1A0E] text-[#8A5A34] dark:text-[#C79A6B] text-xs font-medium grid place-items-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </details>

        <details className="mt-4 group rounded-3xl border border-gray-200 dark:border-gray-800 p-6 open:pb-6">
          <summary className="cursor-pointer list-none text-base font-medium flex items-center justify-between">
            Android setup guide
            <span className="text-gray-400 text-sm group-open:hidden">show</span>
            <span className="text-gray-400 text-sm hidden group-open:inline">hide</span>
          </summary>
          <ol className="mt-4 space-y-3">
            {androidSteps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex-none h-6 w-6 rounded-lg bg-[#F3E7DA] dark:bg-[#2B1A0E] text-[#8A5A34] dark:text-[#C79A6B] text-xs font-medium grid place-items-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </details>

        <p className="mt-10 text-center text-xs text-gray-500">Source is private.</p>
      </div>
    </main>
  )
}
