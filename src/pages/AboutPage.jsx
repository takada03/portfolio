export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
          About
        </p>

        <h1 className="text-6xl font-black mb-12">
          Педагог нового поколения
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-10 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6">
              Современный подход
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Использование интерактивных образовательных технологий,
              digital learning и современных методик преподавания.
            </p>
          </div>

          <div className="p-10 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6">
              Практика
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Развитие педагогических компетенций и профессиональных навыков.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}