import { motion, useReducedMotion } from 'framer-motion'
import { Heart, Sparkles, Star } from 'lucide-react'

const phrase = 'I love you beybb'

interface PhraseRow {
  y: number
  width: number
  copies: number
  size: number
  centers?: number[]
}

const phraseRows: PhraseRow[] = [
  { y: 79, width: 158, copies: 1, size: 16, centers: [210, 390] },
  { y: 105, width: 205, copies: 1, size: 17, centers: [195, 405] },
  { y: 131, width: 430, copies: 3, size: 15 },
  { y: 157, width: 505, copies: 3, size: 17 },
  { y: 183, width: 545, copies: 4, size: 14 },
  { y: 209, width: 545, copies: 4, size: 14 },
  { y: 235, width: 525, copies: 3, size: 17 },
  { y: 261, width: 485, copies: 3, size: 16 },
  { y: 287, width: 420, copies: 3, size: 14 },
  { y: 313, width: 345, copies: 2, size: 17 },
  { y: 339, width: 260, copies: 2, size: 14 },
  { y: 365, width: 180, copies: 1, size: 18 },
]

const floatingObjects = [
  { x: 9, y: 26, size: 30, depth: 55, delay: 0.1, kind: 'heart' },
  { x: 88, y: 29, size: 20, depth: -35, delay: 0.8, kind: 'star' },
  { x: 17, y: 63, size: 15, depth: 25, delay: 1.2, kind: 'star' },
  { x: 82, y: 58, size: 29, depth: -55, delay: 0.45, kind: 'heart' },
  { x: 27, y: 87, size: 17, depth: 45, delay: 1.6, kind: 'heart' },
  { x: 74, y: 84, size: 19, depth: -20, delay: 1, kind: 'star' },
  { x: 50, y: 8, size: 17, depth: 35, delay: 1.9, kind: 'star' },
  { x: 4, y: 47, size: 13, depth: -45, delay: 2.1, kind: 'heart' },
  { x: 96, y: 43, size: 14, depth: 30, delay: 1.35, kind: 'star' },
]

export function HeartAnimation() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="final-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.8 }}
      aria-label="A floating 3D love scene"
    >
      <motion.div
        className="final-heading"
        initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.92, filter: 'blur(7px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: reduceMotion ? 0 : 1, ease: 'easeOut' }}
      >
        <div className="eyebrow"><span /> THE BEST PART <span /></div>
        <h1>I LOVE YOU,<br /><em>BEYBB</em> <span>❤️</span></h1>
        <p>One little phrase, a million different ways.</p>
      </motion.div>

      <div
        className="heart-canvas"
        role="img"
        aria-label={`A three-dimensional floating heart filled with ${phrase} messages and stars`}
      >
        <motion.div
          className="heart-3d-halo"
          aria-hidden="true"
          animate={reduceMotion ? undefined : {
            scale: [0.84, 1.13, 0.84],
            opacity: [0.28, 0.68, 0.28],
            rotate: [0, 12, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="hero-heart-3d"
          aria-hidden="true"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.35, rotateY: -55, rotateZ: -18 }}
          animate={reduceMotion
            ? { opacity: 0.42, scale: 1 }
            : {
                opacity: [0.3, 0.52, 0.3],
                scale: [0.94, 1.08, 0.94],
                rotateY: [-24, 24, -24],
                rotateZ: [-7, 7, -7],
              }}
          transition={{
            opacity: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            rotateZ: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            default: { duration: 1.25, ease: 'easeOut' },
          }}
        >
          <Heart className="hero-heart-back" fill="currentColor" strokeWidth={0.8} />
          <Heart className="hero-heart-front" fill="currentColor" strokeWidth={0.8} />
        </motion.div>

        <motion.svg
          className="heart-phrase-field"
          viewBox="0 0 600 430"
          role="presentation"
          aria-hidden="true"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
          animate={reduceMotion ? { opacity: 1, scale: 1 } : {
            opacity: [0.9, 1, 0.9],
            scale: [1, 1.012, 1],
            rotateY: [-2, 2, -2],
          }}
          transition={{
            opacity: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
            default: { duration: 1.1, ease: 'easeOut' },
          }}
        >
          {phraseRows.flatMap((row, index) => {
            const centers = row.centers ?? [300]
            return centers.map((center, segmentIndex) => (
              <motion.text
                className="heart-fill-line"
                key={`${row.y}-${segmentIndex}`}
                x={center}
                y={row.y}
                textAnchor="middle"
                fontSize={row.size}
                textLength={row.width}
                lengthAdjust="spacing"
                initial={reduceMotion ? undefined : { opacity: 0, y: 9 }}
                animate={reduceMotion
                  ? { opacity: 1 }
                  : { opacity: [0.82, 1, 0.82], y: [0, index % 2 ? -1.4 : 1.4, 0] }}
                transition={{
                  duration: 3.1 + (index % 4) * 0.3,
                  delay: reduceMotion ? 0 : 0.25 + index * 0.1 + segmentIndex * 0.08,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
              >
                {Array.from({ length: row.copies }, () => phrase).join('   ♥   ')}
              </motion.text>
            ))
          })}
        </motion.svg>

        {floatingObjects.map((object, index) => (
          <motion.span
            className={`floating-object floating-object-${object.kind}`}
            key={`${object.kind}-${index}`}
            style={{
              left: `${object.x}%`,
              top: `${object.y}%`,
              width: object.size,
              height: object.size,
              transformPerspective: 700,
              zIndex: index % 2 ? 4 : 0,
            }}
            aria-hidden="true"
            initial={reduceMotion ? undefined : {
              opacity: 0,
              scale: 0,
              rotateX: -60,
              rotateY: 55,
            }}
            animate={reduceMotion
              ? { opacity: 0.8, scale: 1 }
              : {
                  opacity: [0.45, 1, 0.45],
                  y: [0, index % 2 ? -19 : 15, 0],
                  x: [0, index % 2 ? 7 : -7, 0],
                  scale: [0.82, 1.12, 0.82],
                  rotateX: [0, object.depth, 0],
                  rotateY: [0, object.depth * -0.6, 0],
                  rotateZ: [0, index % 2 ? 65 : -65, 0],
                }}
            transition={{
              duration: reduceMotion ? 0 : 3.5 + (index % 4) * 0.65,
              delay: reduceMotion ? 0 : object.delay,
              repeat: reduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          >
            {object.kind === 'heart'
              ? <Heart size={object.size} fill="currentColor" strokeWidth={1} />
              : <Star size={object.size} fill="currentColor" strokeWidth={1} />}
          </motion.span>
        ))}

        {[0, 1, 2, 3, 4, 5].map((sparkle) => (
          <motion.span
            className={`heart-sparkle heart-sparkle-${sparkle + 1}`}
            key={sparkle}
            aria-hidden="true"
            animate={reduceMotion ? undefined : {
              opacity: [0.2, 1, 0.2],
              scale: [0.65, 1.25, 0.65],
              rotate: [0, 60, 120],
              y: [0, -7, 0],
            }}
            transition={{
              duration: 2.2 + sparkle * 0.25,
              delay: sparkle * 0.3,
              repeat: Infinity,
            }}
          >
            <Sparkles size={sparkle % 2 ? 13 : 17} />
          </motion.span>
        ))}
      </div>

      <motion.div
        className="final-signoff"
        initial={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.8, duration: 0.8, type: 'spring' }}
      >
        <Sparkles size={15} aria-hidden="true" />
        <span>I love you, beybb.</span>
        <span className="always">Always. 💋</span>
        <Sparkles size={15} aria-hidden="true" />
      </motion.div>
    </motion.section>
  )
}
