
import './App.css'
import Footers from './components/Footers'
import Footer from './components/Footers'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Skill from './Pages/Skill'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footers/>
    
    </div>
  )
}

export default App
