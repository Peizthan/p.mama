import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function ManifestoSection() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = t.manifesto.quote.split(' ')

  return (
    <section className="relative py-24 md:py-36 bg-[#1C3A2B] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4A9B6F]/15 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E85D26]/10 blur-3xl" />
      </div>

      {/* Large decorative quote mark */}
      <div className="absolute top-8 left-8 text-[20rem] leading-none text-white/[0.03] font-display font-bold select-none pointer-events-none">
        "
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#A8E6C3] mb-8"
        >
          {t.manifesto.label}
        </motion.span>

        {/* Animated word-by-word quote */}
        <p className="font-display text-2xl md:text-3xl xl:text-4xl font-bold text-white leading-relaxed mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[#A8E6C3] font-semibold text-lg tracking-wide"
        >
          {t.manifesto.author}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#A8E6C3] to-transparent"
        />
      </div>
    </section>
  )
}
