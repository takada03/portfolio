import { motion } from 'framer-motion'

export default function Prediploma() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Practice
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-16">
            Преддипломная практика
          </h1>

          <div className="grid xl:grid-cols-3 gap-8">

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-2xl font-bold mb-4">
                Исследование
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Анализ образовательного процесса и
                педагогической деятельности.
              </p>

            </div>

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-2xl font-bold mb-4">
                Практика
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Самостоятельное проведение занятий
                и организация учебной деятельности.
              </p>

            </div>

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-2xl font-bold mb-4">
                Подготовка
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Подготовка материалов и оформление
                итоговой документации.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}