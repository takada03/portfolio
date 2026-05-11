import { motion } from 'framer-motion'

import {
  Mail,
  Send,
  GraduationCap,
  MapPin,
} from 'lucide-react'

export default function Contacts() {

  return (

    <section className="relative min-h-screen overflow-hidden px-6 pt-40 pb-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Contact
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-10">
            Контакты
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Обратная связь,
            профессиональное взаимодействие,
            педагогическая деятельность
            и сотрудничество.
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >

            {/* PROFILE */}
            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <div className="flex flex-col md:flex-row gap-8 items-center">

                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 blur-2xl opacity-50" />

                  <img
                    src="/images/contact/profile.jpg"
                    alt="Profile"
                    className="relative w-40 h-40 rounded-full object-cover border border-white/10"
                  />

                </div>

                <div>

                  <h2 className="text-4xl font-black mb-4 leading-tight">
                    Скобкарёва
                    <br />
                    Анна Павловна
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Студентка факультета начального образования.
                    Интересуюсь современными образовательными технологиями
                    и педагогической деятельностью.
                  </p>

                </div>

              </div>

            </div>

            {/* CONTACT CARDS */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* EMAIL */}
              <motion.a
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                href="mailto:anyaosk8592163@gmail.com"
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 block"
              >

                <Mail
                  className="mb-6 text-indigo-400"
                  size={42}
                />

                <h3 className="text-2xl font-bold mb-3">
                  Email
                </h3>

                <p className="text-gray-400 break-all">
                  anyaosk8592163@gmail.com
                </p>

              </motion.a>

              {/* TELEGRAM */}
              <motion.a
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                href="https://t.me/anita_revva"
                target="_blank"
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 block"
              >

                <Send
                  className="mb-6 text-indigo-400"
                  size={42}
                />

                <h3 className="text-2xl font-bold mb-3">
                  Telegram
                </h3>

                <p className="text-gray-400">
                  @anita_revva
                </p>

              </motion.a>

            

              {/* EDUCATION */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <GraduationCap
                  className="mb-6 text-indigo-400"
                  size={42}
                />

                <h3 className="text-2xl font-bold mb-3">
                  Образование
                </h3>

                <p className="text-gray-400">
                  Факультет начального образования
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* BIG CARD */}
            <div className="relative rounded-[50px] overflow-hidden border border-white/10 min-h-[750px]">

              {/* ANIMATED GRADIENT */}
<div className="absolute inset-0 overflow-hidden">

  {/* GRADIENT 1 */}
  <motion.div
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -50, 50, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/40 rounded-full blur-[120px]"
  />

  {/* GRADIENT 2 */}
  <motion.div
    animate={{
      x: [0, -100, 50, 0],
      y: [0, 100, -50, 0],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[120px]"
  />

  {/* GRADIENT 3 */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[120px]"
  />

</div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="relative h-full flex flex-col justify-end p-12">

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                  }}
                >

                  <p className="uppercase tracking-[0.3em] text-gray-400 mb-6 text-sm">
                    Educational Portfolio
                  </p>

                  <h2 className="text-5xl font-black leading-tight mb-8">
                    Современное
                    <br />
                    педагогическое
                    <br />
                    пространство
                  </h2>

                  <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
                    Развитие профессиональных компетенций,
                    педагогическое творчество
                    и современные образовательные технологии.
                  </p>

                  {/* LOCATION */}
                  <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 w-fit">

                    <MapPin size={22} />

                    <span className="text-lg">
                      Минск, Беларусь
                    </span>

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}