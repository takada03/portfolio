export default function Contacts() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-10">
          Контакты
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:example@gmail.com"
            className="px-6 py-4 rounded-full bg-white/5 border border-white/10"
          >
            example@gmail.com
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="px-6 py-4 rounded-full bg-white/5 border border-white/10"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}