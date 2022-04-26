import "./toggle.css"

import React, {
  useEffect,
  useRef,
  useState,
} from "react"

const ToggleMobile = ({ setTheme }) => {
  const lightMode = "light-mode"
  const darkMode = "dark-mode"
  const [title, setTitle] = useState("Change to dark theme")
  const [isChecked, setIsChecked] = useState(true)
  let theme = useRef()

  useEffect(() => {
    typeof window !== "undefined" &&
      (theme.current = document
        .querySelector("body")
        .classList.contains("dark-mode")
        ? "dark-mode"
        : "light-mode")
    if (theme.current === darkMode) {
      setTitle("Change to light theme")
      setIsChecked(false)
    } else {
      setTitle("Change to dark theme")
      setIsChecked(true)
    }
  }, [])

  const switchTheme = () => {
    if (theme.current === "dark-mode") {
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
    <label
      className="d-block d-lg-none toggle-label toggle-label-mb"
      htmlFor="toggleThemeMobile"
      title={title}
    >
      <div className="d-flex flex-row align-items-center justify-content-start">
        <span id="toggle-title">{title}</span>
        <div className="toggle">
          <label className="visually-hidden" htmlFor="toggleThemeMobile">
            {title}
          </label>
          <input
            id="toggleThemeMobile"
            type="checkbox"
            checked={isChecked}
            className="toggle-state toggleState"
            onChange={switchTheme}
          />
          <div className="indicator2"></div>
          <div className="indicator"></div>
        </div>
      </div>
    </label>
  )
}

export default ToggleMobile
