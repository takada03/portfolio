import { motion } from 'framer-motion'

const stages = [
  'Организационный момент',
  'Актуализация знаний',
  'Изучение нового материала',
  'Закрепление',
  'Рефлексия',
]

export default function LessonStages() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Education
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-16">
            Этапы урока
          </h1>

          <div className="space-y-8">

            {stages.map((stage, index) => (

              <motion.div
                key={index}
                whileHover={{
                  x: 10,
                }}
                className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex items-center justify-between"
              >

                <div className="flex items-center gap-6">

                  <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>

                  <h2 className="text-2xl font-semibold">
                    {stage}
                  </h2>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}