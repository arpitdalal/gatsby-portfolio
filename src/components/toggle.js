import React, { useState, useEffect } from 'react'

import './toggle.css'

const Toggle = () => {
  const lightMode = "light-mode"
  const darkMode = "dark-mode"
  const [title, setTitle] = useState("Change to light theme")
  const [isChecked, setIsChecked] = useState(false)

  let theme = typeof window !== 'undefined' && localStorage.getItem("theme")

  useEffect(() => {
    if(theme === darkMode) {
      setTitle("Change to light theme")
      setIsChecked(false)
    } else {
      setTitle("Change to dark theme")
      setIsChecked(true)
    }
  }, [title, isChecked, theme])

  const switchTheme = () => {
    if(theme === darkMode) {
      document.querySelector('.main').classList.replace(darkMode, lightMode)
      setIsChecked(true)
      localStorage.setItem("theme", "light-mode")
      setTitle("Change to dark theme")
      theme = lightMode
    } else {
      document.querySelector('.main').classList.replace(lightMode, darkMode)
      setIsChecked(false)
      setTitle("Change to light theme")
      localStorage.setItem("theme", "dark-mode")
      theme = darkMode
    }
  }

  return (
    <>
      <label className='d-none d-lg-block toggle-label toggle-label-dk' title={title}>
        <div className='toggle'>
          <label className="sr-only" htmlFor="toggleThemeDesktop">{title}</label>
          <input id="toggleThemeDesktop" type='checkbox' checked={isChecked} className='toggle-state toggleState' onChange={switchTheme} />
          <div className='indicator2' />
          <div className='indicator' />
        </div>
      </label>
      <label className="d-block d-lg-none toggle-label toggle-label-mb" title={title}>
        <div className="d-flex flex-row align-items-center justify-content-start">
          <span id="toggle-title">{title}</span>
          <div className="toggle">
            <label className="sr-only" htmlFor="toggleThemeMobile">{title}</label>
            <input id="toggleThemeMobile" type="checkbox" checked={isChecked} className="toggle-state toggleState" onChange={switchTheme} />
            <div className="indicator2"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </label>
      </>
  )
}

export default Toggle
