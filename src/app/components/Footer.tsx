import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-amber-50 to-red-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400" />
            <Heart className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400" />
          </div>

          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Celebrating Love, Family & Togetherness
          </h3>

          <p className="text-xl text-yellow-100 max-w-2xl mx-auto leading-relaxed">
            Thank you for being part of our journey. Your love and blessings mean the world to us.
          </p>

          <div className="py-8">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-yellow-400/30">
              <span className="text-2xl">🪔</span>
              <p className="text-lg text-yellow-200 font-serif">
                From Bihar with Love
              </p>
              <span className="text-2xl">🌸</span>
            </div>
          </div>

          <div className="border-t border-yellow-400/30 pt-8 mt-8">
            <p className="text-yellow-200 text-lg font-serif italic mb-2">
              Made with Love for Forever
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-300 text-sm">
              <Heart className="w-4 h-4 fill-current" />
              <span>Sinu Mausi & Gaurav Mausaji</span>
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <p className="text-yellow-400/70 text-sm mt-4">
              22nd April, 2026
            </p>
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="pt-8"
          >
            <div className="text-5xl">✨</div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
