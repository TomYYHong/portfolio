import { useState } from 'react'
import self_logo from './assets/hello.png'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
    <div className='banner'>
    <div className='topelements'>
        <div className="top">
          <img src={self_logo} className="logo self" alt="Self logo" />
          <p className='name'>Tom Hong</p> <br />
        </div>
        <div className='self-intro'>
        <p> Software developer</p>
        </div>
    </div>
    </div>
    <div className='tech_stack'>
        <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */
        
        }
        <p>
           <code>code part</code> 
        </p>
        </div>
      </div>
   
    </>
  )
}

export default App
