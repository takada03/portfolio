import { motion } from 'framer-motion'

export default function Creed() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Portfolio
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-16">
            Педагогическое кредо
          </h1>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Моя философия
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg">
                Каждый ребёнок уникален.
                Главная задача педагога —
                раскрыть потенциал ученика,
                создать комфортную образовательную среду
                и вдохновить на развитие.
              </p>

            </div>

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Основные принципы
              </h2>

              <ul className="space-y-4 text-gray-300 text-lg">
                <li>• Индивидуальный подход</li>
                <li>• Современные технологии</li>
                <li>• Поддержка и развитие</li>
                <li>• Уважение личности ребёнка</li>
              </ul>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}