import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.a
      href="#home"
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-20 w-20 group-hover:drop-shadow-glow transition-all duration-300">
        <img
          src="/logo.png"
          alt="Mom's Magic Pot Logo"
          className="h-full w-full object-contain"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary blur-lg -z-10"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight text-white">MOM'S MAGIC</span>
        <span className="text-[10px] font-bold tracking-[0.3em] text-primary">POT</span>
      </div>
    </motion.a>
  )
}
