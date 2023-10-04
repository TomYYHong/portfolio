import { useState } from 'react'
import self_logo from './assets/hello.png'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div className="top">
        <img src={self_logo} className="logo self" alt="Self logo" />
        <p className='name'>Tom Hong</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
