import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
      const [name, setName] = useState("");

      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Please enter your name before submit`);
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Enter your name <br></br>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label><br></br>
          <input type="submit" />
        </form>
  )
}

export default App
