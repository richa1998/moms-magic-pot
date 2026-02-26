import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import { fetchDynamicMenu } from '../services/menuService'

export default function Offers() {
  const [picks, setPicks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPicks = async () => {
      const data = await fetchDynamicMenu()
      const filtered = [
        data.find((item) => item.name.includes('Cheese Burst')),
        data.find((item) => item.name.includes('Cheese Veg Frankie')),
        data.find((item) => item.name.includes('Masala French Fries')),
      ].filter(Boolean)
      setPicks(filtered)
      setLoading(false)
    }
    loadPicks()
  }, [])

  if (loading) return null

  return (
    <section id="offers" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Crowd Favorites</p>
            <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">The Magic Selection</h2>
          </motion.div>
          <div className="hidden gap-4 md:flex">
            <button type="button" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white transition-all hover:bg-white/5 hover:border-white/20"><FaArrowLeft size={14} /></button>
            <button type="button" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white transition-all hover:bg-white/5 hover:border-white/20"><FaArrowRight size={14} /></button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {picks.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group relative flex flex-col items-center rounded-[3rem] bg-white/[0.03] p-8 text-center ring-1 ring-white/10 transition-all hover:bg-white/[0.07] hover:shadow-glow"
            >
              <div className="absolute top-0 right-0 -m-2 h-24 w-24 bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-48 w-48 shrink-0 pb-6">
                <img
                  src={item.image && !item.image.includes('restaurant-cover.jpg') ? item.image : '/images/cover-moms-magic-pot.jpeg'}
                  alt={item.name}
                  className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] ${(!item.image || item.image.includes('restaurant-cover.jpg') || item.image.includes('trending-banner.jpg')) ? 'grayscale contrast-125 opacity-50' : ''}`}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-heading text-4xl font-bold leading-[1.1] text-white tracking-tight">{item.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-subtext">{item.description}</p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Best Deal</p>
                    <p className="text-3xl font-black tracking-tight text-white">{item.priceLabel}</p>
                    {item.discountPercent > 0 && (
                      <span className="mt-1 inline-block rounded-lg bg-primary/10 px-2 py-0.5 text-[10px] font-black text-primary uppercase tracking-wider">50% OFF</span>
                    )}
                  </div>
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={10} />)}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
