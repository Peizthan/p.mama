import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'

function PhilosophyCard({ icon, title, body, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="group relative p-8 rounded-3xl bg-white border border-[#D1F0DF] hover:border-[#4A9B6F] hover:shadow-xl hover:shadow-green-100 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
    >
      {/* Card glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D1F0DF]/0 to-[#A8E6C3]/0 group-hover:from-[#D1F0DF]/30 group-hover:to-[#A8E6C3]/20 transition-all duration-400 rounded-3xl pointer-events-none" />

      <span className="text-4xl mb-5 block">{icon}</span>
      <h3 className="font-display text-xl font-bold text-[#1C3A2B] mb-3">{title}</h3>
      <p className="text-[#5a7a68] leading-relaxed text-sm">{body}</p>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl bg-[#4A9B6F]/5 group-hover:bg-[#4A9B6F]/15 transition-colors duration-300" />
    </motion.div>
  )
}

export default function SustainabilitySection() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-[#FAFAF5] to-[#EDF7F1] overflow-hidden">
      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" fill="#FAFAF5" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-[20%] w-[35vw] h-[35vw] rounded-full bg-[#F9C74F]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#E85D26] mb-4"
          >
            {t.philosophy.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-[#1C3A2B] max-w-2xl mx-auto leading-tight"
          >
            {t.philosophy.title}
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.philosophy.items.map((item, i) => (
            <PhilosophyCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              body={item.body}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,40 1440,30 L1440,60 L0,60 Z" fill="#1C3A2B" />
        </svg>
      </div>
    </section>
  )
}
