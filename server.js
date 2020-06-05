const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirnameame + '/dist/appgit'));

app.get('/*', (req,res) => {
    res.sendFile(__dirnameame + '/dist/appgit/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado com sucesso na porta ' + PORT);
})