import { motion } from 'framer-motion'
import {
  BookOpen,
  Brain,
  GraduationCap,
  CheckCircle,
  FileText,
  Download,
} from 'lucide-react'

const stages = [
  {
    title: 'Организационный момент',
    icon: GraduationCap,

    text: 'Создание благоприятной атмосферы, настрой учащихся на работу и организацию деятельности.',
  },

  {
    title: 'Актуализация знаний',
    icon: Brain,

    text: 'Повторение ранее изученного материала и подготовка к восприятию новой темы.',
  },

  {
    title: 'Изучение нового материала',
    icon: BookOpen,

    text: 'Объяснение новой темы, использование современных методов и интерактивных технологий.',
  },

  {
    title: 'Закрепление знаний',
    icon: CheckCircle,

    text: 'Практическая деятельность, выполнение заданий и проверка понимания материала.',
  },
]

const documents = [
  {
    title: 'Структура открытого урока',
    file: '/docs/lesson-stages/lesson-structure.docx',
  },
]

const gallery = [
  '/images/lesson-stages/lesson1.jpg',
  '/images/lesson-stages/lesson2.jpg',
  '/images/lesson-stages/lesson3.jpg',
]

export default function LessonStages() {
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
            Education
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-10">
            Этапы
            <br />
            урока
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Структура современного урока,
            методы организации образовательного процесса
            и педагогические технологии,
            используемые в работе с учащимися.
          </p>

        </motion.div>

        {/* STAGES */}
        <div className="space-y-8 mb-24">

          {stages.map((stage, index) => {

            const Icon = stage.icon

            return (

              <motion.div
                key={index}
                whileHover={{
                  x: 10,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
              >

                <div className="flex flex-col md:flex-row md:items-center gap-8">

                  <div className="w-20 h-20 rounded-3xl bg-indigo-500/20 flex items-center justify-center">

                    <Icon size={38} />

                  </div>

                  <div>

                    <h2 className="text-3xl font-bold mb-4">
                      {stage.title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                      {stage.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            )
          })}

        </div>

        {/* DOCUMENTS */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Методические материалы
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {documents.map((doc, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex items-center justify-between"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">

                    <FileText size={28} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold mb-2">
                      {doc.title}
                    </h3>

                    <p className="text-gray-500">
                      DOCX File
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

      </div>

    </section>
  )
}