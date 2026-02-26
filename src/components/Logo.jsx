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
      <div className="relative h-10 w-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="20" cy="20" r="20" fill="url(#logo-grad)" />
          <path d="M12 18C12 14.6863 14.6863 12 18 12H22C25.3137 12 28 14.6863 28 18V24C28 27.3137 25.3137 30 22 30H18C14.6863 30 12 27.3137 12 24V18Z" fill="white" fillOpacity="0.2" />
          <path d="M15 15C15 13.3431 16.3431 12 18 12H22C23.6569 12 25 13.3431 25 15V17H15V15Z" fill="#FF5C00" />
          <circle cx="20" cy="21" r="5" stroke="white" strokeWidth="2" />
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5C00" />
              <stop offset="1" stopColor="#FF1B1C" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary blur-md -z-10"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight text-white">MOM'S MAGIC</span>
        <span className="text-[10px] font-bold tracking-[0.3em] text-primary">POT</span>
      </div>
    </motion.a>
  )
}
