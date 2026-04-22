import { motion } from "motion/react";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 via-cream-100 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-red-900 mb-4">Our Wedding Film</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mb-4" />
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Relive the magic of our special day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <video
              src="/v1.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-serif mb-2">The Sacred Union</h3>
              <p className="text-sm opacity-90">A cinematic journey of love, tradition, and celebration</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 text-amber-700 italic"
        >
          "A day filled with blessings, laughter, and the warmth of family love"
        </motion.p>
      </div>
    </section>
  );
}
