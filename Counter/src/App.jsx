import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
function App() {
  let [counter, setCount] = useState(0)
  const addValue = () => {
     setCount(counter+1)
  }
  const removeValue = () => {
    setCount(counter-1)
  }
  return (
    <>
      <h1>Koustubh and React</h1>
      <h3>Counter Value is : {counter}</h3>
      <button type="button" onClick={addValue}>Add Value</button>
      <br />
      <button type="button" onClick={removeValue}>Renove Value</button>
    </>
  )
}

export default App
