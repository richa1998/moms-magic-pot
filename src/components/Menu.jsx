import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaGoogle, FaStar } from 'react-icons/fa'
import { zomatoOrderUrl } from '../data/menu'
import { fetchGoogleReviews } from '../services/googleReviews'

const points = [
  {
    title: 'Fresh Ingredients',
    text: 'We prepare every dish using daily fresh, quality ingredients for unbeatable taste.',
  },
  {
    title: 'Super-Fast Service',
    text: 'Perfect for busy days and quick meal breaks. Your food arrives fast and hot.',
  },
  {
    title: 'Something For Everyone',
    text: 'From spicy frankies to sandwiches and loaded fries, we have options for every mood.',
  },
]

export default function Menu() {
  const [rating, setRating] = useState(4.9)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRating = async () => {
      const reviews = await fetchGoogleReviews()
      if (reviews.length > 0) {
        const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        setRating(avgRating)
      }
      setLoading(false)
    }
    loadRating()
  }, [])

  if (loading) return null

  return (
    <section id="menu" className="px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3.5rem] bg-card p-10 ring-1 ring-white/10 shadow-2xl md:p-16">
        {/* Background decorative elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

        <div className="relative grid gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">The Secret Sauce</p>
            <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">Why Every Bite is Pure Magic</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-subtext">
              We've spent years perfecting the balance of spices and fresh ingredients to bring you a menu that's not just food, but an experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/5 pt-10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#4285F4]/10 text-[#4285F4]">
                  <FaGoogle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white">{rating.toFixed(1)}/5.0</span>
                  <span className="text-[10px] uppercase tracking-widest text-subtext">Google Rank</span>
                </div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#E23744] text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white">4.0/5.0</span>
                  <span className="text-[10px] uppercase tracking-widest text-subtext">Zomato Rank</span>
                </div>
              </div>
            </div>

            <a
              href={zomatoOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              Start Order on Zomato
            </a>
          </motion.div>

          <div className="flex flex-col gap-10">
            {points.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative flex items-start gap-6 border-b border-white/5 pb-10 last:border-0 last:pb-0"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <FaCheck size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-bold text-white tracking-tight">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{point.text}</p>
                  <div className="mt-4 flex gap-0.5 text-primary/40 group-hover:text-primary transition-colors">
                    {Array.from({ length: 5 }).map((_, i) => <FaStar key={`${point.title}-${i}`} size={10} />)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
