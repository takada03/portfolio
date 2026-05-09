import { motion } from 'framer-motion'

export default function StudyPractice() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Practice
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-16">
            Учебная практика
          </h1>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

              <img
                src="/images/practice.jpg"
                alt="Practice"
                className="w-full h-[350px] object-cover"
              />

            </div>

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Первые дни ребёнка в школе
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Практика направлена на изучение адаптации
                младших школьников к образовательной среде,
                анализ поведения и взаимодействия детей.
              </p>

              <div className="space-y-4 text-gray-400">

                <div>• Наблюдение за учащимися</div>
                <div>• Анализ уроков</div>
                <div>• Работа с документацией</div>
                <div>• Взаимодействие с педагогами</div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}