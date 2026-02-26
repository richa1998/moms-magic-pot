import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaGoogle, FaQuoteRight, FaStar } from 'react-icons/fa'
import { fetchGoogleReviews } from '../services/googleReviews'

export default function Testimonials() {
  const [reviews, setReviews] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadReviews = async () => {
      const data = await fetchGoogleReviews()
      setReviews(data)
      setLoading(false)
    }
    loadReviews()
  }, [])

  const activeReview = reviews[activeIndex]

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  const goNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length)

  useEffect(() => {
    if (reviews.length === 0) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [reviews])

  if (loading) {
    return (
      <section id="testimonials" className="grid min-h-[400px] place-items-center px-4 py-16">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </section>
    )
  }

  return (
    <section id="testimonials" className="relative overflow-hidden px-4 py-32 md:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Hall of Fame</p>
          <h2 className="mt-4 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">Magic Moments on Google</h2>

          <div className="mt-8 inline-flex items-center gap-5 rounded-3xl bg-white/[0.03] border border-white/5 px-6 py-3 shadow-glass">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#4285F4]/10 text-[#4285F4]">
              <FaGoogle size={20} />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={12} className={i < Math.floor(activeReview?.rating || 5) ? 'text-primary' : 'text-primary/20'} />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold text-white/50">{reviews.length} Verified Google reviews</p>
            </div>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-white/[0.03] p-10 ring-1 ring-white/10 shadow-2xl backdrop-blur-3xl md:p-16"
        >
          <FaQuoteRight className="absolute right-12 top-12 text-6xl text-primary/10" />

          <div className="relative z-10">
            <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary">
              {activeReview.tag}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-10 font-heading text-3xl font-medium leading-[1.3] text-white md:text-4xl">
                  "{activeReview.text}"
                </p>

                <div className="mt-12 flex items-center gap-6">
                  {activeReview.profilePhoto ? (
                    <img src={activeReview.profilePhoto} alt={activeReview.name} className="h-16 w-16 rounded-2xl border-2 border-primary/20 object-cover shadow-xl" />
                  ) : (
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white">
                      {activeReview.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-heading text-2xl font-bold text-white tracking-tight">{activeReview.name}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Google Local Guide</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-10">
              <div className="flex gap-4">
                <button type="button" onClick={goPrev} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white transition-all hover:bg-white/5 hover:border-white/20">
                  <FaArrowLeft size={14} />
                </button>
                <button type="button" onClick={goNext} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white transition-all hover:bg-white/5 hover:border-white/20">
                  <FaArrowRight size={14} />
                </button>
              </div>

              <a
                href="https://www.google.com/maps/place/Mom's+Magic+Pot/@23.0026906,72.6396274,17z/data=!4m8!3m7!1s0x395e8600108666e1:0x96048b63851b4728!8m2!3d23.0026906!4d72.6396274!9m1!1b1!16s%2Fg%2F11w5_10565"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black uppercase tracking-widest text-primary decoration-primary/30 underline-offset-8 hover:underline"
              >
                View Live Reviews
              </a>
            </div>
          </div>
        </motion.article>

        <div className="mt-10 flex justify-center gap-3">
          {reviews.map((review, index) => (
            <button
              key={review.name + index}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? 'w-10 bg-primary' : 'w-1.5 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
