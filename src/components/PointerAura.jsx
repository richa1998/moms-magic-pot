import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function PointerAura() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer:fine)').matches
    if (!isFinePointer) return undefined

    const move = (event) => {
      x.set(event.clientX - 120)
      y.set(event.clientY - 120)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-60 w-60 rounded-full bg-secondary/15 blur-3xl md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  )
}
