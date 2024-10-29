const express = require("express");
const router = express.Router();
const cors = require('cors');; //trazendo o pacote cors que permite consumir essa API no front-end
const conectaBancoDeDados = require('./bancoDeDados') //conextando com o arquivo bancoDeDados
conectaBancoDeDados()

const Mulher = require('./mulherModel')

const app = express();
app.use(express.json())
app.use(cors());
const porta = 3333;



async function criaMulher (request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada) //verificar se está tudo certinho
    } catch (erro) {
        console.log(erro)
    }

}

async function corrigeMulher(request, response) {

    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

        response.json(mulherAtualizadaNoBancoDeDados)
    
    } catch(erro) {
        console.log(erro)
    }

}

//DELETE
async function deletaMulher(request,response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: "Mulher deletada com sucesso"})

    } catch (erro) {
        console.log(erro)
    }

}

async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
    response.json(mulheres)
}

app.get('/mulheres', mostraMulheres)
app.post('/mulheres', criaMulher)
app.patch('/mulheres/:id', corrigeMulher)
app.delete('/mulheres/:id', deletaMulher)

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}


app.listen(porta, mostraPorta)