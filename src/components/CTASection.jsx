import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function CTASection() {
  const { t, lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="shop" className="relative py-24 md:py-36 bg-[#eff0f4] overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,40 1440,30 L1440,0 L0,0 Z" fill="#0b121d" />
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#22a19a]/22 blur-3xl pointer-events-none" />
      <div className="absolute top-[20%] left-[-8%] w-[25vw] h-[25vw] rounded-full bg-[#ea7650]/20 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-16 text-white"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/brand-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b121df0] via-[#0f1928de] to-[#0b121dcf]" />
          <div className="absolute top-[-30%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#22a19a]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#ea7650]/16 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-[#a3ebe2] mb-4"
              >
                {t.cta.label}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[0.95]"
              >
                {t.cta.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/80 text-xl max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0"
              >
                {t.cta.body}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <a
                  href="#shop"
                  className="group relative inline-flex items-center gap-2 bg-[#ea7650] text-white font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#ea7650]/40 hover:-translate-y-1"
                >
                  <span className="relative z-10">{t.cta.btn_shop}</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 bg-[#f08967] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>

                <a
                  id="blog"
                  href="#blog"
                  className="inline-flex items-center gap-2 border-2 border-white/45 text-white font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-full transition-all duration-300 hover:border-[#f0ca3b] hover:text-[#f0ca3b] hover:bg-white/10 hover:-translate-y-1"
                >
                  {t.cta.btn_blog}
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="relative"
            >
              <img
                src="/docs/brand/pages/page-10.png"
                alt="P Mama brand applications"
                className="w-full rounded-2xl border border-white/15 shadow-2xl shadow-black/35"
              />
            </motion.div>
          </div>

          {/* Corner organic shapes */}
          <div className="absolute top-4 right-4 text-5xl opacity-20 select-none pointer-events-none">🦋</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-20 select-none pointer-events-none">🌿</div>
        </motion.div>

        {/* Three feature cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { icon: '🌿', label: lang === 'en' ? 'Natural Materials' : 'Materiales Naturales', desc: lang === 'en' ? 'All biodegradable, zero guilt' : 'Todo biodegradable, cero culpa' },
            { icon: '✋', label: lang === 'en' ? 'Handcrafted' : 'Artesanal', desc: lang === 'en' ? 'Made with love and care' : 'Hecho con amor y cuidado' },
            { icon: '🌎', label: lang === 'en' ? 'Positive Impact' : 'Impacto Positivo', desc: lang === 'en' ? 'Every purchase helps the planet' : 'Cada compra ayuda al planeta' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-[#d4d7e4] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-[#171d30] uppercase tracking-[0.05em]">{item.label}</p>
                <p className="text-sm text-[#4e556f]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
