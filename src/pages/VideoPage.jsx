import { useRef, useState } from 'react'
import {
  Play,
  Pause,
  Volume2,
} from 'lucide-react'

export default function VideoPage() {
  const videoRef = useRef(null)

  const [playing, setPlaying] = useState(false)

  const toggleVideo = () => {
    if (!videoRef.current) return

    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black mb-16">
          Видео уроков
        </h1>

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

          <video
            ref={videoRef}
            className="w-full"
            src="/videos/presentation.mp4"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">

            <button
              onClick={toggleVideo}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              {playing ? (
                <Pause size={28} />
              ) : (
                <Play size={28} />
              )}
            </button>

            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">

              <Volume2 size={18} />

              <span className="text-sm text-gray-200">
                Premium Video Player
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}