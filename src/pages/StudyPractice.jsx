import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  School,
  BookOpen,
} from 'lucide-react'

const documents = [
  {
    title: 'Отчёт по учебной практике',
    file: '/docs/study-practice/report.docx',
  },

  {
    title: 'Задания по психологии',
    file: '/docs/study-practice/psychology.docx',
  },

  {
    title: 'Дневник практики',
    file: '/docs/study-practice/diary.docx',
  },
]

const photos = [
  '/images/study-practice/practice1.jpg',
  '/images/study-practice/practice2.jpg',
  '/images/study-practice/practice3.jpg',
]

export default function StudyPractice() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Practice
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-10">
            Учебная
            <br />
            практика
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Практика направлена на изучение
            адаптации учащихся к школьной среде,
            наблюдение за образовательным процессом
            и развитие профессиональных навыков.
          </p>

        </motion.div>

        {/* INFO BLOCKS */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <School
              className="mb-6 text-indigo-400"
              size={42}
            />

            <h2 className="text-3xl font-bold mb-6">
              База практики
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Средняя школа №153 имени А.К. Талая.
              Наблюдение за образовательным процессом,
              анализ уроков и взаимодействие с учащимися.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <BookOpen
              className="mb-6 text-indigo-400"
              size={42}
            />

            <h2 className="text-3xl font-bold mb-6">
              Цель практики
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Формирование профессиональных компетенций,
              изучение педагогической деятельности
              и адаптации учащихся к школьной среде.
            </p>

          </motion.div>

        </div>

        {/* DOCUMENTS */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Документы практики
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {documents.map((doc, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8">

                  <FileText size={30} />

                </div>

                <h3 className="text-2xl font-bold mb-8 leading-snug">
                  {doc.title}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    DOCX File
                  </span>

                  <a
                    href={doc.file}
                    target="_blank"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
                  >

                    <Download />

                  </a>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* PHOTO REPORT */}
        <div>

          <h2 className="text-4xl font-black mb-12">
            Фото отчёт
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
                  alt="Practice"
                  className="w-full aspect-[4/5] object-cover hover:scale-110 transition duration-700"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}