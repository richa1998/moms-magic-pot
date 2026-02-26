import { motion } from 'framer-motion'

const ambientOrbs = [
  { top: '9%', left: '-4%', size: 440, color: 'rgba(255, 92, 0, 0.05)', delay: 0, driftX: 36, driftY: 14 },
  { top: '24%', right: '-6%', size: 420, color: 'rgba(255, 27, 28, 0.04)', delay: 1.4, driftX: -34, driftY: 24 },
  { top: '48%', left: '-5%', size: 410, color: 'rgba(255, 92, 0, 0.03)', delay: 2.2, driftX: 30, driftY: -16 },
  { top: '66%', right: '-5%', size: 450, color: 'rgba(255, 27, 28, 0.05)', delay: 0.8, driftX: -24, driftY: 18 },
  { top: '84%', left: '22%', size: 440, color: 'rgba(255, 92, 0, 0.04)', delay: 1.8, driftX: 20, driftY: -22 },
]

const sideParticles = Array.from({ length: 36 }, (_, index) => ({
  top: `${4 + (index * 7) % 92}%`,
  side: index % 2 === 0 ? 'left' : 'right',
  offset: `${3 + (index % 6) * 1.2}%`,
  size: 5 + (index % 5),
  duration: 8 + (index % 7),
  delay: index * 0.23,
}))

export default function SectionParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ambientOrbs.map((orb, index) => (
        <motion.span
          key={`orb-${index}`}
          className="ambient-orb"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            x: [0, orb.driftX, 0],
            y: [0, orb.driftY, 0],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{
            duration: 10 + index * 1.3,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {sideParticles.map((particle, index) => (
        <motion.span
          key={`side-${index}`}
          className="particle particle-circle"
          style={{
            top: particle.top,
            width: particle.size,
            height: particle.size,
            [particle.side]: particle.offset,
          }}
          animate={{
            y: [0, -14, 0],
            x: [0, particle.side === 'left' ? 10 : -10, 0],
            opacity: [0.14, 0.45, 0.16],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
