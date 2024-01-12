const path = require('path');
const express = require('express');
const app = express();
const port = 3030;

// Configs
app.use(express.static('public'))

// Routes
app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/index.html'));
})

// Server
app.listen(port,() => console.log(`http://localhost:${port}`));