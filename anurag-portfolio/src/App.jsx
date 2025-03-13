import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
   </div>
  )
}

export default App
