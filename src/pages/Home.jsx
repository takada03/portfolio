export default function Home(){
  return(
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

        <div>
          <p className="uppercase tracking-[0.4em] text-gray-500 mb-6 text-sm">
            Электронное портфолио
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            Скобкарёва
            <br />
            Анна
            <br />
            Павловна
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
            Студентка 4 курса факультета начального образования, 270322 группы.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="mailto:example@gmail.com" className="px-8 py-4 rounded-full bg-indigo-500">
              Связаться
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-30" />
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
            <img src="/images/profile.jpg" className="w-full h-full object-cover"/>
          </div>
        </div>

      </div>
    </section>
  )
}