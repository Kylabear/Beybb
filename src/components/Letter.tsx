import { useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Envelope } from './Envelope'
import { TypingText } from './TypingText'
import { PlayfulButton } from './PlayfulButton'

const letterText = `Happy birthday, beybb.

It's your day today, but somehow, I'm the one who feels lucky. I get to celebrate the existence of someone who has become so important to me in ways I never expected. I hope this year brings you closer to the life you've always wanted, gives you courage when things feel uncertain, and reminds you that you deserve good things, even on the days when you struggle to see them yourself. You have so many beautiful things ahead of you, and I hope you never stop believing in yourself.

I hope we never lose our willingness to understand each other, even when things aren't easy. I'm not here because I expect everything to be perfect; I'm here because what we have means something to me. I want to keep discovering more of you, growing alongside you, and giving whatever we have the time, patience, and care it deserves.

If there's one thing I wish for you, it's to see you achieve the things you dream of, celebrate even your smallest victories with you, and be there for the ordinary days that somehow become the most memorable. I can't tell you exactly what tomorrow holds, but I'm happy that, right now, I get to have you in my life. Happy birthday, my beybbii. I hope life is gentle with you, and I hope I get to be part of many more chapters of your story.

I love you, beybb. Always. 😘`

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
          <div className="letter-date">A birthday note from me to you</div>
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
