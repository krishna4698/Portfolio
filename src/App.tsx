import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      hello 
      <Navbar/>
      <Project/>
    </div>
  )
}

export default App
