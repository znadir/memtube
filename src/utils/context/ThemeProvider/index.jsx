import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme')
  const getOSTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const defaultTheme = savedTheme || getOSTheme

  const [theme, setTheme] = useState(defaultTheme)
  const isDarkMode = theme === 'dark'

  /* Save in local storage the theme every render */
  useEffect(() => {
    localStorage.setItem('theme', theme)
  })

  function toggleTheme() {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('light')
        break
      default:
        throw new Error('The theme value provided is incorrect')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
