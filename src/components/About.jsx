import { motion } from 'framer-motion'

const aboutLines = [
  'Home Style Flavor, Premium Kitchen Quality',
  'Mom\'s Magic Pot is a delivery-first kitchen in Amraiwadi, Ahmedabad.',
  'Sandwiches, frankies, fries, beverages and comfort-style specials crafted daily.',
]

export default function About() {
  return (
    <section id="about" className="px-4 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-dark mx-auto grid max-w-7xl gap-16 rounded-[3.5rem] border border-white/10 p-10 md:grid-cols-2 md:p-20 shadow-2xl"
      >
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-primary">About Us</p>
          <div className="mt-3 space-y-2">
            {aboutLines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={index === 0 ? 'font-heading text-4xl font-bold tracking-tight text-white md:text-5xl' : 'text-lg leading-relaxed text-subtext'}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="space-y-3 text-subtext"
        >
          <p>Address: A-67, New Rita Nagar Society, Vastral Road, Amraiwadi, Ahmedabad 380026.</p>
          <p>Phone: +91 88497 15081</p>
          <p>Cuisine: Fast Food, Rolls, Sandwich, Street Food, Wraps</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
