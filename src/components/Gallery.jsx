import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">
          Gallery
        </p>

        <h2 className="text-6xl font-black mb-16">
          Галерея
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[35px] aspect-[4/5] border border-white/10 bg-white/5 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6"
              >
                <X size={40} />
              </button>

              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage}
                className="max-w-full max-h-full rounded-[30px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}