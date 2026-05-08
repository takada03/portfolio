import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-black tracking-[0.4em]"
      >
        ELIZAVETA
      </motion.h1>
    </motion.div>
  )
}