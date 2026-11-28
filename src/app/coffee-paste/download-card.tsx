"use client"

import { useState } from "react"
import { Download } from "lucide-react"

// Every version is uploaded to this Google Drive folder. New file in, same
// link, nothing on the site to change.
const DOWNLOAD_FOLDER = "https://drive.google.com/drive/folders/1D4H_gumWBV4GtOtOO_EEF3qhtB_lpce_"

export default function DownloadCard() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <a
        href={DOWNLOAD_FOLDER}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setClicked(true)}
        className="inline-flex items-center gap-2 rounded-2xl bg-[#A9744A] px-6 py-3.5 text-base font-medium text-white shadow-lg transition-transform active:scale-[0.98] hover:bg-[#8A5A34]"
      >
        <Download className="h-5 w-5" />
        Open download folder
      </a>
      <p className="mt-3 text-sm text-gray-500">
        Free. Pick the .zip for Windows, or the .apk for Android.
      </p>

      {clicked && (
        <div
          role="status"
          className="mt-5 flex gap-3 rounded-2xl bg-[#F3E7DA] dark:bg-[#2B1A0E] p-4 animate-in fade-in slide-in-from-top-1"
        >
          <div className="mt-0.5 flex-none text-[#8A5A34] dark:text-[#C79A6B]">
            <Download className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#5A3A20] dark:text-[#E6CBAE]">
              In the folder, tap the newest file
            </p>
            <p className="text-sm text-[#7A5A3E] dark:text-[#C3A989]">
              If Drive says it can&apos;t scan the file for viruses, tap Download anyway. On
              Windows, unzip it first. On Android, your phone may ask to allow installs from this
              browser — allow it once.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
