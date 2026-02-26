import { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Home = lazy(() => import('./pages/Home'))

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0C]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="absolute h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
        <div className="h-16 w-16 animate-spin-slow rounded-full border border-primary/30 border-t-primary" />
        <p className="font-heading text-sm uppercase tracking-[0.2em] text-primary">Preparing The Table</p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}
