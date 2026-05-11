import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Creed from './pages/Creed'
import Library from './pages/Library'
import StudyPractice from './pages/StudyPractice'
import LessonStages from './pages/LessonStages'
import TeachingPractice from './pages/TeachingPractice'
import Contacts from './pages/Contacts'
import PreDiplomaPractice from './pages/PreDiplomaPractice'

import CustomCursor from './components/CustomCursor'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >

        <Routes location={location}>

          <Route path="/" element={<Home />} />

          <Route path="/creed" element={<Creed />} />

          <Route path="/library" element={<Library />} />

          <Route
            path="/study-practice"
            element={<StudyPractice />}
          />

          <Route
            path="/lesson-stages"
            element={<LessonStages />}
          />

          <Route
            path="/teaching-practice"
            element={<TeachingPractice />}
          />
          <Route path="/pre-diploma" element={<PreDiplomaPractice />} />

          <Route path="/contacts" element={<Contacts />} />

        </Routes>

      </motion.div>

    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>

      <CustomCursor />

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

        <div className="fixed inset-0 -z-10 overflow-hidden">

          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full" />

          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

        </div>

        <Navbar />

        <AnimatedRoutes />

      </div>

    </BrowserRouter>
  )
} 