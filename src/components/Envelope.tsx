import { motion, useReducedMotion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

interface EnvelopeProps {
  isOpen: boolean
}

export function Envelope({ isOpen }: EnvelopeProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`envelope-scene${isOpen ? ' is-open' : ''}`}
      animate={reduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 0.6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-label={isOpen ? 'An opened love letter' : 'A sealed love letter'}
    >
      <span className="envelope-sparkle sparkle-one" aria-hidden="true">
        <Sparkles size={19} />
      </span>
      <span className="envelope-sparkle sparkle-two" aria-hidden="true">
        ✦
      </span>
      <div className="letter-paper">
        <Heart size={19} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
        <span>for you, always</span>
      </div>
      <div className="envelope-back" />
      <div className="envelope-pocket" />
      <motion.div
        className="envelope-flap"
        animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      />
      <div className="envelope-seal" aria-hidden="true">
        <Heart size={24} fill="currentColor" strokeWidth={1.5} />
      </div>
    </motion.div>
  )
}
