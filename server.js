const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(_dirname + ''/dist/));

app.get('/*', (req,res) => {
    res.sendFile(_dirname + '/dist//index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado com sucesso na porta ' + PORT);
})