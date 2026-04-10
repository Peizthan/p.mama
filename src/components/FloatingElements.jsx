import { motion } from 'framer-motion'

/* Animated floating nature elements — leaves, dots, organic shapes */
const LEAVES = [
  { id: 1, size: 24, x: '8%', y: '15%', delay: 0, duration: 12 },
  { id: 2, size: 16, x: '85%', y: '25%', delay: 1.5, duration: 14 },
  { id: 3, size: 32, x: '70%', y: '60%', delay: 3, duration: 16 },
  { id: 4, size: 20, x: '15%', y: '65%', delay: 2, duration: 13 },
  { id: 5, size: 14, x: '55%', y: '20%', delay: 4, duration: 11 },
  { id: 6, size: 28, x: '92%', y: '70%', delay: 1, duration: 15 },
  { id: 7, size: 18, x: '40%', y: '80%', delay: 3.5, duration: 12 },
]

const DOTS = [
  { id: 1, x: '30%', y: '30%', delay: 0.5 },
  { id: 2, x: '65%', y: '50%', delay: 2 },
  { id: 3, x: '20%', y: '75%', delay: 1 },
  { id: 4, x: '78%', y: '15%', delay: 3 },
]

function Leaf({ size, x, y, delay, duration }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none z-[2] text-[#9de3db]/50"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 15, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="opacity-60"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-12 2C8 5 7 8 7 8s-3-1-3 3c0 2.5 2 3 2 3s0-2 2-3c0 0 3 0 3-3S10 5 10 5s4 0 5 2" />
      </svg>
    </motion.div>
  )
}

function Dot({ x, y, delay }) {
  return (
    <motion.div
      className="absolute pointer-events-none w-1.5 h-1.5 rounded-full bg-[#f0ca3b]/55 z-[2]"
      style={{ left: x, top: y }}
      animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
      {LEAVES.map((l) => (
        <Leaf key={l.id} {...l} />
      ))}
      {DOTS.map((d) => (
        <Dot key={d.id} {...d} />
      ))}
    </div>
  )
}
