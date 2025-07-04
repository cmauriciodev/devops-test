const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors'); 
 
app.use(cors()); 
  
app.get("/api", (req, res) => {   
  res.json({ message: "Hola desde Express!" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});