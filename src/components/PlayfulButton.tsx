import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const landingMessages = [
  'Are you sure? 🥺',
  'Beybb... really? 😭',
  "You're making me chase this button, huh? 😂",
  'Nice try 😏',
]

const letterMessages = [
  'Liar 😭',
  'Beybb, try again. 😤',
  'I know you do. 😏',
  'The button knows you’re lying 😂',
]

interface PlayfulButtonProps {
  scene: 'landing' | 'letter'
}

export function PlayfulButton({ scene }: PlayfulButtonProps) {
  const fieldRef = useRef<HTMLDivElement>(null)
  const [attempt, setAttempt] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const reduceMotion = useReducedMotion()
  const messages = scene === 'landing' ? landingMessages : letterMessages
  const initialLeft = scene === 'landing' ? '61%' : '61%'
  const initialTop = 0

  function moveButton() {
    const field = fieldRef.current
    if (!field) return

    const bounds = field.getBoundingClientRect()
    const button = field.querySelector('.no-button')?.getBoundingClientRect()
    if (!button) return

    const availableX = Math.max(0, bounds.width - button.width)
    const availableY = Math.max(0, bounds.height - button.height)
    const minX = Math.min(bounds.width * 0.52, availableX)
    const maxX = Math.max(minX, availableX)
    const x = minX + Math.random() * (maxX - minX)
    const y = Math.random() * availableY

    setPosition({ x: x - bounds.width * 0.61, y })
    setAttempt((current) => current + 1)
  }

  return (
    <div className="answer-area">
      {attempt > 0 && (
        <motion.p
          key={attempt}
          className="playful-message"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          aria-live="polite"
        >
          {messages[Math.min(attempt - 1, messages.length - 1)]}
        </motion.p>
      )}
      <div className="answer-buttons" ref={fieldRef}>
        <button
          className="button button-primary"
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('romance-yes', { detail: scene }))}
          aria-label={scene === 'landing' ? 'Yes, continue' : 'Yes, I miss you'}
        >
          YES <span aria-hidden="true">💗</span>
        </button>
        <motion.button
          className="button button-quiet no-button"
          type="button"
          onClick={moveButton}
          style={{ left: initialLeft, top: initialTop }}
          animate={{ x: position.x, y: position.y, rotate: attempt % 2 ? 4 : -4 }}
          transition={{
            type: reduceMotion ? 'tween' : 'spring',
            stiffness: 300,
            damping: 22,
            duration: reduceMotion ? 0 : undefined,
          }}
          aria-label="No, not yet"
        >
          NO <span aria-hidden="true">🙈</span>
        </motion.button>
      </div>
      <span className="tiny-note">psst... there’s only one right answer</span>
    </div>
  )
}
