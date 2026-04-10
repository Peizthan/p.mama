import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'

const LOGO_FULL = '/brand-logo.png'

function useReveal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

function StatBadge({ value, label, delay }) {
  const { ref, inView } = useReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center p-6 rounded-3xl bg-[#ffffff] shadow-sm border border-[#d3d7e3] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <span className="text-4xl font-display font-semibold text-[#292b5a] mb-1">{value}</span>
      <span className="text-sm text-[#4e556f] font-medium uppercase tracking-[0.06em]">{label}</span>
    </motion.div>
  )
}

export default function AboutSection() {
  const { t } = useLang()
  const { ref: sectionRef, inView } = useReveal()

  const stats = [
    { value: t.about.stat1_value, label: t.about.stat1_label },
    { value: t.about.stat2_value, label: t.about.stat2_label },
    { value: t.about.stat3_value, label: t.about.stat3_label },
  ]

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-[#eff0f4] overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#292b5a] to-transparent" />
      <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#22a19a]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#ea7650]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="absolute inset-0 m-auto w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-[#464579]/35 animate-[spin_22s_linear_infinite]" />
          <div className="relative z-10 bg-gradient-to-br from-[#292b5a] to-[#464579] rounded-[36%_64%_58%_42%/42%_36%_64%_58%] p-8 shadow-2xl shadow-[#1d1f41]/30">
            <img
              src={LOGO_FULL}
              alt="P Mama logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>

        {/* Text side */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-[#ea7650] mb-4"
          >
            {t.about.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold text-[#171d30] leading-[0.95] mb-6"
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#38415b] text-xl leading-relaxed mb-10"
          >
            {t.about.body}
          </motion.p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <StatBadge key={s.label} value={s.value} label={s.label} delay={0.3 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
