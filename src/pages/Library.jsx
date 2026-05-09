import { motion } from 'framer-motion'

const materials = [
  'Методические разработки',
  'Конспекты уроков',
  'Дидактические материалы',
  'Презентации',
  'Интерактивные задания',
  'Рабочие листы',
]

export default function Library() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Portfolio
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-16">
            Педагогическая копилка
          </h1>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {materials.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
              >

                <h2 className="text-2xl font-bold mb-4">
                  {item}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  Здесь можно разместить PDF,
                  документы, презентации и материалы.
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}