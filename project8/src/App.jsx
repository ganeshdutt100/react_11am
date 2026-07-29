import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Code1 from '../component/Code1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Code1/>
    </>
  )
}

export default App
