import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { zomatoOrderUrl } from '../data/menu'

export default function Footer() {
  return (
    <footer className="px-4 pb-16 pt-24 md:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-heading text-4xl font-bold tracking-tight text-white mb-4">MOM'S<br /><span className="text-primary italic">MAGIC</span> POT</p>
            <p className="text-sm leading-relaxed text-subtext">Premium comfort street food, crafted fresh with our signature magic spices in every bite.</p>
            <div className="mt-8 flex gap-4">
              {/* Social placeholders if needed */}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Contact Us</p>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm text-subtext leading-relaxed">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-primary" />
                A-67, Rita Nagar Society, Vastral Road, Ahmedabad 380026
              </p>
              <p className="flex items-center gap-3 text-sm text-subtext font-bold">
                <FaPhoneAlt className="shrink-0 text-primary" />
                +91 88497 15081
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Magic Links</p>
            <div className="grid grid-cols-1 gap-3">
              <a href="#categories" className="text-sm text-subtext transition-colors hover:text-primary">Our Menu</a>
              <a href="#offers" className="text-sm text-subtext transition-colors hover:text-primary">Featured Picks</a>
              <a href="#process" className="text-sm text-subtext transition-colors hover:text-primary">Trending Now</a>
              <a href="#testimonials" className="text-sm text-subtext transition-colors hover:text-primary">Reviews</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Action</p>
            <a
              href={zomatoOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-2xl bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-primary hover:text-white"
            >
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Order Online
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-subtext/50">
            © {new Date().getFullYear()} MOM'S MAGIC POT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-subtext/50">Privacy Policy</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-subtext/50">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
