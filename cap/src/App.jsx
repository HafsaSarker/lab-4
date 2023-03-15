import { useState } from 'react'
import './App.css'
import APIform from './Components/APIform';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    width: "",
    height: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name] : value.trim()
    }))
  }

  const onSubmit = () => {
    
  }
  
  return (
    <div className="App">
      <h1>Build Your Own Screenshot! 📸</h1>

      <APIform 
        inputs={inputs}
        handleChange={(handleChange)}
        onSubmit={onsubmit}
      />
    </div>
  )
}

export default App
