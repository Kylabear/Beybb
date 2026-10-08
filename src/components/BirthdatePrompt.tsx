import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

interface BirthdatePromptProps {
  onCorrect: () => void
}

export function BirthdatePrompt({ onCorrect }: BirthdatePromptProps) {
  const [birthdate, setBirthdate] = useState('')
  const [error, setError] = useState('')
  const [warning, setWarning] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChange(value: string) {
    if (/^\d*$/.test(value)) {
      setBirthdate(value.slice(0, 2))
      setWarning(value.length > 2 ? 'Only two little numbers, beybb 💗' : '')
      setError('')
      return
    }
    setWarning('Please type a number only, beybb 😘')
    window.setTimeout(() => setWarning(''), 2200)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (birthdate === '22') {
      onCorrect()
      return
    }
    setError('That’s not your birthdate beybb 😭💋\nPlease type your real birthdate, beybb 😘')
    setBirthdate('')
    inputRef.current?.focus()
  }

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="presentation"
    >
      <motion.section
        className="birthdate-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="birthdate-title"
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 280, damping: 25 }}
      >
        <div className="modal-heart"><Heart size={24} fill="currentColor" /></div>
        <span className="modal-eyebrow"><Sparkles size={13} /> ONE LAST LITTLE THING</span>
        <h2 id="birthdate-title">One last question, beybb...</h2>
        <p className="birthdate-question">What’s your birthdate? <span>💗</span></p>
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="birthdate-input">Your birthdate</label>
          <div className="input-wrap">
            <input
              id="birthdate-input"
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]{1,2}"
              autoComplete="off"
              maxLength={2}
              placeholder="DD"
              value={birthdate}
              onChange={(event) => handleChange(event.target.value)}
              aria-describedby="birthdate-feedback"
              autoFocus
            />
            <span className="input-suffix">just the day</span>
          </div>
          <AnimatePresence mode="wait">
            {warning && (
              <motion.p
                key="warning"
                className="form-feedback warning"
                id="birthdate-feedback"
                role="status"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {warning}
              </motion.p>
            )}
            {!warning && error && (
              <motion.p
                key="error"
                className="form-feedback error"
                id="birthdate-feedback"
                role="alert"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.p>
            )}
            {!warning && !error && (
              <p className="form-feedback hint" id="birthdate-feedback">
                It’s a very important date, obviously 😉
              </p>
            )}
          </AnimatePresence>
          <button className="button button-primary submit-button" type="submit">
            That’s my day <Heart size={15} fill="currentColor" />
          </button>
        </form>
      </motion.section>
    </motion.div>
  )
}
