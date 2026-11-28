"use client"

import { useEffect, useState } from "react"
import { Download, Laptop, Smartphone } from "lucide-react"

const REPO = "https://github.com/nekolaiv/coffee-paste"
const WINDOWS_URL = `${REPO}/releases/latest/download/coffee-paste-windows.zip`
const ANDROID_URL = `${REPO}/releases/latest/download/coffee-paste-android.apk`

type Platform = "windows" | "android" | "other"

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other"
  const ua = navigator.userAgent
  if (/Android/i.test(ua)) return "android"
  if (/Windows/i.test(ua)) return "windows"
  return "other"
}

const notices: Record<"windows" | "android", { title: string; text: string }> = {
  windows: {
    title: "One more click on Windows",
    text:
      "Windows will say the app is from an unrecognized publisher. Click “More info”, then “Run anyway.” This is normal for an app outside the Microsoft Store.",
  },
  android: {
    title: "One more step on Android",
    text:
      "Your phone will ask to allow installs from this browser. Allow it once, then open the APK again to install.",
  },
}

export default function DownloadCard() {
  const [platform, setPlatform] = useState<Platform>("other")
  const [downloaded, setDownloaded] = useState<"windows" | "android" | null>(null)

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  const primaryIsWindows = platform !== "android"
  const primaryUrl = primaryIsWindows ? WINDOWS_URL : ANDROID_URL
  const primaryLabel = primaryIsWindows ? "Download for Windows" : "Download for Android"

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={primaryUrl}
          onClick={() => setDownloaded(primaryIsWindows ? "windows" : "android")}
          className="inline-flex items-center gap-2 rounded-2xl bg-[#A9744A] px-6 py-3.5 text-base font-medium text-white shadow-lg transition-transform active:scale-[0.98] hover:bg-[#8A5A34]"
        >
          <Download className="h-5 w-5" />
          {primaryLabel}
        </a>
        <a
          href={primaryIsWindows ? ANDROID_URL : WINDOWS_URL}
          onClick={() => setDownloaded(primaryIsWindows ? "android" : "windows")}
          className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-800 px-5 py-3.5 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
        >
          {primaryIsWindows ? <Smartphone className="h-5 w-5" /> : <Laptop className="h-5 w-5" />}
          {primaryIsWindows ? "Android" : "Windows"}
        </a>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Free. One file. Windows 10/11, or Android 8 or newer.
      </p>

      {downloaded && (
        <div
          role="status"
          className="mt-5 flex gap-3 rounded-2xl bg-[#F3E7DA] dark:bg-[#2B1A0E] p-4 animate-in fade-in slide-in-from-top-1"
        >
          <div className="mt-0.5 flex-none text-[#8A5A34] dark:text-[#C79A6B]">
            <Download className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#5A3A20] dark:text-[#E6CBAE]">
              {notices[downloaded].title}
            </p>
            <p className="text-sm text-[#7A5A3E] dark:text-[#C3A989]">
              {notices[downloaded].text}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
