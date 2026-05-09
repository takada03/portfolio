import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'
import Creed from './pages/Creed'
import Library from './pages/Library'
import StudyPractice from './pages/StudyPractice'
import LessonStages from './pages/LessonStages'
import Navbar from './components/Navbar'
import ContactsPage from './pages/ContactsPage'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import VideoPage from './pages/VideoPage'
import CustomCursor from './components/CustomCursor'
import TeachingPractice from './pages/TeachingPractice'
import Prediploma from './pages/Prediploma'
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
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/creed" element={<Creed />} />
          <Route path="/library" element={<Library />} />
          <Route path="/study-practice" element={<StudyPractice />} />
          <Route path="/lesson-stages" element={<LessonStages />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/teaching-practice" element={<TeachingPractice />} />
          <Route path="/prediploma" element={<Prediploma />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050505] text-white min-h-screen overflow-hidden">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full" />
        </div>

        <Navbar />
<CustomCursor />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}