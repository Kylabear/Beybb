import { AnimatePresence, motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="toast"
          role="status"
          initial={{ opacity: 0, y: 12, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 340, damping: 24 }}
        >
          <Heart size={16} fill="currentColor" aria-hidden="true" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
