import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Star } from 'lucide-react'

const phrase = 'I love you so much beybb'

const heartRows = [
  {
    path: 'M65 147 C84 72 230 48 300 143 C370 48 516 72 535 147',
    copies: 2,
    size: 18,
  },
  {
    path: 'M54 163 C150 191 245 189 300 158 C355 189 450 191 546 163',
    copies: 2,
    size: 17,
  },
  {
    path: 'M61 194 C160 219 250 219 300 193 C350 219 440 219 539 194',
    copies: 2,
    size: 16,
  },
  {
    path: 'M72 225 C164 249 250 249 300 226 C350 249 436 249 528 225',
    copies: 2,
    size: 15,
  },
  {
    path: 'M91 256 C172 277 255 278 300 259 C345 278 428 277 509 256',
    copies: 2,
    size: 14,
  },
  {
    path: 'M115 287 C185 305 260 307 300 291 C340 307 415 305 485 287',
    copies: 2,
    size: 13,
  },
  {
    path: 'M145 317 C205 334 265 335 300 321 C335 335 395 334 455 317',
    copies: 1,
    size: 22,
  },
  {
    path: 'M180 346 C225 360 270 361 300 351 C330 361 375 360 420 346',
    copies: 1,
    size: 18,
  },
  {
    path: 'M223 374 C255 385 280 386 300 378 C320 386 345 385 377 374',
    copies: 1,
    size: 13,
    textLength: 150,
  },
]

export function HeartAnimation() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="final-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      aria-label="A heart made of loving messages"
    >
      <motion.div
        className="final-heading"
        initial={{ opacity: 0, y: 24, scale: 0.92, filter: 'blur(7px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="eyebrow"><span /> THE BEST PART <span /></div>
        <h1>I LOVE YOU SO MUCH,<br /><em>BEYBB</em> <span>❤️</span></h1>
        <p>In every little way, today and always.</p>
      </motion.div>
      <div
        className="heart-canvas"
        role="img"
        aria-label={`Heart-shaped arrangement of ${phrase} phrases`}
      >
        <motion.svg
          className="heart-typography"
          viewBox="0 0 600 430"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { scale: [0.99, 1.015, 0.99] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            {heartRows.map((row, index) => (
              <path d={row.path} id={`heart-text-line-${index}`} key={index} />
            ))}
          </defs>
          <motion.path
            className="heart-outline-path"
            d="M300 404 C269 376 49 235 49 118 C49 20 184 2 300 97 C416 2 551 20 551 118 C551 235 331 376 300 404Z"
            initial={reduceMotion ? undefined : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.7, delay: 0.2, ease: 'easeInOut' }}
          />
          {heartRows.map((row, index) => {
            const text = Array.from({ length: row.copies }, () => phrase).join('   ♥   ')
            return (
              <motion.text
                className="heart-curved-line"
                key={index}
                textAnchor="middle"
                fontSize={row.size}
                initial={reduceMotion ? undefined : { opacity: 0, y: 5 }}
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: [0.82, 1, 0.82], y: [0, -1, 0] }
                }
                transition={{
                  duration: 3 + (index % 3) * 0.35,
                  delay: reduceMotion ? 0 : 0.35 + index * 0.22,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
              >
                <textPath
                  href={`#heart-text-line-${index}`}
                  startOffset="50%"
                  textLength={row.textLength}
                  lengthAdjust={row.textLength ? 'spacingAndGlyphs' : undefined}
                >
                  {text}
                </textPath>
              </motion.text>
            )
          })}
        </motion.svg>
        <motion.div
          className="heart-halo"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { scale: [0.88, 1.1, 0.88], opacity: [0.3, 0.58, 0.3] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {[0, 1, 2, 3].map((sparkle) => (
          <motion.span
            className={`heart-sparkle heart-sparkle-${sparkle + 1}`}
            key={sparkle}
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.7, 1.2, 0.7], rotate: [0, 45, 90] }}
            transition={{ duration: 2.2 + sparkle * 0.25, delay: sparkle * 0.4, repeat: Infinity }}
          >
            <Star size={sparkle % 2 ? 12 : 16} fill="currentColor" />
          </motion.span>
        ))}
      </div>
      <motion.div
        className="final-signoff"
        initial={{ opacity: 0, y: 12, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.8, type: 'spring' }}
      >
        <Sparkles size={15} aria-hidden="true" />
        <span>I love you so much, beybb.</span>
        <span className="always">Always. 💋</span>
        <Sparkles size={15} aria-hidden="true" />
      </motion.div>
    </motion.section>
  )
}
