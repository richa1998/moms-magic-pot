import { motion } from 'framer-motion'

const shapeTypes = ['circle', 'square', 'diamond', 'triangle', 'ring', 'line']

const particles = Array.from({ length: 170 }, (_, index) => {
  const shape = shapeTypes[index % shapeTypes.length]
  const isLine = shape === 'line'
  return {
    left: `${1 + (index * 9) % 98}%`,
    top: `${2 + (index * 11) % 96}%`,
    width: isLine ? 10 + (index % 8) : 3 + (index % 6),
    height: isLine ? 2 + (index % 2) : 3 + (index % 6),
    duration: 9 + (index % 11),
    delay: (index % 20) * 0.14,
    shape,
    rotate: (index * 17) % 360,
    drift: 5 + (index % 10),
    opacityPeak: 0.12 + (index % 4) * 0.04,
  }
})

export default function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}-${index}`}
          className={`particle particle-${particle.shape}`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.width,
            height: particle.height,
            rotate: particle.rotate,
          }}
          animate={{
            opacity: [0.05, particle.opacityPeak, 0.08],
            y: [0, -particle.drift, 0],
            x: [0, particle.drift * 0.45, 0],
            rotate: [particle.rotate, particle.rotate + 14, particle.rotate],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
