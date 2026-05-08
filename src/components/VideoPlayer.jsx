import { Play, Pause } from 'lucide-react'
import { useRef, useState } from 'react'

export default function VideoPlayer() {
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
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
        <video
          ref={videoRef}
          className="w-full"
          src="/videos/presentation.mp4"
        />

        <button
          onClick={toggleVideo}
          className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center"
        >
          {playing ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  )
}