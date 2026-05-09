import { motion } from 'framer-motion'

export default function TeachingPractice() {
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
            Педагогическая практика
          </h1>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Практическая деятельность
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Проведение уроков, взаимодействие с учащимися,
                анализ педагогической деятельности и
                развитие профессиональных компетенций.
              </p>

              <div className="space-y-4 text-gray-400">
                <div>• Проведение уроков</div>
                <div>• Работа с классом</div>
                <div>• Анализ занятий</div>
                <div>• Ведение документации</div>
              </div>

            </div>

            <div className="rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

              <img
                src="/images/teaching.jpg"
                alt="Teaching"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}