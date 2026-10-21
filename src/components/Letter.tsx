import { useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Envelope } from './Envelope'
import { TypingText } from './TypingText'
import { PlayfulButton } from './PlayfulButton'

const letterText = `Happy birthday, my beybbii! 🥹❤️🎂

It's your day today, pero somehow, ako pa yata yung mas lucky because I get to have someone like you in my life. I hope this new chapter brings you genuine happiness, peace of mind, and more reasons to believe in yourself. Never forget that you deserve all the good things life has to offer. 🌷✨

As for us, I hope we never lose our willingness to understand each other, even when things aren't easy. I know we won't always get everything right, but I hope we keep choosing to listen, communicate, and meet each other halfway. I want to keep growing with you, celebrating your little wins, and being there for you, not just on your happiest days, but also on your sad and ordinary ones.

And whenever life feels too heavy, I hope you remember that you have me. Maybe I'm not always good at comforting you with words, but I'll always be willing to listen and understand you. You don't have to pretend to be okay all the time.

Beybb, I want you for life. ❤️ You're already part of the future I imagine for myself, sa mga bagay na gusto kong ma-achieve, sa mga places na gusto kong puntahan, and sa mga memories na gusto kong gawin. I don't know exactly what the future holds for us, but I know that when I think about the things I want to happen in my life, you're always someone I want beside me. I hope we get to grow together, figure life out together, and make those little dreams come true, one day at a time. I hope I get to watch you grow into the person you want to be and celebrate many more birthdays with you. I'm really glad that, in this lifetime, our paths crossed.

Happy birthday again, beybb! I love you, always. 😘❤️🌷`

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
          <div className="letter-date">for you beybb</div>
          <div className="letter-stickers" aria-hidden="true">
            <span>🎂</span>
            <span>💐</span>
            <span>💌</span>
            <span>🎁</span>
          </div>
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
