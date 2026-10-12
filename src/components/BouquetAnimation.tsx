import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const flowers = [
  { x: 155, y: 156, size: 0.78, color: '#f7c94e', shade: '#d89a32', center: '#6e4930', delay: 0.05, sunflower: true },
  { x: 195, y: 131, size: 1, color: '#cf6f83', shade: '#a94f68', center: '#f4c875', delay: 0.1, sunflower: false },
  { x: 300, y: 91, size: 1.13, color: '#e99b70', shade: '#c57559', center: '#f7d78e', delay: 0.35, sunflower: false },
  { x: 405, y: 129, size: 0.96, color: '#e9a3a2', shade: '#bf737b', center: '#f5d183', delay: 0.55, sunflower: false },
  { x: 445, y: 160, size: 0.78, color: '#f7c94e', shade: '#d89a32', center: '#6e4930', delay: 0.7, sunflower: true },
  { x: 252, y: 181, size: 0.79, color: '#d895b1', shade: '#ae6e91', center: '#f5d27c', delay: 0.75, sunflower: false },
  { x: 302, y: 178, size: 0.76, color: '#f4c4c3', shade: '#c9828d', center: '#f7de9c', delay: 0.8, sunflower: false },
  { x: 350, y: 184, size: 0.96, color: '#f7c94e', shade: '#d89a32', center: '#6e4930', delay: 0.9, sunflower: true },
]

const stems = [
  'M155 156 C184 215 250 265 294 328',
  'M195 132 C220 205 265 258 294 327',
  'M300 92 C300 185 301 249 300 329',
  'M405 130 C380 205 335 265 306 329',
  'M445 160 C416 218 350 270 306 328',
  'M252 181 C263 232 285 276 298 329',
  'M302 178 C301 235 301 281 300 329',
  'M350 184 C338 235 316 280 302 329',
]

const leaves = [
  { x: 232, y: 231, rotate: -36, delay: 0.2 },
  { x: 366, y: 237, rotate: 34, delay: 0.4 },
  { x: 268, y: 276, rotate: -28, delay: 0.65 },
  { x: 334, y: 280, rotate: 27, delay: 0.8 },
]

const fillerSprigs = [
  { x: 129, y: 222, scale: 0.88, rotate: -9 },
  { x: 471, y: 222, scale: 0.88, rotate: 9 },
  { x: 223, y: 207, scale: 0.62, rotate: -8 },
  { x: 377, y: 207, scale: 0.62, rotate: 8 },
]

const fillerBuds = [
  [-19, -78], [-8, -68], [6, -78], [19, -65],
  [-26, -51], [-12, -47], [3, -57], [20, -45],
  [-17, -30], [0, -37], [15, -26],
]

export function BouquetAnimation() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="final-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.8 }}
      aria-label="A three-dimensional animated flower bouquet"
    >
      <motion.div
        className="final-heading"
        initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.92, filter: 'blur(7px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: reduceMotion ? 0 : 1, ease: 'easeOut' }}
      >
        <div className="eyebrow"><span /> THE BEST PART <span /></div>
        <h1>I LOVE YOU,<br /><em>BEYBB</em> <span>💐</span></h1>
        <p>Carnations, sunflowers &amp; little blossoms, just for you.</p>
      </motion.div>

      <div
        className="bouquet-canvas"
        role="img"
        aria-label="A three-dimensional bouquet of carnations, three sunflowers, baby's-breath fillers and greenery"
      >
        <motion.div
          className="bouquet-halo"
          aria-hidden="true"
          animate={reduceMotion ? undefined : {
            scale: [0.9, 1.12, 0.9],
            opacity: [0.35, 0.72, 0.35],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.svg
          className="bouquet-art"
          viewBox="0 0 600 430"
          role="presentation"
          aria-hidden="true"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, rotateY: -5, y: 12 }}
          animate={reduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: 1,
                scale: [1, 1.025, 1],
                rotateX: [-3, 3, -3],
                rotateY: [-4, 4, -4],
                rotateZ: [-1, 1, -1],
                y: [0, -7, 0],
              }}
          transition={reduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 0.9 },
                scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                rotateX: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
                rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 1.2, ease: 'easeOut' },
              }}
        >
          <defs>
            <linearGradient id="bouquet-paper" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff2e7" />
              <stop offset=".48" stopColor="#e8c6b5" />
              <stop offset="1" stopColor="#c89187" />
            </linearGradient>
            <linearGradient id="bouquet-paper-fold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#c48a83" />
              <stop offset=".5" stopColor="#f7dfcf" />
              <stop offset="1" stopColor="#bd817d" />
            </linearGradient>
            <linearGradient id="bouquet-leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#9bb28a" />
              <stop offset="1" stopColor="#58765c" />
            </linearGradient>
            <radialGradient id="bouquet-center">
              <stop offset="0" stopColor="#fff2b8" />
              <stop offset=".72" stopColor="#e8b95f" />
              <stop offset="1" stopColor="#c78d45" />
            </radialGradient>
          </defs>

          <ellipse cx="300" cy="372" rx="118" ry="20" fill="#a67770" opacity=".13" />

          <g className="bouquet-stems" fill="none" stroke="#668166" strokeLinecap="round">
            {stems.map((stem, index) => (
              <motion.path
                key={stem}
                d={stem}
                strokeWidth={index === 2 ? 5 : 4}
                initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : 0.25 + index * 0.1 }}
              />
            ))}
          </g>

          {leaves.map((leaf, index) => (
            <g key={`${leaf.x}-${leaf.y}`} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rotate})`}>
              <motion.g
                className="bouquet-leaf"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                animate={reduceMotion ? undefined : { rotate: [leaf.rotate - 5, leaf.rotate + 6, leaf.rotate - 5] }}
                transition={{ duration: 4 + index * 0.35, delay: leaf.delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M0 0 C-20-27-19-48 2-56 C22-37 20-15 0 0Z" fill="url(#bouquet-leaf)" />
                <path d="M0-2 Q2-25 2-51" fill="none" stroke="#d3dfbd" strokeWidth="1.5" opacity=".72" />
              </motion.g>
            </g>
          ))}

          <path
            d="M179 210 Q300 258 421 210 L347 379 Q301 411 253 379Z"
            fill="url(#bouquet-paper)"
            stroke="#b98079"
            strokeWidth="2"
          />
          <path d="M179 210 Q224 242 267 251 L253 379Z" fill="#fff5e9" opacity=".58" />
          <path d="M421 210 Q378 242 334 251 L347 379Z" fill="#b77d79" opacity=".22" />
          <path d="M195 218 Q299 275 405 218 L342 365 Q299 390 258 365Z" fill="none" stroke="url(#bouquet-paper-fold)" strokeWidth="3" opacity=".78" />
          <path d="M223 234 Q279 273 300 385 M377 234 Q322 274 300 385" fill="none" stroke="#fff7ed" strokeWidth="2" opacity=".5" />

          <g className="bouquet-ribbon">
            <path d="M296 327 C268 300 245 313 263 335 C273 347 286 342 300 333Z" fill="#b96673" stroke="#9e5261" strokeWidth="2" />
            <path d="M304 327 C331 300 354 313 337 335 C327 347 314 342 300 333Z" fill="#d78b8b" stroke="#ad626e" strokeWidth="2" />
            <path d="M292 334 L274 365 L299 353 L307 368 L310 334Z" fill="#c87880" stroke="#a95d69" strokeWidth="1.5" />
            <ellipse cx="300" cy="330" rx="9" ry="8" fill="#f0b0a3" stroke="#a95d69" strokeWidth="1.5" />
            <path d="M266 321 Q279 320 289 330 M334 321 Q321 320 311 330" fill="none" stroke="#f2c3b4" strokeWidth="2" opacity=".8" />
          </g>

          <g className="bouquet-fillers" fill="none" stroke="#7c956f" strokeLinecap="round" strokeLinejoin="round">
            {fillerSprigs.map((sprig, sprigIndex) => (
              <g
                key={`${sprig.x}-${sprig.y}`}
                transform={`translate(${sprig.x} ${sprig.y}) rotate(${sprig.rotate}) scale(${sprig.scale})`}
              >
                <path d="M0 8 C-2-15 2-39 0-67" strokeWidth="2.5" />
                <path d="M0-23 Q-16-31-25-48 M1-35 Q15-42 23-58 M0-48 Q-12-55-15-69 M1-17 Q12-23 17-37" strokeWidth="1.8" />
                {fillerBuds.map(([x, y], budIndex) => (
                  <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                    <motion.g
                      className="baby-breath"
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                      animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
                      transition={{
                        duration: 3.2 + (budIndex % 3) * 0.45,
                        delay: sprigIndex * 0.2 + budIndex * 0.08,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <circle cx="0" cy="-3" r="2.8" fill="#fffaf2" stroke="#d8cbb3" strokeWidth=".7" />
                      <circle cx="3" cy="0" r="2.8" fill="#fffaf2" stroke="#d8cbb3" strokeWidth=".7" />
                      <circle cx="0" cy="3" r="2.8" fill="#fffaf2" stroke="#d8cbb3" strokeWidth=".7" />
                      <circle cx="-3" cy="0" r="2.8" fill="#fffaf2" stroke="#d8cbb3" strokeWidth=".7" />
                      <circle cx="0" cy="0" r="1.4" fill="#e7c278" stroke="none" />
                    </motion.g>
                  </g>
                ))}
              </g>
            ))}
          </g>

          {flowers.map((flower, flowerIndex) => (
            <g key={`${flower.x}-${flower.y}`} transform={`translate(${flower.x} ${flower.y}) scale(${flower.size})`}>
              <motion.g
                className="bouquet-flower"
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  transformStyle: 'preserve-3d',
                  transformPerspective: 900,
                }}
                initial={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                animate={reduceMotion
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: 1,
                      scale: [1, 1.025, 1],
                      rotateX: [0, flowerIndex % 2 ? 3 : -3, 0],
                      rotateY: [-3, 3, -3],
                      rotateZ: [-2, 2, -2],
                      y: [0, flowerIndex % 2 ? -3 : 3, 0],
                    }}
                transition={{
                  duration: reduceMotion ? 0 : 4.3 + flowerIndex * 0.45,
                  delay: reduceMotion ? 0 : flower.delay,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
              >
                {flower.sunflower
                  ? (
                      <>
                        <circle cx="0" cy="0" r="34" fill={flower.shade} opacity=".42" transform="translate(3 5)" />
                        {Array.from({ length: 14 }, (_, petal) => (
                          <ellipse
                            key={petal}
                            cx="0"
                            cy="-21"
                            rx="8"
                            ry="19"
                            fill={flower.color}
                            stroke={flower.shade}
                            strokeWidth="1.4"
                            transform={`rotate(${petal * (360 / 14)})`}
                          />
                        ))}
                        <circle cx="0" cy="0" r="13" fill={flower.center} stroke="#493022" strokeWidth="1.2" />
                        {Array.from({ length: 12 }, (_, seed) => {
                          const angle = (seed / 12) * Math.PI * 2
                          return (
                            <circle
                              key={`seed-${seed}`}
                              cx={Math.cos(angle) * 7}
                              cy={Math.sin(angle) * 7}
                              r="1.6"
                              fill="#e3ba69"
                            />
                          )
                        })}
                      </>
                    )
                  : (
                      <>
                        <circle cx="0" cy="0" r="31" fill={flower.shade} opacity=".5" transform="translate(3 4)" />
                        {Array.from({ length: 20 }, (_, petal) => (
                          <path
                            key={`outer-${petal}`}
                            d="M-6 2 C-12-8-13-19-8-25 C-6-30-3-29 0-36 C3-29 6-30 8-25 C13-19 12-8 6 2Z"
                            fill={flower.color}
                            stroke={flower.shade}
                            strokeWidth="1"
                            strokeLinejoin="round"
                            transform={`rotate(${petal * 18})`}
                          />
                        ))}
                        {Array.from({ length: 17 }, (_, petal) => (
                          <path
                            key={`middle-${petal}`}
                            d="M-6 2 C-12-8-13-19-8-25 C-6-30-3-29 0-36 C3-29 6-30 8-25 C13-19 12-8 6 2Z"
                            fill={flower.color}
                            stroke="#fff0e7"
                            strokeWidth="1"
                            strokeLinejoin="round"
                            transform={`rotate(${petal * (360 / 17) + 8}) scale(.78)`}
                          />
                        ))}
                        {Array.from({ length: 14 }, (_, petal) => (
                          <path
                            key={`inner-${petal}`}
                            d="M-5 1 C-10-6-10-14-6-19 C-4-23-2-22 0-28 C2-22 4-23 6-19 C10-14 10-6 5 1Z"
                            fill="#f8d1cd"
                            stroke="#fff0e7"
                            strokeWidth="1"
                            strokeLinejoin="round"
                            transform={`rotate(${petal * (360 / 14) + 13}) scale(.58)`}
                          />
                        ))}
                        <circle cx="0" cy="0" r="5" fill={flower.shade} />
                        <circle cx="-1.5" cy="-2" r="1.5" fill="#fff0e7" opacity=".8" />
                      </>
                    )}
              </motion.g>
            </g>
          ))}

          <path d="M184 211 Q300 258 416 211" fill="none" stroke="#fff8ed" strokeWidth="3" opacity=".82" />
        </motion.svg>

        {[0, 1, 2, 3, 4, 5].map((sparkle) => (
          <motion.span
            className={`bouquet-sparkle bouquet-sparkle-${sparkle + 1}`}
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
      </motion