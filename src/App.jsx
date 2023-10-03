import { useState } from 'react'
import './App.css'
import '../dist/output.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav>
      <div className="logog">
        <b className='font-black text-3xl'>Logo</b>
      </div>
     </nav>
    </>
  )
}

export default App
