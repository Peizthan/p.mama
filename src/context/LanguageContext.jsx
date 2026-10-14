import { createContext, useContext, useEffect, useState } from 'react'
import { es } from '../i18n/es'
import { en } from '../i18n/en'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('pm-language') === 'en' ? 'en' : 'es' } catch { return 'es' } })
  useEffect(() => { document.documentElement.lang = lang; try { localStorage.setItem('pm-language', lang) } catch { /* Language still works when storage is unavailable. */ } }, [lang])

  const t = lang === 'es' ? es : en

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ t, lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
