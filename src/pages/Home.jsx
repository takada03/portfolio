import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <section className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.4em] text-gray-500 mb-6 text-sm">
              Portfolio
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              Скобкарёва
              <br />
              Анна
              <br />
              Павловна
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
              Средняя школа №153 имени А.К. Талая г. Минска, 3 А класс
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">

              {/* GALLERY BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 0 40px rgba(99,102,241,0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/gallery')}
                className="px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 transition duration-300 shadow-2xl shadow-indigo-500/30"
              >
                Смотреть работы
              </motion.button>

              {/* CONTACTS BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contacts')}
                className="px-8 py-4 rounded-full border border-white/10 hover:border-white transition duration-300 bg-white/5 backdrop-blur-xl"
              >
                Контакты
              </motion.button>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-30" />

            {/* IMAGE */}
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition duration-700">

              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />

            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}