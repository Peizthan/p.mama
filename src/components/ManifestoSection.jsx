import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function ManifestoSection() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = t.manifesto.quote.split(' ')

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/brand-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#0b121ddd]/95" />

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#22a19a]/16 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#ea7650]/14 blur-3xl" />
      </div>

      {/* Large decorative quote mark */}
      <div className="absolute top-8 left-8 text-[20rem] leading-none text-white/[0.04] font-display font-semibold select-none pointer-events-none">
        "
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-[#a3ebe2] mb-8"
        >
          {t.manifesto.label}
        </motion.span>

        {/* Animated word-by-word quote */}
        <p className="font-display text-4xl md:text-5xl xl:text-6xl font-semibold text-[#f4f5f8] leading-[0.97] mb-8">
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
          className="text-[#f0ca3b] font-semibold text-xl tracking-[0.12em] uppercase"
        >
          {t.manifesto.author}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#a3ebe2] to-transparent"
        />
      </div>
    </section>
  )
}
