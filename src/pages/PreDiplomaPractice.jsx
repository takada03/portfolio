import { motion } from 'framer-motion'

import {
  FileText,
  Download,
  GraduationCap,
  Play,
  Pause,
  Volume2,
  Maximize,
} from 'lucide-react'

import { useRef, useState } from 'react'

const documents = [
  {
    title: 'Индивидуальный план',
    file: '/docs/pre-diploma/pre-diploma-plan.pdf',
  },

  {
    title: 'Конспект урока №1',
    file: '/docs/pre-diploma/lesson-1.pdf',
  },

  {
    title: 'Конспект урока №2',
    file: '/docs/pre-diploma/lesson-2.pdf',
  },

  {
    title: 'Конспект урока №3',
    file: '/docs/pre-diploma/lesson-3.pdf',
  },

  {
    title: 'Отчёт по практике',
    file: '/docs/pre-diploma/pre-diploma-report.pdf',
  },
]

const gallery = [
  '/images/pre-diploma/practice1.jpg',
  '/images/pre-diploma/practice2.jpg',
  '/images/pre-diploma/practice3.jpg',
  '/images/pre-diploma/practice4.jpg',
]

export default function PreDiplomaPractice() {

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
            Преддипломная
            <br />
            практика
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-4xl">
            Заключительный этап профессиональной подготовки,
            направленный на совершенствование педагогических навыков
            и приобретение практического опыта.
          </p>

        </motion.div>

       {/* PRACTICE INFO */}
<div className="mb-24">

  <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">

    <div className="grid xl:grid-cols-2 gap-16">

      {/* LEFT */}
      <div>

        <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
          Pre Diploma Practice
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
          Цель и задачи
          <br />
          преддипломной практики
        </h2>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">

          <p>
            <span className="font-bold text-white">
              Цель преддипломной практики:
            </span>{' '}
            совершенствование уровня профессиональной подготовки
            будущего учителя начальных классов
            на основе развития самостоятельности,
            ответственности, активности и креативности
            в организации учебно-воспитательной работы
            с младшими школьниками.
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
                  Формирование умений планировать
                  и осуществлять образовательный процесс,
                  овладение навыками организации
                  педагогической деятельности.
                </p>

              </div>

              <div className="flex gap-5">

                <div className="min-w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                  2
                </div>

                <p>
                  Совершенствование методической подготовки,
                  развитие творческих способностей студентов.
                </p>

              </div>

              <div className="flex gap-5">

                <div className="min-w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                  3
                </div>

                <p>
                  Формирование исследовательских умений
                  и навыков, профессиональных качеств личности.
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

          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">

            <p>
              <span className="font-bold text-white">
                Школа:
              </span>{' '}
              ГУО «Средняя школа №153
              А.К. Талая г. Минска»
            </p>

            <p>
              <span className="font-bold text-white">
                Адрес:
              </span>{' '}
              г. Минск, ул. Якубова, 62
            </p>

            <p>
              <span className="font-bold text-white">
                Класс:
              </span>{' '}
              3 «В» класс, кабинет 4
            </p>

            <p>
              <span className="font-bold text-white">
                Учитель:
              </span>{' '}
              Романовская Ольга Викторовна
            </p>

            <p>
              <span className="font-bold text-white">
                Зам. директора:
              </span>{' '}
              Ивакина Оксана Николаевна
            </p>

            <p>
              <span className="font-bold text-white">
                Директор:
              </span>{' '}
              Полещук Марина Ивановна
            </p>

            <p>
              <span className="font-bold text-white">
                Руководитель практики:
              </span>{' '}
              Павлов Алексей Сергеевич
            </p>

          </div>

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
            src="/images/pre-diploma/practice1.jpg"
            alt="Practice"
            className="w-full h-[420px] object-cover"
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

            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/10" />

            <div className="space-y-16">

              {[
                'Подготовительный этап',
                'Проведение уроков',
                'Методическая деятельность',
                'Анализ результатов',
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >

                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-indigo-500 shadow-2xl shadow-indigo-500/50" />

                  <h3 className="text-3xl font-bold mb-4">
                    {item}
                  </h3>

                  <p className="text-gray-400 text-lg max-w-3xl">
                    Практическая педагогическая деятельность
                    и совершенствование профессиональных навыков.
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* DOCUMENTS */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Документы
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

        {/* VIDEO */}
        <div className="mb-24">

          <h2 className="text-4xl font-black mb-12">
            Видео урока
          </h2>

          <CustomVideoPlayer />

        </div>

        {/* GALLERY */}
        <div>

          <h2 className="text-4xl font-black mb-12">
            Фото отчёт
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {gallery.map((photo, index) => (

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

function CustomVideoPlayer() {

  const videoRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const [progress, setProgress] = useState(0)

  const [currentTime, setCurrentTime] = useState('0:00')

  const [duration, setDuration] = useState('0:00')

  const toggleVideo = () => {

    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const formatTime = (time) => {

    const minutes = Math.floor(time / 60)

    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleTimeUpdate = () => {

    if (!videoRef.current) return

    const current = videoRef.current.currentTime

    const total = videoRef.current.duration

    setProgress((current / total) * 100)

    setCurrentTime(formatTime(current))
  }

  const handleLoadedMetadata = () => {

    if (!videoRef.current) return

    setDuration(formatTime(videoRef.current.duration))
  }

  const handleSeek = (e) => {

    if (!videoRef.current) return

    const rect = e.target.getBoundingClientRect()

    const percent = (e.clientX - rect.left) / rect.width

    videoRef.current.currentTime =
      percent * videoRef.current.duration
  }

  const openFullscreen = () => {

    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }

  }

  return (

    <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-black">

      <video
        ref={videoRef}
        className="w-full"
        src="/videos/pre-diploma/lesson-video.mp4"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-6">

        <div
          onClick={handleSeek}
          className="w-full h-2 rounded-full bg-white/10 mb-6 cursor-pointer overflow-hidden"
        >

          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              onClick={toggleVideo}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
            >

              {isPlaying ? (
                <Pause size={28} />
              ) : (
                <Play size={28} />
              )}

            </button>

            <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-3">

              <Volume2 size={18} />

              <span className="text-sm text-gray-200">
                {currentTime} / {duration}
              </span>

            </div>

          </div>

          <button
            onClick={openFullscreen}
            className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
          >

            <Maximize size={22} />

          </button>

        </div>

      </div>

    </div>

  )
}