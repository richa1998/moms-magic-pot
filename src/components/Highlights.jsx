import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaStar } from 'react-icons/fa'
import { fetchDynamicMenu } from '../services/menuService'
import { fetchGoogleReviews } from '../services/googleReviews'

export default function Highlights() {
  const [categories, setCategories] = useState([])
  const [rating, setRating] = useState(4.9)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const [menuData, reviewsData] = await Promise.all([
        fetchDynamicMenu(),
        fetchGoogleReviews(),
      ])

      const cats = ['Sandwiches', 'Frankies', 'Snacks', 'Fries'].map((name) => {
        const items = menuData.filter((item) => item.category === name)
        const maxDiscount = items.length > 0 ? Math.max(...items.map(i => i.discountPercent || 0)) : 0
        return {
          name,
          count: items.length,
          image: items[0]?.image,
          discount: maxDiscount > 0 ? maxDiscount : null,
        }
      })
      setCategories(cats)

      if (reviewsData.length > 0) {
        const avgRating = reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length
        setRating(avgRating)
      }

      setLoading(false)
    }
    loadData()
  }, [])

  const handleCategoryClick = (category) => {
    window.dispatchEvent(new CustomEvent('menu-category-select', { detail: { category } }))
    const section = document.getElementById('full-menu')
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (loading) return null

  return (
    <section id="categories" className="relative overflow-hidden px-4 py-24 md:px-8">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark mb-16 flex flex-wrap items-center justify-center gap-10 rounded-[2.5rem] px-10 py-8 shadow-2xl"
        >
          <div className="flex items-center gap-5">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#4285F4]/10 text-[#4285F4]">
              <FaGoogle size={28} />
            </div>
            <div>
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={14} className={i < Math.floor(rating) ? 'text-primary' : 'text-primary/20'} />
                ))}
              </div>
              <p className="mt-1 font-heading text-2xl font-bold text-white uppercase italic tracking-tighter">Review {rating.toFixed(1)}/5.0</p>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-5">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E23744] text-white shadow-lg shadow-[#E23744]/20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={14} className={i < 4 ? 'text-primary' : 'text-primary/20'} />)}</div>
              <p className="mt-1 font-heading text-2xl font-bold text-white uppercase italic tracking-tighter">Review 4.0/5.0</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => (
            <motion.button
              key={item.name}
              type="button"
              onClick={() => handleCategoryClick(item.name)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-card p-6 shadow-glass ring-1 ring-white/10 transition-all hover:bg-white/5"
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-4xl font-bold text-white tracking-tight">{item.name}</h3>
                    {item.discount && (
                      <div className="absolute -top-2 -right-2 rounded-xl bg-primary px-3 py-1 text-[10px] font-black text-white shadow-lg shadow-primary/20 uppercase tracking-wider">
                        50% OFF
                      </div>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-primary">{item.count} PRODUCTS</p>
                </div>

                <div className="relative mt-2 flex justify-end">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {item.image ? (
                    <img
                      src={item.image && !item.image.includes('restaurant-cover.jpg') ? item.image : '/images/cover-moms-magic-pot.jpeg'}
                      alt={item.name}
                      className={`relative z-10 w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ${(!item.image || item.image.includes('restaurant-cover.jpg') || item.image.includes('trending-banner.jpg')) ? 'grayscale contrast-125 opacity-40' : ''}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-32 h-32" />
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
