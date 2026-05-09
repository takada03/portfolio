export default function Gallery() {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg'
  ]

  return (
    <section className="min-h-screen px-6 pt-40 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black mb-16">
          Галерея
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[35px] border border-white/10"
            >
              <img
                src={img}
                className="w-full aspect-[4/5] object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}