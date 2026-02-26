import { motion } from 'framer-motion'

const galleryItems = [
  '/images/cover-moms-magic-pot.jpeg',
  '/images/menu/sandwiches-cheese-burst-grilled-sandwich.png',
  '/images/menu/frankies-cheese-veg-frankie.png',
  '/images/menu/fries-cheese-french-fries.png',
  '/images/menu/snacks-dahi-kachori-chaat.png',
  '/images/menu/moms-magic-specials-cheesy-baked-veg-macaroni.png',
]

export default function Gallery() {
  return (
    <section id="gallery" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Visual Diary</p>
          <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">Captured Moments</h2>
        </motion.div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-4 md:auto-rows-[190px] md:grid-cols-4">
          {galleryItems.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] shadow-glass ${index === 0 ? 'col-span-2 row-span-2' : index === 3 ? 'row-span-2' : ''
                }`}
            >
              <img
                src={image}
                alt="Mom's Magic Pot food item"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
