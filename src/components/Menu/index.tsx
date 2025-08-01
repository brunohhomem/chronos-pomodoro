import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'
    return storageTheme
  })

  const nextThemeIcon = {
    'dark': <SunIcon />,
    'light': <MoonIcon />
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a href="/" className={styles.menuLink} aria-label='home' title='Home'>
        <HouseIcon />
      </a>
      <a href="#" className={styles.menuLink} aria-label='histórico' title='Histórico'>
        <HistoryIcon />
      </a>
      <a href="#" className={styles.menuLink} aria-label='configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a href="#" className={styles.menuLink} aria-label='tema' title='Mudar Tema' onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  )
}