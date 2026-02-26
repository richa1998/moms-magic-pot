import { motion } from 'framer-motion'
import { zomatoOrderUrl } from '../data/menu'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-full">
        <div className="relative flex min-h-[600px] w-full flex-col overflow-hidden rounded-[3.5rem] bg-card ring-1 ring-white/10 shadow-2xl lg:flex-row">

          <div className="relative flex flex-1 flex-col justify-center p-8 md:p-16 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Ordering Enabled</p>
              </div>

              <h1 className="font-heading text-6xl font-bold leading-[1.05] tracking-tight text-white lg:text-8xl">
                Taste The <br />
                <span className="text-primary italic">Magic</span> In Every <br />
                Single Pot.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-subtext md:text-xl">
                Join the revolution of premium comfort street food. Fresh ingredients, secret spices, and zero compromises on taste.
              </p>

              <div className="mt-12 flex flex-wrap gap-6">
                <a
                  href={zomatoOrderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-12 py-5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    Order Online
                  </span>
                </a>
                <a
                  href="#categories"
                  className="rounded-full bg-white/5 border border-white/10 px-12 py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
                >
                  Explore Menu
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative flex-1 h-[400px] lg:h-auto overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="h-full w-full"
            >
              <img src="/images/cover-moms-magic-pot.jpeg" alt="Signature Dishes" className="h-full w-full object-cover lg:object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/20 to-transparent lg:from-bg lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent lg:hidden" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

