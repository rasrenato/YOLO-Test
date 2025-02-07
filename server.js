require('dotenv').config(); // Carrega as variáveis do .env

const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Usa a porta definida no .env ou 3000 por padrão

app.get('/', (req, res) => {
    res.send('Hello, World! 🚀');
});

app.listen(port, () => {
    console.log(`✅ Servidor rodando em http://localhost:${port}`);
});