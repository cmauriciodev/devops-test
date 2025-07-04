import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() =>  {  
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json()) 
      .then(data => setMessage(data.message)) 
      .catch(() => setMessage("Error al conectar con backend"));
  }, []); 
 
  return ( 
    <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
      <p>Hola desde React</p> 
      <p>Backend dice: {message}</p> 
    </div> 
  ); 
}

export default App;
