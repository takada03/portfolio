import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Пед. кредо',
    href: '/creed',
  },
  {
    title: 'Копилка',
    href: '/library',
  },
  {
    title: 'Учебная практика',
    href: '/study-practice',
  },
  {
    title: 'Этапы урока',
    href: '/lesson-stages',
  },
  {
    title: 'Пед. практика',
    href: '/teaching-practice',
  },
  {
    title: 'Преддипломная',
    href: '/prediploma',
  },
  {
    title: 'Галерея',
    href: '/gallery',
  },
  {
    title: 'Видео',
    href: '/video',
  },
  {
    title: 'Контакты',
    href: '/contacts',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-black tracking-[0.3em]"
          >
            ANNA
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex gap-6 text-sm text-gray-300">

            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-white transition duration-300 relative group"
              >
                {link.title}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black"
          >

            {/* CLOSE BUTTON */}
            <div className="flex justify-end p-6">

              <button onClick={() => setOpen(false)}>
                <X size={36} />
              </button>

            </div>

            {/* LINKS */}
            <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">

              {links.map((link, index) => (

                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >

                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl md:text-5xl font-black hover:text-indigo-400 transition duration-300"
                  >
                    {link.title}
                  </Link>

                </motion.div>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}