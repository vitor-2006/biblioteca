import express from "express"
import { livro } from "../livros/routes.js"
import { estudante } from "../estudantes/routes.js"

let aluguel = []
let idGen = 1

const routesAluguel= express.Router()

routesAluguel.get('/alugueis', (req, res) => {
    if(aluguel.length === 0){
        return res.status(404).send("nenhum aluguel registrado!")
    }
    return res.status(201).send(aluguel)
})

function verificarID(id, arrayTodos){
    const indexFind = arrayTodos.findIndex(element => element.id === parseInt(id))
    if(indexFind === -1){
        return false
    }
    return true
}

function verificarData(data) {
    // Verifica se a data foi fornecida
    if (!data) {
        return false;
    }

    const dataArray = data.split("-");

    // Garante que a data tem 3 partes (ano, mês, dia)
    if (dataArray.length !== 3) {
        return false;
    }

    const [ano, mes, dia] = dataArray;

    // Valida o ano: deve ter 4 dígitos e ser um número
    if (ano.length !== 4 || isNaN(parseInt(ano))) {
        return false;
    }
    // Valida o mês: deve ter 1 ou 2 dígitos e ser um número
    if (mes.length > 2 || mes.length === 0 || isNaN(parseInt(mes))) {
        return false;
    }
    // Valida o dia: deve ter 1 ou 2 dígitos e ser um número
    if (dia.length > 2 || dia.length === 0 || isNaN(parseInt(dia))) {
        return false;
    }

    // Se todas as verificações passaram, a data tem um formato válido
    return true;
}

routesAluguel.post('/alugueis', (req, res) => {
    const livroFind = verificarID(req.body.idLivro, livro)
    if(!livroFind){
        return res.status(404).send("livro não encontrado")
    }

    const estudanteFind = verificarID(req.body.idEstudante, estudante)
    if(!estudanteFind){
        return res.status(404).send("estudante não encontrado")
    }

    const dataAluguelFind = verificarData(req.body.dataAluguel)
    if(!dataAluguelFind){
        return res.status(400).send("data de aluguel inválida!")
    }

    const dataDevolucaoFind = verificarData(req.body.dataDevolucao)
    if(!dataDevolucaoFind) {
        return res.status(400).send("data de devolução inválida!")
    }

    const novoAluguel = 
        {
        'idLivro': req.body.idLivro,
        'idEstudante': req.body.idEstudante,
        'dataAluguel': req.body.dataAluguel,
        'dataDevolucao': req.body.dataDevolucao,
        'id': idGen
        }
    idGen++
    aluguel.push(novoAluguel)
    return res.status(200).send('Aluguel registrado!')
})

routesAluguel.put('/alugueis/:id', (req, res) => {
    const { id } = req.params

    const livroFind = verificarID(req.body.idLivro, livro)
    if(!livroFind){
        return res.status(404).send("livro não encontrado")
    }

    const estudanteFind = verificarID(req.body.idEstudante, estudante)
    if(!estudanteFind){
        return res.status(404).send("estudante não encontrado")
    }

    const dataAluguelFind = verificarData(req.body.dataAluguel)
    if(!dataAluguelFind){
        return res.status(400).send("data de aluguel inválida!")
    }

    const dataDevolucaoFind = verificarData(req.body.dataDevolucao)
    if(!dataDevolucaoFind) {
        return res.status(400).send("data de devolução inválida!")
    }

    aluguel.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.idLivro= update.idLivro
            element.idEstudante = update.idEstudante
            element.dataAluguel = update.dataAluguel
            element.dataDevolucao= update.dataDevolucao
            return res.status(200).send("Aluguel editado com sucesso!")
        }
    })
    return res.status(404).send("Aluguel não encontrado!")
})

routesAluguel.delete('/alugueis/:id', (req, res) => {
    const { id } = req.params
    const aluguelFind = aluguel.findIndex((element) => element.id == id)

    if(aluguelFind !== -1){
        aluguel.splice(aluguelFind, 1)
        return res.status(200).send('Aluguel removido!')
    }
    return res.status(404).send("Aluguel não encontrado")
})

routesAluguel.get('/alugueis/livro/', (req, res) => {
    const { idLivro } = req.query
    if(idLivro.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const aluguelFind = aluguel.find((element) => {
        if(parseInt(element.idLivro) === parseInt(idLivro)){
            return element
        }
    })
    if(!aluguelFind){
        return res.status(404).send("id do livro não encontrado!")
    }
    return res.status(201).send(aluguelFind)
})

routesAluguel.get('/alugueis/estudante/', (req, res) => {
    const { idEstudante } = req.query
    if(idEstudante.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const aluguelFind = aluguel.find((element) => {
        if(parseInt(element.idEstudante) === parseInt(idEstudante)){
            return element
        }
    })
    if(!aluguelFind){
        return res.status(404).send("id do estudante não encontrado!")
    }
    return res.status(200).send(aluguelFind)
})

routesAluguel.get('/alugueis/data/', (req, res) => {
    const { dataAluguel } = req.query
    if(dataAluguel.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const aluguelFind = aluguel.find((element) => {
        if(element.dataAluguel.toLowerCase().trim() === dataAluguel.toLowerCase().trim()){
            return element
        }
    })
    if(!aluguelFind){
        return res.status(404).send("data do aluguel não encontrado!")
    }
    return res.status(201).send(aluguelFind)
})

export { routesAluguel }