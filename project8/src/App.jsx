import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Code1 from '../component/Code1'
import Code2 from '../component/Code2'
import { Code3 } from '../component/Code3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Code1/> */}
      {/* <Code2/> */}
      <Code3/>
    </>
  )
}

export default App
