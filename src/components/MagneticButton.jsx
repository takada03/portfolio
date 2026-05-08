import { motion } from 'framer-motion'

export default function MagneticButton({ children, secondary }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={
        secondary
          ? 'px-8 py-4 rounded-full border border-white/10 hover:border-white transition duration-300 bg-white/5 backdrop-blur-xl'
          : 'px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 transition duration-300 shadow-2xl shadow-indigo-500/30'
      }
    >
      {children}
    </motion.button>
  )
}