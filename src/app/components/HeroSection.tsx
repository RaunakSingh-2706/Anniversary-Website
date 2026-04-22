import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-red-50 to-yellow-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-600 rounded-full" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-red-600 rounded-full" />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 border-4 border-amber-500 rounded-full" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600" />
            <Heart className="w-6 h-6 text-red-600 fill-red-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-600" />
          </div>

          <h1 className="text-6xl md:text-8xl mb-4 font-serif text-red-900 tracking-tight">
            Celebrating Years
          </h1>
          <h2 className="text-5xl md:text-7xl mb-8 font-serif text-amber-700 tracking-tight">
            of Togetherness
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src="/1.jpeg"
              alt="Anniversary Couple"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-3xl md:text-5xl font-serif text-red-800">Sinu Mausi</div>
            <Heart className="w-8 h-8 text-red-600 fill-red-600 animate-pulse" />
            <div className="text-3xl md:text-5xl font-serif text-red-800">Gaurav Mausaji</div>
          </div>
          <p className="text-xl md:text-2xl text-amber-800 font-light">
            22nd April, 2026
          </p>
          <p className="text-lg md:text-xl text-red-700 italic max-w-2xl mx-auto">
            "From the sacred vows under the mandap to this beautiful journey together"
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-100 to-transparent" />
    </section>
  );
}
