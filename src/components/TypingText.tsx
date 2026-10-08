import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface TypingTextProps {
  text: string
  onComplete: () => void
}

export function TypingText({ text, onComplete }: TypingTextProps) {
  const [characterCount, setCharacterCount] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      setCharacterCount(text.length)
      onComplete()
      return
    }

    let current = 0
    const timer = window.setInterval(() => {
      current += 2
      setCharacterCount(Math.min(current, text.length))
      if (current >= text.length) {
        window.clearInterval(timer)
        onComplete()
      }
    }, 28)

    return () => window.clearInterval(timer)
  }, [onComplete, reduceMotion, text])

  return (
    <p className="letter-copy" aria-label={text}>
      {text.slice(0, characterCount)}
      {characterCount < text.length && (
        <motion.span
          className="typing-cursor"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        >
          ▍
        </motion.span>
      )}
    </p>
  )
}
