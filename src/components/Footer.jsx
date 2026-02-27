import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { zomatoOrderUrl } from '../data/menu'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black/40 px-4 pb-16 pt-24 md:px-8">
      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 mb-8">
              <div className="relative h-20 w-20 group">
                <img src="/logo.png" alt="Mom's Magic Pot" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="font-heading text-3xl font-bold tracking-tight text-white">MOM'S MAGIC</p>
                <p className="text-sm font-bold tracking-[0.5em] text-primary">POT</p>
              </div>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-subtext/80">
              Hand-crafted street food with a dash of magic. We bring premium flavors to your plate, fresh every single day.
            </p>
            <div className="mt-10 flex gap-5">
              {[
                { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/moms_magic_pott/' },
                { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61587792202825' },
                { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/918849715081' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-subtext transition-all hover:bg-primary hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-primary">Magic Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Our Menu', href: '#categories' },
                { label: 'Featured Picks', href: '#offers' },
                { label: 'Trending', href: '#process' },
                { label: 'Reviews', href: '#testimonials' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-subtext transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-primary">Get in Touch</h4>
            <div className="space-y-6">

              <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <FaMapMarkerAlt size={14} />
              </div>
              <p className="text-sm leading-relaxed text-subtext transition-colors group-hover:text-white">
                A-67, Rita Nagar Society,<br />Vastral Road, Ahmedabad<br />Gujarat 380026
              </p>
              <a
                href="tel:+918849715081"
                className="group flex items-center gap-4 transition-colors hover:text-white"
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <FaPhoneAlt size={14} />
                </div>
                <p className="text-sm font-bold text-subtext transition-colors group-hover:text-white">
                  +91 88497 15081
                </p>
              </a>
            </div>
          </div>

          {/* Map & Action */}
          <div className="lg:col-span-3">
            <div className="glass-dark group relative overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-2xl transition-all hover:border-primary/30">
              <div className="h-40 w-full overflow-hidden rounded-2xl grayscale transition-all duration-700 group-hover:grayscale-0">
                <iframe
                  title="Mom's Magic Pot Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.573916372413!2d72.6422023!3d23.0026906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8700377438e5%3A0xf4d4a85726ab95eb!2sMom%27s%20Magic%20Pot!5e0!3m2!1sen!2sin!4v1772190725736!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0 opacity-60 group-hover:opacity-100"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 p-2">
                <a
                  href={zomatoOrderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/40 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Order Magic Online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-white/5 pt-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-subtext/40">
            © {new Date().getFullYear()} MOM'S MAGIC POT • CRAFTED WITH LOVE
          </p>
          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service'].map((text) => (
              <span key={text} className="text-[10px] font-black uppercase tracking-[0.3em] text-subtext/40 transition-colors hover:text-primary cursor-pointer">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
