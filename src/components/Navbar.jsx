import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-xl font-black tracking-[0.3em]">
          ELIZAVETA
        </h1>

        <nav className="flex gap-10 text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition">
            Главная
          </Link>

          <Link to="/gallery" className="hover:text-white transition">
            Галерея
          </Link>

          <Link to="/video" className="hover:text-white transition">
            Видео
          </Link>
        </nav>
      </div>
    </header>
  )
}