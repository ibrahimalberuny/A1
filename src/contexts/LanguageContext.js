import React, { useState, useEffect } from 'react'

export const languages = [
  {
    code: 'es',
    name: 'Spanish',
  },
  {
    code: 'en',
    name: 'English',
  },
]

export const LanguageContext = React.createContext('gulag')

export const LanguageProvider = ({ children }) => {
  const currentLang = 'es' //window.location.pathname.startsWith('/en/') ? 'en' : 'es'
  const [lang, setLang] = useState(currentLang)
  const [isDefaultLang, setIsDefaultLang] = useState(true)

  useEffect(() => setIsDefaultLang(lang === 'es'), [lang])

  return (
    <LanguageContext.Provider value={{ lang, isDefaultLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
