// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve os arquivos da build
app.use(express.static(path.join(__dirname, 'dist')));

// Rota fallback para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
