import { motion } from 'framer-motion'

export default function MapSection() {
  return (
    <section id="location" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Our Base</p>
          <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">Locate The Magic</h2>
          <p className="mt-6 text-lg text-subtext md:max-w-2xl">Visit our delivery hub at A-67, Rita Nagar Society, Vastral Road, Ahmedabad. We're ready to serve you the freshest magic pots in town.</p>
        </motion.div>

        <div className="glass-dark overflow-hidden rounded-[3rem] border border-white/10 p-2 shadow-2xl">
          <iframe
            title="Mom's Magic Pot Location"
            src="https://www.google.com/maps?q=23.0026855996,72.6422023773&z=16&output=embed"
            className="h-[320px] w-full rounded-2xl md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
