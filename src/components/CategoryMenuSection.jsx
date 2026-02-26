import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { zomatoOrderUrl } from '../data/menu'
import { fetchDynamicMenu } from '../services/menuService'

export default function CategoryMenuSection() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const loadMenu = async () => {
      const data = await fetchDynamicMenu()
      setItems(data)
      const uniqueCategories = Array.from(new Set(data.map((item) => item.category)))
      if (uniqueCategories.length > 0) {
        setSelectedCategory(uniqueCategories[0])
      }
      setLoading(false)
    }
    loadMenu()

    const onCategorySelect = (event) => {
      const category = event?.detail?.category
      if (category) {
        setSelectedCategory(category)
      }
    }

    window.addEventListener('menu-category-select', onCategorySelect)
    return () => window.removeEventListener('menu-category-select', onCategorySelect)
  }, [])

  const categories = useMemo(() => Array.from(new Set(items.map((item) => item.category))), [items])

  const filteredItems = useMemo(
    () => items.filter((item) => item.category === selectedCategory),
    [items, selectedCategory],
  )

  if (loading) {
    return (
      <section id="full-menu" className="grid min-h-[400px] place-items-center px-4 py-16">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </section>
    )
  }

  return (
    <section id="full-menu" className="bg-[#0D0D0F] px-4 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Live Zomato Database</p>
          <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">Explore Our Magic Menu</h2>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = category === selectedCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full border px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${isActive
                  ? 'border-primary bg-primary text-white shadow-lg shadow-primary/25'
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
                  }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-6 transition-all hover:bg-white/[0.06] hover:shadow-2xl"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white/5 p-4">
                  <img
                    src={item.image && !item.image.includes('restaurant-cover.jpg') ? item.image : '/images/cover-moms-magic-pot.jpeg'}
                    alt={item.name}
                    loading="lazy"
                    className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] ${(!item.image || item.image.includes('restaurant-cover.jpg') || item.image.includes('trending-banner.jpg')) ? 'grayscale contrast-125 opacity-60' : ''}`}
                  />
                  <div className="absolute top-4 right-4 rounded-xl bg-primary px-3 py-1 text-[10px] font-black text-white shadow-lg uppercase tracking-wider">
                    50% OFF
                  </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-heading text-3xl font-bold text-white transition-colors group-hover:text-primary">{item.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-subtext">{item.description}</p>

                  <div className="mt-auto pt-6">
                    <div className="flex items-end justify-between border-t border-white/5 pt-5">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-subtext">Original</p>
                        <p className="text-sm font-medium text-subtext line-through opacity-50">{item.originalPriceLabel}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Final Offer</p>
                        <p className="text-4xl font-black tracking-tight text-white">{item.priceLabel}</p>
                      </div>
                    </div>

                    <a
                      href={zomatoOrderUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-primary hover:text-white"
                    >
                      <span className="flex items-center gap-3">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0 text-[#E23744]">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        Order on Zomato
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
