import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { BirthdatePrompt } from './components/BirthdatePrompt'
import { FloatingHearts } from './components/FloatingHearts'
import { HeartAnimation } from './components/HeartAnimation'
import { Letter } from './components/Letter'
import { ParticleBackground } from './components/ParticleBackground'
import { PlayfulButton } from './components/PlayfulButton'
import { Toast } from './components/Toast'

type Stage = 'landing' | 'letter' | 'final'

function App() {
  const [stage, setStage] = useState<Stage>('landing')
  const [letterOpened, setLetterOpened] = useState(false)
  const [letterComplete, setLetterComplete] = useState(false)
  const [showBirthdatePrompt, setShowBirthdatePrompt] = useState(false)
  const [toast, setToast] = useState('')
  const reduceMotion = useReducedMotion()

  const handleYes = useCallback((event: Event) => {
    const scene = (event as CustomEvent<'landing' | 'letter'>).detail
    if (scene === 'landing') {
      setToast('I knew it! 💋')
      window.setTimeout(() => {
        setToast('')
        setStage('letter')
      }, 2300)
      return
    }

    if (scene === 'letter') {
      setToast('I miss you more, obviously 💗')
      window.setTimeout(() => {
        setToast('')
        setLetterOpened(true)
      }, 1400)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('romance-yes', handleYes)
    return () => window.removeEventListener('romance-yes', handleYes)
  }, [handleYes])

  const handleTypingComplete = useCallback(() => setLetterComplete(true), [])
  const handleOpen = useCallback(() => {
    setLetterComplete(false)
  }, [])

  return (
    <main className={`app-shell${stage === 'final' ? ' final-mode' : ''}`}>
      <div className="ambient-glow glow-left" aria-hidden="true" />
      <div className="ambient-glow glow-right" aria-hidden="true" />
      <ParticleBackground />
      <FloatingHearts />
      <div className="topbar">
        <a className="brand-mark" href="#" aria-label="Back to the beginning">
          <span className="brand-icon"><Heart size={14} fill="currentColor" /></span>
          <span>just for you</span>
        </a>
        <span className="topbar-note"><Sparkles size={13} /> a little love, delivered</span>
      </div>

      <div className="experience">
        <AnimatePresence mode="wait">
          {stage === 'landing' && (
            <motion.section
              key="landing"
              className="scene-card landing-card"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
            >
              <div className="eyebrow"><span /> A VERY IMPORTANT MESSAGE <span /></div>
              <motion.div
                className="hero-heart"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { y: [0, -5, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart size={24} fill="currentColor" strokeWidth={1.4} />
                <span className="hero-sparkle sparkle-a">✦</span>
                <span className="hero-sparkle sparkle-b">✧</span>
              </motion.div>
              <motion.h1
                className="landing-title"
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.12, duration: 0.75 }}
              >
                Hi beybb <span>💗</span>
              </motion.h1>
              <motion.p
                className="landing-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48, duration: 0.7 }}
              >
                I have a little question for you...
              </motion.p>
              <PlayfulButton scene="landing" />
              <div className="card-bottom-note">
                <span /> MADE WITH A LITTLE EXTRA LOVE <span />
              </div>
            </motion.section>
          )}

          {stage === 'letter' && (
            <Letter
              key="letter"
              opened={letterOpened}
              typingComplete={letterComplete}
              onTypingComplete={handleTypingComplete}
              onOpen={handleOpen}
              onContinue={() => setShowBirthdatePrompt(true)}
            />
          )}

          {stage === 'final' && <HeartAnimation key="final" />}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showBirthdatePrompt && stage === 'letter' && (
          <BirthdatePrompt
            key="birthdate-prompt"
            onCorrect={() => {
              setLetterComplete(false)
              setShowBirthdatePrompt(false)
              setStage('final')
            }}
          />
        )}
      </AnimatePresence>
      <div className="toast-layer">
        <Toast message={toast} visible={Boolean(toast)} />
      </div>

      <footer className="site-footer">
        <span>made with <Heart size={11} fill="currentColor" /> just for my beybbii</span>
        <span className="footer-dot">✦</span>
        <span>take your time, beybb</span>
      </footer>
    </main>
  )
}

export default App
