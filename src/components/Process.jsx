import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { fetchDynamicMenu } from '../services/menuService'
import { zomatoOrderUrl } from '../data/menu'

export default function Process() {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTrending = async () => {
      const data = await fetchDynamicMenu()
      const filtered = [
        data.find((item) => item.name.includes('Pizza Sandwich')),
        data.find((item) => item.name.includes('Cheese Veg Frankie')),
      ].filter(Boolean)
      setTrending(filtered)
      setLoading(false)
    }
    loadTrending()
  }, [])

  if (loading) return null
  return (
    <section id="process" className="bg-[#0A0A0C] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[400px_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] overflow-hidden rounded-[3rem] shadow-2xl"
          >
            <img src="/images/trending-banner.jpg" alt="Trending dishes" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">Signature Vibes</p>
              <h3 className="mt-2 font-heading text-4xl font-bold text-white">Experience the Magic</h3>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Real-Time Trending</p>
              <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">Most Ordered Right Now</h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {trending.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] p-8 ring-1 ring-white/10 transition-all hover:bg-white/[0.07]"
                >
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-subtext">Chef's Choice Selection</p>
                      </div>
                      <div className="flex h-6 items-center gap-0.5 text-primary">
                        {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={8} />)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black tracking-tighter text-white">{item.priceLabel}</span>
                        {item.discountPercent > 0 && (
                          <span className="text-sm font-bold text-primary">50% OFF</span>
                        )}
                      </div>
                      <div className="h-20 w-20">
                        <img
                          src={item.image && !item.image.includes('restaurant-cover.jpg') ? item.image : '/images/cover-moms-magic-pot.jpeg'}
                          alt={item.name}
                          className={`h-full w-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110 ${(!item.image || item.image.includes('restaurant-cover.jpg') || item.image.includes('trending-banner.jpg')) ? 'grayscale contrast-125 opacity-50' : ''}`}
                        />
                      </div>
                    </div>

                    <a
                      href={zomatoOrderUrl}
                      target="_blank"
                      className="mt-2 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-primary"
                    >
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-white group-hover:bg-[#E23744] group-hover:text-white transition-colors p-1.5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>
                      Quick Add
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
