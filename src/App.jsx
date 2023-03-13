import { useState } from 'react'
import './App.css'
import NavbarComp from './components/Navbar/NavbarComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarComp />
    </div>
  )
}

export default App
