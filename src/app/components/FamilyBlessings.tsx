import { motion } from "motion/react";
import { Quote } from "lucide-react";

const blessings = [
  {
    text: "तुम दोनों की जोड़ी हमेशा सलामत रहे और तुम एक-दूसरे का हाथ थामे मीलों का सफर तय करो। हैप्पी एनिवर्सरी!",
    author: "Annu di",
    relation: "Sister"
  },
  {
    text: "May your hearts always beat in perfect harmony. Happy anniversary to my absolute favourites!.",
    author: "Raunak",
    relation: "Bhanja"
  },
  {
    text: "May your love be even stronger than your wifi signal. Happy anniversary to the masters of playful banter!.",
    author: "Shanshank",
    relation: "Bhanja"
  },
  {
    text: "May your love grow stronger with each passing year. Wishing you endless happiness ❤️ Happy wedding anniversary ❤️",
    author: "Megha",
    relation: "Sister"
  },
  {
    text: "Wishing you both a lifetime of love and happiness on your special day. Happy Anniversary!",
    author: "Pawan",
    relation: "Jijaji"
  },
  {
    text: "Since you were tiny, I've prayed you would find someone who treasures you as much as I do. Gaurav's devotion to you is the answer to that lifelong prayer. Happy anniversary!",
    author: "Binu",
    relation: "Sister"
  },
];

export function FamilyBlessings() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-amber-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-red-900 mb-4">Family Blessings</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mb-4" />
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Wrapped in the warmth of love and blessings from our loved ones
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row overflow-x-auto w-auto gap-8 ">
          {blessings.map((blessing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative min-w-[300px] max-w-sm mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <Quote className="w-12 h-12 text-yellow-500 mb-6" />
                <p className="text-lg text-amber-900 leading-relaxed mb-6 italic">
                  "{blessing.text}"
                </p>
                <div className="border-t-2 border-yellow-200 pt-4">
                  <p className="font-serif text-red-900 text-xl">{blessing.author}</p>
                  <p className="text-amber-700 text-sm">{blessing.relation}</p>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl blur-xl opacity-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-100 via-red-100 to-amber-100 rounded-3xl p-12 shadow-lg border-2 border-yellow-300">
            <p className="text-2xl md:text-3xl font-serif text-red-900 leading-relaxed max-w-3xl">
              "In the presence of our families, under the blessings of our elders, we found not just love,
              but a home in each other's hearts"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
