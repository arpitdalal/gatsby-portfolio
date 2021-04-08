import React, { useState, useEffect, useRef } from 'react'

import './toggle.css'

const Toggle = ({ setTheme }) => {
  const lightMode = "light-mode"
  const darkMode = "dark-mode"
  const [title, setTitle] = useState("Change to dark theme")
  const [isChecked, setIsChecked] = useState(true)
  let theme = useRef();

  useEffect(() => {
    typeof window !== 'undefined' &&
      (theme.current = document.querySelector('body').classList.contains('dark-mode') ? 'dark-mode' : 'light-mode')
    if(theme.current === darkMode) {
      setTitle("Change to light theme")
      setIsChecked(false)
    } else {
      setTitle("Change to dark theme")
      setIsChecked(true)
    }
  }, [])

  const switchTheme = () => {
    if(theme.current === 'dark-mode') {
      setIsChecked(true)
      setTitle("Change to dark theme")
      localStorage.setItem("theme", "light-mode")
      theme.current = lightMode
      setTheme(theme.current)
    } else {
      setIsChecked(false)
      setTitle("Change to light theme")
      localStorage.setItem("theme", "dark-mode")
      theme.current = darkMode
      setTheme(theme.current)
    }
  }

  return (
    <label className='d-none d-lg-block toggle-label toggle-label-dk' htmlFor="toggleThemeDesktop" title={title}>
      <div className='toggle'>
        <label className="sr-only" htmlFor="toggleThemeDesktop">{title}</label>
        <input id="toggleThemeDesktop" type='checkbox' checked={isChecked} className='toggle-state toggleState' onChange={switchTheme} />
        <div className='indicator2' />
        <div className='indicator' />
      </div>
    </label>
  )
}

export default Toggle
