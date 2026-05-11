import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  BookOpen,
} from 'lucide-react'

const materials = [
  {
    title: 'Урок математики',
    subject: 'Математика',
    file: '/docs/library/math.docx',
  },

  {
    title: 'Урок русского языка',
    subject: 'Русский язык',
    file: '/docs/library/russian.docx',
  },

  {
    title: 'Урок белорусского языка',
    subject: 'Белорусский язык',
    file: '/docs/library/belarusian.docx',
  },

  {
    title: 'Белорусская литература',
    subject: 'Литература',
    file: '/docs/library/literature.docx',
  },

  {
    title: 'Открытый урок',
    subject: 'Методическая разработка',
    file: '/docs/library/open-lesson.docx',
  },
]

export default function Library() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
            Materials
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-10">
            Педагогическая
            <br />
            копилка
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            В разделе представлены методические разработки,
            конспекты уроков, дидактические материалы
            и учебные ресурсы,
            используемые в образовательном процессе.
          </p>

        </motion.div>

        {/* MATERIALS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {materials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8">

                <BookOpen size={30} />

              </div>

              <p className="text-indigo-400 mb-3 text-sm uppercase tracking-[0.2em]">
                {item.subject}
              </p>

              <h2 className="text-2xl font-bold mb-6 leading-snug">
                {item.title}
              </h2>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3 text-gray-500">

                  <FileText size={18} />

                  <span>DOCX File</span>

                </div>

                <a
                  href={item.file}
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

    </section>
  )
}