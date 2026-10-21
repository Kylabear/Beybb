import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const flowers = [
  { x: 300, y: 129, size: 1.16, color: '#f7c94e', shade: '#d89a32', center: '#6e4930', delay: 0.12, sunflower: true, rose: false },
  { x: 250, y: 145, size: 0.78, color: '#ed8eaa', shade: '#bb5576', center: '#ffd5d9', delay: 0.2, sunflower: false, rose: false },
  { x: 350, y: 145, size: 0.82, color: '#d84b7c', shade: '#9e315b', center: '#f7afc0', delay: 0.3, sunflower: false, rose: false },
  { x: 180, y: 166, size: 0.72, color: '#f7c94e', shade: '#d89a32', center: '#6e4930', delay: 0.38, sunflower: true, rose: false },
  { x: 217, y: 174, size: 0.76, color: '#c92e43', shade: '#81233a', center: '#f08083', delay: 0.45, sunflower: false, rose: true },
  { x: 278, y: 177, size: 0.68, color: '#f4dfb7', shade: '#c99d61', center: '#ffefd4', delay: 0.52, sunflower: false, rose: false },
  { x: 324, y: 176, size: 0.72, color: '#f2b8c5', shade: '#c9728d', center: '#ffe1df', delay: 0.6, sunflower: false, rose: false },
  { x: 383, y: 174, size: 0.76, color: '#c92e43', shade: '#81233a', center: '#f08083', delay: 0.66, sunflower: false, rose: true },
  { x: 420, y: 166, size: 0.72, color: '#f7c94e', shade: '#d89a32', center: '#6e4930', delay: 0.72, sunflower: true, rose: false },
  { x: 193, y: 207, size: 0.68, color: '#f4f0d0', shade: '#a7b477', center: '#fff7df', delay: 0.78, sunflower: false, rose: false },
  { x: 237, y: 207, size: 0.72, color: '#d32651', shade: '#861b3c', center: '#f37d9b', delay: 0.84, sunflower: false, rose: true },
  { x: 282, y: 210, size: 0.69, color: '#f2cf62', shade: '#bc8c3d', center: '#fff0b5', delay: 0.9, sunflower: false, rose: false },
  { x: 329, y: 209, size: 0.7, color: '#f6a6b8', shade: '#bf637f', center: '#ffe2e3', delay: 0.96, sunflower: false, rose: false },
  { x: 374, y: 207, size: 0.72, color: '#c92e43', shade: '#81233a', center: '#f08083', delay: 1.02, sunflower: false, rose: true },
  { x: 411, y: 207, size: 0.68, color: '#e5efb1', shade: '#9bb36a', center: '#f9f4dc', delay: 1.08, sunflower: false, rose: false },
  { x: 153, y: 204, size: 0.56, color: '#f4dfb7', shade: '#c99d61', center: '#ffefd4', delay: 1.15, sunflower: false, rose: false },
  { x: 447, y: 204, size: 0.56, color: '#f2b8c5', shade: '#c9728d', center: '#ffe1df', delay: 1.22, sunflower: false, rose: false },
  { x: 215, y: 232, size: 0.53, color: '#f6a6b8', shade: '#bf637f', center: '#ffe2e3', delay: 1.28, sunflower: false, rose: false },
  { x: 265, y: 236, size: 0.52, color: '#d84b7c', shade: '#9e315b', center: '#f7afc0', delay: 1.34, sunflower: false, rose: true },
  { x: 335, y: 236, size: 0.52, color: '#f4dfb7', shade: '#c99d61', center: '#ffefd4', delay: 1.4, sunflower: false, rose: false },
  { x: 385, y: 232, size: 0.53, color: '#d32651', shade: '#861b3c', center: '#f37d9b', delay: 1.46, sunflower: false, rose: true },
]

const stems = flowers.map(({ x, y }) => (
  `M${x} ${y + 12} C${x + (300 - x) * 0.2} ${y + 70} ${285 + (x - 300) * 0.16} 279 ${296 + (x - 300) * 0.04} 380`
))

const leaves = [
  { x: 168, y: 224, rotate: -47, delay: 0.2 },
  { x: 432, y: 224, rotate: 47, delay: 0.4 },
  { x: 216, y: 244, rotate: -38, delay: 0.5 },
  { x: 384, y: 244, rotate: 38, delay: 0.65 },
  { x: 265, y: 260, rotate: -26, delay: 0.8 },
  { x: 335, y: 260, rotate: 26, delay: 0.95 },
]

const fillerSprigs = [
  { x: 145, y: 234, scale: 0.88, rotate: -10 },
  { x: 455, y: 234, scale: 0.88, rotate: 10 },
  { x: 229, y: 227, scale: 0.62, rotate: -8 },
  { x: 371, y: 227, scale: 0.62, rotate: 8 },
]

const fillerBuds = [
  [-19, -78], [-8, -68], [6, -78], [19, -65],
  [-26, -51], [-12, -47], [3, -57], [20, -45],
  [-17, -30], [0, -37], [15, -26],
]

export function BouquetAnimation() {
  const reduceMotion = useReducedMotion()

  return (
    <>
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
        <p>A bouquet of flowers, wrapped up just for you.</p>
        
      </motion.div>

      <div
        className="bouquet-canvas"
        role="img"
        aria-label="A three-dimensional mixed bouquet with carnations, roses, three sunflowers, baby's-breath fillers and gold wrapping"
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
          viewBox="0 0 600 470"
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
              <stop offset="0" stopColor="#fff0a9" />
              <stop offset=".45" stopColor="#e6a62f" />
              <stop offset="1" stopColor="#bd711e" />
            </linearGradient>
            <linearGradient id="bouquet-paper-fold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#a96428" />
              <stop offset=".5" stopColor="#ffe69a" />
              <stop offset="1" stopColor="#b96a20" />
            </linearGradient>
            <linearGradient id="bouquet-leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#b3c88b" />
              <stop offset=".5" stopColor="#6f965e" />
              <stop offset="1" stopColor="#3e694d" />
            </linearGradient>
            <radialGradient id="bouquet-center">
              <stop offset="0" stopColor="#fff2b8" />
              <stop offset=".72" stopColor="#e8b95f" />
              <stop offset="1" stopColor="#c78d45" />
            </radialGradient>
            <pattern id="burlap-weave" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 1H8 M0 5H8 M1 0V8 M5 0V8" stroke="#9a693b" strokeWidth=".8" opacity=".58" />
              <path d="M0 3H8 M3 0V8" stroke="#ffe3ad" strokeWidth=".55" opacity=".62" />
            </pattern>
          </defs>

          <ellipse cx="300" cy="425" rx="128" ry="20" fill="#79583a" opacity=".15" />

          <g className="bouquet-stems" fill="none" stroke="#668166" strokeLinecap="round">
            {stems.map((stem, index) => (
              <motion.path
                key={stem}
                d={stem}
                strokeWidth={Math.abs((flowers[index]?.x ?? 300) - 300) < 1 ? 5 : 3.5}
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
            d="M143 297 Q300 340 457 297 L366 414 Q301 454 234 414Z"
            fill="url(#bouquet-paper)"
            stroke="#b57527"
            strokeWidth="2"
          />
          <path d="M151 300 Q211 324 279 331 L234 414 Q187 389 151 300Z" fill="#ffd86b" opacity=".78" />
          <path d="M449 300 Q389 324 321 331 L366 414 Q413 389 449 300Z" fill="#c98227" opacity=".42" />
          <path d="M188 313 Q238 332 300 339 Q362 332 412 313 L359 399 Q300 428 241 399Z" fill="url(#bouquet-paper-fold)" opacity=".74" />
          <path d="M159 306 Q300 350 441 306 L359 399 Q300 428 241 399Z" fill="none" stroke="#fff0b0" strokeWidth="3" opacity=".85" />
          <path d="M143 297 Q300 340 457 297" fill="none" stroke="#fff3c5" strokeWidth="4" strokeLinecap="round" />
          <path d="M190 318 Q255 355 267 414 M410 318 Q345 355 333 414" fill="none" stroke="#fff8d8" strokeWidth="2" opacity=".72" />
          <path d="M198 354 Q300 390 402 354 L385 391 Q300 420 215 391Z" fill="#b78855" stroke="#8c603b" strokeWidth="1.5" />
          <path d="M198 354 Q300 390 402 354 L385 391 Q300 420 215 391Z" fill="url(#burlap-weave)" opacity=".72" />

          <g className="bouquet-ribbon">
            <path d="M294 378 C261 337 218 349 242 388 C259 411 280 398 300 384Z" fill="#d99025" stroke="#a96920" strokeWidth="2.5" />
            <path d="M306 378 C339 337 382 349 358 388 C341 411 320 398 300 384Z" fill="#f5c04c" stroke="#a96920" strokeWidth="2.5" />
            <path d="M293 386 L258 440 L300 421 L310 446 L308 385Z" fill="#e4a42f" stroke="#a96920" strokeWidth="2" />
            <path d="M307 386 L342 440 L300 421 L290 446 L292 385Z" fill="#ffd66b" stroke="#a96920" strokeWidth="2" />
            <path d="M294 378 C263 354 240 363 252 385 M306 378 C337 354 360 363 348 385" fill="none" stroke="#fff0ae" strokeWidth="3" opacity=".9" />
            <ellipse cx="300" cy="384" rx="13" ry="11" fill="#f5cb66" stroke="#a96920" strokeWidth="2" />
            <path d="M294 384 Q300 374 306 384 Q300 393 294 384Z" fill="#fff0ae" />
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
                  : flower.rose
                    ? (
                        <>
                          <circle cx="0" cy="0" r="29" fill={flower.shade} opacity=".38" transform="translate(3 4)" />
                          {Array.from({ length: 10 }, (_, petal) => (
                            <ellipse
                              key={`outer-${petal}`}
                              cx="0"
                              cy="-13"
                              rx="11"
                              ry="15"
                              fill={flower.shade}
                              stroke="#f58b91"
                              strokeWidth="1.2"
                              transform={`rotate(${petal * 36})`}
                            />
                          ))}
                          {Array.from({ length: 9 }, (_, petal) => (
                            <ellipse
                              key={`middle-${petal}`}
                              cx="0"
                              cy="-9"
                              rx="8"
                              ry="12"
                              fill={flower.color}
                              stroke="#f78a96"
                              strokeWidth="1"
                              transform={`rotate(${petal * 40 + 18})`}
                            />
                          ))}
                          {Array.from({ length: 7 }, (_, petal) => (
                            <ellipse
                              key={`inner-${petal}`}
                              cx="0"
                              cy="-5"
                              rx="5.5"
                              ry="8"
                              fill={flower.center}
                              stroke="#ffd2c8"
                              strokeWidth=".8"
                              transform={`rotate(${petal * (360 / 7)})`}
                            />
                          ))}
                          <path
                            d="M-5 3 C-11-3-5-11 2-9 C9-7 6 1 0 0 C-3 0-3-4 0-5"
                            fill="none"
                            stroke={flower.shade}
                            strokeWidth="2.4"
                            strokeLinecap="round"
                          />
                          <circle cx="-2" cy="-4" r="1.5" fill="#ffd2c8" />
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
      </motion.div>
    </motion.section>
    <p>Just a Teaser for now HAHAHAHH😊</p>
    </>
  )
}
