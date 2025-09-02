import express from "express"
import { estudante, idGen } from "./array.js"

const routesEstudante = express.Router()

routesEstudante.get('/estudantes', (req, res) => {
    return res.send(estudante)
})

routesEstudante.get('/estudantes/:id', (req, res) => {
    const { id } = req.params
    const estudanteFind = estudante.find((element) => {
        if(element.id === parseInt(id)){
            return element
        }
    })
    return res.send(estudanteFind)
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

routesEstudante.put('/estudante/:id', (req, res) => {
    const { id } = req.params
    estudante.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.nome = update.nome
            element.matricula = update.matricula
            element.curso = update.curso
            element.ano = update.ano
            return res.send("estudante editado com sucesso!")
        }
    })
    return res.send("estudante não encontrado!")
})

routesEstudante.delete('/livros/:id', (req, res) => {
    const { id } = req.params
    const estudanteFind = estudante.findIndex((element) => element.id == id)

    if(estudanteFind !== -1){
        estudante.splice(estudanteFind, 1)
        return res.send('estudante removido!')
    }
    return res.send("estudante não encontrado")
})

export { routesEstudante }