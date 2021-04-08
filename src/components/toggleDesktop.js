import React, { useState, useEffect, useRef } from 'react'

import './toggle.css'

const Toggle = ({ setTheme }) => {
  const [title, setTitle] = useState("Change to dark theme")
  const [isChecked, setIsChecked] = useState(true)
  let theme = useRef();

  useEffect(() => {
    if(typeof window !== 'undefined')
      if(localStorage.getItem('theme'))
        theme.current = localStorage.getItem('theme') === 'dark-mode' ? 'dark-mode' : 'light-mode'
    
    if(theme.current === 'dark-mode') {
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
      theme.current = 'light-mode'
      setTheme(theme.current)
    } else {
      setIsChecked(false)
      setTitle("Change to light theme")
      localStorage.setItem("theme", "dark-mode")
      theme.current = 'dark-mode'
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
