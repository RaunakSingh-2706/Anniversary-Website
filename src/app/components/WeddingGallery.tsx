import { motion } from "motion/react";
import { useState } from "react";

const photos = [
  {
    url: "/2.jpeg",
  },
  {
    url: "/3.png",
  },
  {
    url: "/4.jpeg",
  },
  {
    url: "/5.jpeg",
  },
  {
    url: "/6.jpeg",
  },
  {
    url: "/7.jpeg",
  }
];

export function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 via-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-red-900 mb-4">Wedding Memories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mb-4" />
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Moments frozen in time, memories etched in our hearts forever
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.url}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0v0m0 0h6m-6 0H4" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={photos[selectedImage].url}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
