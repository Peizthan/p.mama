import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const LOGO_FULL = '/brand-logo.png'

export default function Navbar() {
  const { t, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.shop, href: '#shop' },
    { label: t.nav.blog, href: '#blog' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070d16]/88 backdrop-blur-lg shadow-xl shadow-black/30 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src={LOGO_FULL}
            alt="P Mama"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[#f0ca3b] ${
                scrolled ? 'text-[#e7e8ec]' : 'text-white drop-shadow'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={`text-sm font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 ${
              scrolled
                ? 'border-[#22a19a] text-[#9adfd6] hover:bg-[#22a19a] hover:text-[#071018]'
                : 'border-white/70 text-white hover:bg-white hover:text-[#292b5a]'
            }`}
          >
            {t.nav.langToggle}
          </button>
        </nav>

        {/* Mobile: lang + burger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className={`text-xs font-bold px-2.5 py-1 rounded-full border transition-all ${
              scrolled
                ? 'border-[#22a19a] text-[#9adfd6]'
                : 'border-white/80 text-white'
            }`}
          >
            {t.nav.langToggle}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`p-1 transition-colors ${scrolled ? 'text-[#e7e8ec]' : 'text-white'}`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#070d16]/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[#e7e8ec] hover:text-[#f0ca3b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
