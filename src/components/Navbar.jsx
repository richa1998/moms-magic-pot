import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import Logo from './Logo'
import { zomatoOrderUrl } from '../data/menu'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#categories', label: 'Our Menu' },
  { href: '#full-menu', label: 'All Items' },
  { href: '#offers', label: 'Best Picks' },
  { href: '#menu', label: 'Specialities' },
  { href: '#process', label: 'Trending' },
  { href: '#testimonials', label: 'Reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-6 md:px-8">
      <nav className="mx-auto max-w-7xl">
        <div className="glass-dark flex items-center justify-between rounded-full border border-white/10 px-6 py-3 shadow-glass">
          <div className="flex items-center gap-12">
            <Logo />
            <ul className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+918849715081" className="hidden items-center gap-2 text-sm font-bold text-white/90 sm:flex lg:text-base">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
                <FaPhoneAlt size={12} />
              </div>
              +91 88497 15081
            </a>
            <a
              href={zomatoOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="relative hidden items-center rounded-full bg-primary px-7 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 sm:flex"
            >
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Order Online
              </span>
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="glass-dark mx-auto mt-4 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 p-4 lg:hidden"
          >
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-white/5 pt-4">
              <a
                href={zomatoOrderUrl}
                className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-sm font-black uppercase tracking-wider text-white"
              >
                <span className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Order Online
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
