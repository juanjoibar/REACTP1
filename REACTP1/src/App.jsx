import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const data = [{nombre:'ford'},{nombre:'fiat'},{nombre:'Renault'}]
function App() {
  const [count, setCount] = useState(0)
  const myDatalista = data.map((auto)=>{ return (<h3>{auto.nombre}</h3>)})

  return (
    <>
     
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          {data.map((auto)=>{
            return(<h3>{auto.nombre}</h3>)
          })}
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
    </>
  )
}

export default App
