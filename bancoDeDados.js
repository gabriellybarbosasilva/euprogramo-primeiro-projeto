const mongoose = require('mongoose')
require('dotenv').config()

//async conexão assincrona para o javascript dar uma resposta enquanto o banco de dados está buscando informações no banco
async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou.')

        //await - esperar
        await mongoose.connect(process.env.MONGO_URL)
    
        console.log('Conexão com o banco de dados foi feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados
