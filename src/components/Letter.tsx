import { useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Envelope } from './Envelope'
import { TypingText } from './TypingText'
import { PlayfulButton } from './PlayfulButton'

const letterText = `My favorite person,

I just wanted to remind you how much I love and appreciate you. The little things with you — our silly conversations, the random laughs, even just being together — somehow turn an ordinary day into one I want to keep.

I know we won't always agree (and yes, I may still be right sometimes 😌), but even when things feel a little messy, I'd always rather talk, listen, and figure things out together. Your feelings matter to me, and I want us to make space for each other, always.

What we have doesn't need to be perfect to be precious. I'm so glad you're in my life, I miss you more than I let on, and I can't wait for all the tiny, lovely memories we still get to make.

I love you, beybb. More than I probably say sometimes. ❤️`

interface LetterProps {
  opened: boolean
  typingComplete: boolean
  onTypingComplete: () => void
  onOpen: () => void
  onContinue: () => void
}

export function Letter({
  opened,
  typingComplete,
  onTypingComplete,
  onOpen,
  onContinue,
}: LetterProps) {
  const complete = useCallback(() => onTypingComplete(), [onTypingComplete])

  useEffect(() => {
    if (!opened) return
    const timer = window.setTimeout(onOpen, 650)
    return () => window.clearTimeout(timer)
  }, [onOpen, opened])

  return (
    <motion.section
      key={opened ? 'letter-open' : 'letter-sealed'}
      className="scene-card letter-card"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.99 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="eyebrow"><span /> A LITTLE SOMETHING FOR YOU <span /></div>
      <Envelope isOpen={opened} />
      {!opened ? (
        <div className="prompt-content">
          <Sparkles size={15} className="prompt-sparkle" aria-hidden="true" />
          <h1>Do you miss me?</h1>
          <p className="prompt-emoji">🥺❤️</p>
          <PlayfulButton scene="letter" />
        </div>
      ) : (
        <motion.div
          className="letter-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
        >
          <div className="letter-date">A note from me to you</div>
          <TypingText text={letterText} onComplete={complete} />
          {typingComplete && (
            <>
              <motion.p
                className="letter-next-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                Take your time reading. Continue when you’re ready.
              </motion.p>
              <motion.button
                className="button button-primary letter-next"
                type="button"
                onClick={onContinue}
                aria-label="Next: answer one last question"
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                Next <Check size={15} />
                <ArrowRight size={15} />
              </motion.button>
            </>
          )}
        </motion.div>
      )}
    </motion.section>
  )
}
