import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.4em] text-gray-500 mb-6 text-sm">
            Premium Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            DARK
            <br />
            PREMIUM
            <br />
            UI
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
            Современное cinematic portfolio с premium visual style и smooth UX.
          </p>

          <div className="flex gap-4 flex-wrap">
            <MagneticButton>
              Смотреть работы
            </MagneticButton>

            <MagneticButton secondary>
              Контакты
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-30" />

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
  )
}