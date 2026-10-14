import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import { MotionConfig } from 'framer-motion'

export default function App() {
  return (
    <MotionConfig reducedMotion="user"><LanguageProvider>
      <a className="pm-skip" href="#main-content">Saltar al contenido / Skip to content</a>
      <Home />
    </LanguageProvider></MotionConfig>
  )
}
