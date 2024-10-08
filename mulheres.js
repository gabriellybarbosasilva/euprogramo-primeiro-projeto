const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Gabrielly Barbosa',
        imagem: 'https://avatars.githubusercontent.com/u/175414447?v=4',
        minibio: 'Iniciante em programação.'
    },
    {
        nome: 'Fei Fei Li',
        imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQGMvj8xNAcZHg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589346710911?e=1733961600&v=beta&t=QTeg6Gczn7ZIhwCERkKY-g22LweDWsTEg5ymhKljUiY',
        minibio: 'cientista de dados renomada'
    },
    {
        nome: 'Mariana Rufino',
        imagem: 'https://media.licdn.com/dms/image/v2/D4E03AQFoV3cHnXhNMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712594544256?e=1733961600&v=beta&t=zAnDziwJWHcb9qbeBfEeVfpxuIScTA1PZvV67AH6sc4',
        minibio: 'cientista de dados brasileira renomada.'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use('/mulheres', mostraMulheres)
app.listen(porta, mostraPorta)