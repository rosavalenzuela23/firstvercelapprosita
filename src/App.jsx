import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')

  function actualizarNombre() {
    const element = document.querySelector("#amosai");
    if (!element) 
      throw new Error("El elemeno no existe");

    setNombre(element.value)
  }

  return (
    <>
      <p>
        {
          nombre || "Sin nombre aun"
        }
      </p>
    
      <input type="text" id="amosai"/>
      <button onClick={actualizarNombre}>
        Actualizar nombre
      </button>
    </>
  )
}

export default App
