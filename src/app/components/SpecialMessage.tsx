import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

export function SpecialMessage() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-red-50 via-yellow-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <h2 className="text-5xl md:text-6xl font-serif text-red-900">A Message of Love</h2>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border-4 border-yellow-200 relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
            </div>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xl md:text-2xl text-amber-900 leading-relaxed font-light">
              From the moment our hands were joined under the sacred mandap, colored with the warmth of haldi
              and blessed with the fragrance of marigolds, we knew our journey would be extraordinary.
            </p>

            <p className="text-xl md:text-2xl text-amber-900 leading-relaxed font-light">
              Each day with you feels like a celebration. Every smile we share, every dream we build together,
              and every challenge we overcome hand-in-hand makes our bond stronger.
            </p>

            <div className="py-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto" />
            </div>

            <p className="text-2xl md:text-3xl font-serif text-red-900 leading-relaxed italic">
              "You are my home, my happiness, and my forever. Here's to the countless beautiful years ahead,
              growing old together, hand in hand, heart to heart."
            </p>

            <div className="pt-8 flex items-center justify-center gap-4">
              <Heart className="w-6 h-6 text-red-600 fill-red-600" />
              <p className="text-lg text-amber-800">Forever Yours</p>
              <Heart className="w-6 h-6 text-red-600 fill-red-600" />
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-30 blur-2xl" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-300 rounded-full opacity-30 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <img
            src="/2.jpeg"
            alt="Happy Couple"
            className="w-64 h-64 md:w-80 md:h-80 object-top rounded-full mx-auto border-8 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
