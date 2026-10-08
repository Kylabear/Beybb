import { motion, useReducedMotion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 47 + 9) % 100}%`,
  top: `${(index * 67 + 7) % 100}%`,
  delay: (index % 7) * 0.55,
  size: index % 5 === 0 ? 4 : 2,
}))

export function ParticleBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          className="particle"
          key={index}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.12, 0.62, 0.12], y: [0, -12, 0] }
          }
          transition={{
            duration: 5 + (index % 4),
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
