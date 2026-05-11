import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

const principles = [
  {
    title: 'Индивидуальный подход',
    text: 'Учет особенностей и возможностей каждого ребёнка.',
  },

  {
    title: 'Современные технологии',
    text: 'Использование интерактивных методов обучения.',
  },

  {
    title: 'Развитие личности',
    text: 'Создание условий для раскрытия потенциала ученика.',
  },

  {
    title: 'Эмоциональный комфорт',
    text: 'Поддержка доброжелательной атмосферы в классе.',
  },
]

const documents = [
  {
    title: 'Презентация "Наши имена"',
    file: '/docs/creed/nashi_imea.pptx',
  },

  {
    title: 'Программа педагогического эксперимента',
    file: '/docs/creed/experiment.docx',
  },
]

const photos = [
  '/images/creed/photo1.jpg',
  '/images/creed/photo2.jpg',
  '/images/creed/photo3.jpg',
]

export default function Creed() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Philosophy
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-10">
            Педагогическое
            <br />
            кредо
          </h1>

          <div className="max-w-4xl">

            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-10">
              «Каждый ребёнок уникален,
              а задача педагога —
              помочь раскрыть его потенциал,
              создать условия для развития
              и вдохновить на обучение»
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Педагогическая деятельность основана
              на уважении личности ребёнка,
              использовании современных образовательных технологий
              и создании комфортной образовательной среды.
            </p>

          </div>

        </motion.div>

        {/* PRINCIPLES */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Основные принципы
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {principles.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <Sparkles
                  className="mb-6 text-indigo-400"
                  size={36}
                />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* DOCUMENTS */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Методическая деятельность
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {documents.map((doc, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex items-center justify-between"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">

                    <FileText size={28} />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold mb-2">
                      {doc.title}
                    </h3>

                    <p className="text-gray-500">
                      DOCX / PPTX файл
                    </p>

                  </div>

                </div>

                <a
                  href={doc.file}
                  target="_blank"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
                >

                  <Download />

                </a>

              </motion.div>

            ))}

          </div>

        </div>

        {/* PHOTO SECTION */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Педагогическая деятельность
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {photos.map((photo, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="overflow-hidden rounded-[35px] border border-white/10"
              >

                <img
                  src={photo}
                  alt="Photo"
                  className="w-full aspect-[4/5] object-cover hover:scale-110 transition duration-700"
                />

              </motion.div>

            ))}

          </div>

        </div>

        {/* FINAL BLOCK */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl p-12"
        >

          <GraduationCap
            className="mb-8 text-indigo-300"
            size={48}
          />

          <h2 className="text-4xl font-black mb-6">
            Моя цель
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl">
            Создать образовательную среду,
            в которой каждый ученик сможет
            чувствовать поддержку,
            уверенность в своих силах
            и стремление к развитию.
          </p>

        </motion.div>

      </div>

    </section>
  )
}