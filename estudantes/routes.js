import express from "express"
// import { estudante, idGen } from "./array.js"
let estudante = []
let idGen = 10000

const routesEstudante = express.Router()

routesEstudante.get('/estudantes', (req, res) => {
    if(estudante.length === 0){
        return res.status(404).send("nenhum estudante registrado!")
    }
    return res.status(201).send(estudante)
})

routesEstudante.post('/estudantes', (req, res) => {
    const novoEstudante = 
        {
        'nome': req.body.nome,
        'matricula': req.body.matricula,
        'curso': req.body.curso,
        'ano': req.body.ano,
        'id': idGen
        }
    idGen++
    estudante.push(novoEstudante)
    return res.status(201).send('Estudante registrado!')
})

routesEstudante.put('/estudantes/:id', (req, res) => {
    const { id } = req.params
    estudante.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.nome = update.nome
            element.matricula = update.matricula
            element.curso = update.curso
            element.ano = update.ano
            return res.status(201).send("estudante editado com sucesso!")
        }
    })
    return res.status(404).send("estudante não encontrado!")
})

routesEstudante.delete('/estudantes/:id', (req, res) => {
    const { id } = req.params
    const estudanteFind = estudante.findIndex((element) => element.id == id)

    if(estudanteFind !== -1){
        estudante.splice(estudanteFind, 1)
        return res.status(201).send('estudante removido!')
    }
    return res.status(404).send("estudante não encontrado")
})

routesEstudante.get('/estudantes/', (req, res) => {
    const { nome } = req.query
    if(nome.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const estudanteFind = estudante.find((element) => {
        if(element.nome.toLowerCase().trim() === nome.toLowerCase().trim()){
            return element
        }
    })
    if(!estudanteFind){
        return res.status(404).send("nome não encontrado!")
    }
    return res.status(201).send(estudanteFind)
})

routesEstudante.get('/estudantes/', (req, res) => {
    const { matricula } = req.query
    if(matricula.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const estudanteFind = estudante.find((element) => {
        if(parseInt(element.matricula) === parseInt(matricula)){
            return element
        }
    })
    if(!estudanteFind){
        return res.status(404).send("matricula não encontrada!")
    }
    return res.status(201).send(estudanteFind)
})

routesEstudante.get('/estudantes/', (req, res) => {
    const { curso } = req.query
    if(curso.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const estudanteFind = estudante.find((element) => {
        if(element.curso.toLowerCase().trim() === curso.toLowerCase().trim()){
            return element
        }
    })
    if(!estudanteFind){
        return res.status(404).send("curso não encontrado!")
    }
    return res.status(201).send(estudanteFind)
})

export { routesEstudante, estudante }