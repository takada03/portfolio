export default function ContactsPage() {
  return (
    <section className="min-h-screen px-6 pt-40 pb-20">
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
          <div className="px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            example@gmail.com
          </div>

          <div className="px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            Instagram
          </div>

          <div className="px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            Telegram
          </div>
        </div>
      </div>
    </section>
  )
}