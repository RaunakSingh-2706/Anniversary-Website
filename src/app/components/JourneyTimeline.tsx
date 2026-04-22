import { motion } from "motion/react";
import { Heart, Sparkles, Home, Calendar } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "First Meeting",
    description: "Two souls crossed paths at a family gathering in Patna, and destiny began to weave its magic",
    icon: Sparkles,
    color: "bg-yellow-500"
  },
  {
    year: "2021",
    title: "The Proposal",
    description: "Under the golden sunset by the Ganges, a promise was made that would last forever",
    icon: Heart,
    color: "bg-red-500"
  },
  {
    year: "2023",
    title: "Sacred Union",
    description: "Surrounded by loved ones, with haldi on our skin and marigolds in our hearts, we became one",
    icon: Calendar,
    color: "bg-amber-600"
  },
  {
    year: "2026",
    title: "Growing Together",
    description: "Building our home, creating memories, and cherishing every moment of this beautiful journey",
    icon: Home,
    color: "bg-yellow-600"
  }
];

export function JourneyTimeline() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-cream-100 via-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-red-900 mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mb-4" />
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Every step together has been a blessing, every moment a treasure
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-red-500 to-amber-600 hidden md:block" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-serif text-red-800">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-red-900 mb-3">{milestone.title}</h3>
                    <p className="text-amber-800 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden md:block w-6 h-6 bg-white border-4 border-red-500 rounded-full z-10 flex-shrink-0" />

                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
