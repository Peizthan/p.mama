import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import FloatingElements from './FloatingElements'

/* Main logo — square variant works best in hero */
const LOGO_SQUARE = '/brand-logo.png'
const BRAND_PATTERN = '/brand-bg.png'

export default function Hero() {
  const { t } = useLang()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const yLogo = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Brand-pattern background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050910]/80 via-[#111b2acc] to-[#050910]/95" />
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#22a19a]/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ea7650]/18 blur-3xl" />
        <div className="absolute top-[28%] left-[16%] w-[32vw] h-[32vw] rounded-full bg-[#f0ca3b]/16 blur-2xl" />
      </motion.div>

      {/* Floating nature elements */}
      <FloatingElements />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Text block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white order-2 lg:order-1"
        >
          {/* Tagline pill */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4f4ef] bg-[#111b2a]/75 border border-white/25 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f0ca3b] animate-pulse" />
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-[0.01em] mb-6 drop-shadow-lg"
          >
            <span className="block text-[#f4f5f8]">{t.hero.headline1}</span>
            <span className="block text-[#f4f5f8]">{t.hero.headline2}</span>
            <span className="block bg-gradient-to-r from-[#22a19a] via-[#f0ca3b] to-[#ea7650] bg-clip-text text-transparent">
              {t.hero.headline3}
            </span>
          </motion.h1>

          {/* Manifesto */}
          <motion.p
            variants={itemVariants}
            className="text-[#d6d9e4]/85 text-xl leading-relaxed max-w-xl mb-10"
          >
            {t.hero.manifesto}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="group relative inline-flex items-center gap-2 bg-[#ea7650] text-white font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#ea7650]/40 hover:-translate-y-0.5"
            >
              <span className="relative z-10">{t.hero.cta_shop}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 bg-[#f08967] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white/45 text-white font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-full transition-all duration-300 hover:border-[#f0ca3b] hover:text-[#f0ca3b] hover:bg-white/10 hover:-translate-y-0.5"
            >
              {t.hero.cta_learn}
            </a>
          </motion.div>
        </motion.div>

        {/* Logo / illustration */}
        <motion.div
          style={{ y: yLogo }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#464579]/50 blur-3xl scale-110" />
            {/* Subtle rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-[#f4f5f8]/35"
            />
            {/* Logo with fallback text */}
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <img
                src={LOGO_SQUARE}
                alt="P Mama — Eco-conscious brand"
                className="w-full h-full object-contain drop-shadow-2xl"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div
                className="hidden w-full h-full items-center justify-center flex-col gap-3"
                style={{ display: 'none' }}
              >
                <span className="text-7xl">🌿</span>
                <span className="font-display text-4xl font-semibold text-white/95 tracking-[0.08em]">P.MAMA</span>
                <span className="text-white/60 text-sm tracking-[0.2em] uppercase">Eco · Arte · Vida</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/55 text-xs tracking-[0.2em] uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/35 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#f0ca3b]/85" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#eff0f4"
          />
        </svg>
      </div>
    </section>
  )
}
