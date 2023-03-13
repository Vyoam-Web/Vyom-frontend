import { useState } from 'react'
import './App.css'
import ExpertiseComp from './components/expetise/ExpertiseComp'
import NavbarComp from './components/Navbar/NavbarComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarComp />
      <ExpertiseComp/>
    </div>
  )
}

export default App
