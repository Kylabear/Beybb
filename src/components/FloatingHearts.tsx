import { motion, useReducedMotion } from 'framer-motion'
import { Heart } from 'lucide-react'

const hearts = Array.from({ length: 7 }, (_, index) => ({
  left: `${10 + ((index * 31) % 82)}%`,
  delay: index * 1.8,
  size: 12 + (index % 3) * 5,
}))

export function FloatingHearts() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart, index) => (
        <motion.span
          key={index}
          className="floating-heart"
          style={{ left: heart.left, fontSize: heart.size }}
          animate={
            reduceMotion
              ? { opacity: 0.18 }
              : { y: [0, -28, 0], x: [0, index % 2 ? 10 : -10, 0], opacity: [0.12, 0.32, 0.12] }
          }
          transition={{
            duration: 7 + (index % 3),
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeInOut',
          }}
        >
          <Heart size={heart.size} strokeWidth={1.25} />
        </motion.span>
      ))}
    </div>
  )
}
