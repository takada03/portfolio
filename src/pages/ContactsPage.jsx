export default function ContactsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
          Contacts
        </p>

        <h1 className="text-6xl font-black mb-10">
          Свяжитесь со мной
        </h1>

        <p className="text-xl text-gray-400 mb-16">
          Открыта для сотрудничества и новых проектов.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:example@gmail.com"
            className="px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white transition"
          >
            anyaosk8592163@gmail.com
          </a>

        

          <a
            href="https://t.me/anita_revva"
            target="_blank"
            className="px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white transition"
          >
            Telegram
          </a>

        </div>
      </div>
    </section>
  )
}