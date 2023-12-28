import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeBrn'
import Card from './components/Crard'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  const [ThemeMode, setThemeMode] = useState("light")

  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }

  useEffect(() => {
const html = document.querySelector("html")
  html.classList.remove("light", "dark")
  html.classList.add(ThemeMode)

   
  }, [ThemeMode])
  

  return (
    <>
    <ThemeProvider value={{ThemeMode, darkTheme, lightTheme}}>
    {/* <p>pitam das</p> */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>

    </>
  );
}

export default App
