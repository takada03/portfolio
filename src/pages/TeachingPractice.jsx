import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FileText,
  Download,
  Play,
  Pause,
  Volume2,
  Maximize,
} from 'lucide-react'

const documents = [
  {
    title: 'Индивидуальный план',
    file: '/docs/practice/individual-plan.pdf',
  },

  {
    title: 'Задания по педагогике',
    file: '/docs/practice/pedagogy-tasks.pdf',
  },

  {
    title: 'Задания по психологии',
    file: '/docs/practice/psychology-tasks.pdf',
  },

  {
    title: 'Конспект урока математики',
    file: '/docs/practice/lesson-math.pdf',
  },

  {
    title: 'Конспект урока русского языка',
    file: '/docs/practice/lesson-russian.pdf',
  },

  {
    title: 'Конспект урока белорусского языка',
    file: '/docs/practice/lesson-belarusian.pdf',
  },

  {
    title: 'Воспитательное мероприятие',
    file: '/docs/practice/event.pdf',
  },

  {
    title: 'Отчёт по практике',
    file: '/docs/practice/practice-report.pdf',
  },
]

const gallery = [
  '/images/practice/practice1.jpg',
  '/images/practice/practice2.jpg',
  '/images/practice/practice3.jpg',
  '/images/practice/practice4.jpg',
]

export default function TeachingPractice() {
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
            Педагогическая
            <br />
            практика
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-4xl">
            Материалы педагогической практики,
            профессиональная деятельность,
            конспекты уроков и результаты практического обучения.
          </p>

        </motion.div>

        {/* PRACTICE INFO */}
        <div className="mb-24">

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">

            <div className="grid xl:grid-cols-2 gap-16">

              {/* LEFT */}
              <div>

                <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
                  Practice Information
                </p>

                <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                  Цели и задачи
                  <br />
                  педагогической практики
                </h2>

                <div className="space-y-8 text-gray-300 text-lg leading-relaxed">

                  <p>
                    <span className="font-bold text-white">
                      Цель практики:
                    </span>{' '}
                    приобретение студентами профессиональных навыков
                    по организации образовательного процесса
                    на I ступени общего среднего образования,
                    закрепление, расширение и систематизация знаний,
                    полученных при изучении психолого-педагогических
                    и методических дисциплин.
                  </p>

                  <div>

                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Задачи практики
                    </h3>

                    <div className="space-y-6">

                      <div className="flex gap-5">

                        <div className="min-w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                          1
                        </div>

                        <p>
                          Практическое ознакомление студентов
                          с учебными программами и учебниками,
                          особенностями и методикой преподавания
                          учебных предметов в начальных классах.
                        </p>

                      </div>

                      <div className="flex gap-5">

                        <div className="min-w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                          2
                        </div>

                        <p>
                          Развитие навыков работы
                          с методической литературой,
                          дидактическим материалом
                          и наглядными пособиями.
                        </p>

                      </div>

                      <div className="flex gap-5">

                        <div className="min-w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                          3
                        </div>

                        <p>
                          Формирование умений и навыков
                          целеполагания, проектирования
                          и организации процесса обучения.
                        </p>

                      </div>

                      <div className="flex gap-5">

                        <div className="min-w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                          4
                        </div>

                        <p>
                          Формирование практических умений
                          применения диагностических методов
                          и анализа результатов исследования.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-8">

                <div className="rounded-[30px] border border-white/10 bg-black/30 p-8">

                  <p className="uppercase tracking-[0.2em] text-gray-500 mb-4 text-sm">
                    Practice Base
                  </p>

                  <h3 className="text-3xl font-bold leading-relaxed">
                    Средняя школа №153
                    <br />
                    имени А.К. Талая
                    <br />
                    г. Минска
                  </h3>

                </div>

                <div className="rounded-[30px] border border-white/10 bg-black/30 p-8">

                  <p className="uppercase tracking-[0.2em] text-gray-500 mb-4 text-sm">
                    Practice Period
                  </p>

                  <h3 className="text-3xl font-bold leading-relaxed">
                    06.04.2026
                    <br />
                    —
                    <br />
                    02.05.2026
                  </h3>

                </div>

                <div className="overflow-hidden rounded-[35px] border border-white/10">

                  <img
                    src="/images/practice/practice1.jpg"
                    alt="Practice"
                    className="w-full h-[400px] object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
{/* TIMELINE */}
<div className="mb-24">

  <h2 className="text-4xl font-black mb-16">
    Этапы практики
  </h2>

  <div className="relative">

    {/* LINE */}
    <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/10" />

    <div className="space-y-16">

      {/* ITEM */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative pl-20"
      >

        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-indigo-500 shadow-2xl shadow-indigo-500/50" />

        <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-3">
          06.04.2026
        </p>

        <h3 className="text-3xl font-bold mb-4">
          Начало практики
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Ознакомление с учреждением образования,
          организацией учебного процесса,
          учебными программами
          и особенностями работы учителя.
        </p>

      </motion.div>

      {/* ITEM */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative pl-20"
      >

        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-purple-500 shadow-2xl shadow-purple-500/50" />

        <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-3">
          Практическая деятельность
        </p>

        <h3 className="text-3xl font-bold mb-4">
          Проведение уроков
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Подготовка и проведение уроков,
          применение современных образовательных технологий,
          работа с учащимися
          и анализ педагогической деятельности.
        </p>

      </motion.div>

      {/* ITEM */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative pl-20"
      >

        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-pink-500 shadow-2xl shadow-pink-500/50" />

        <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-3">
          Методическая работа
        </p>

        <h3 className="text-3xl font-bold mb-4">
          Разработка материалов
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Создание конспектов уроков,
          методических разработок,
          дидактических материалов
          и образовательных заданий.
        </p>

      </motion.div>

      {/* ITEM */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative pl-20"
      >

        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-green-500 shadow-2xl shadow-green-500/50" />

        <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-3">
          02.05.2026
        </p>

        <h3 className="text-3xl font-bold mb-4">
          Завершение практики
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Подведение итогов педагогической практики,
          оформление отчётной документации,
          анализ профессионального опыта
          и результатов деятельности.
        </p>

      </motion.div>

    </div>

  </div>

</div>
        {/* DOCUMENTS */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Документы и материалы
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {documents.map((doc, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
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
                    PDF File
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

  

      </div>

    </section>
  )
}
