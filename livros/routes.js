import express from "express"
// import { livro, idGen } from "./array.js"

let livro = []
let idGen = 1000

const routesBook = express.Router()

routesBook.get('/livros', (req, res) => {
    return res.send(livro)
})

routesBook.get('/livros/:id', (req, res) => {
    const { id } = req.params
    const livrosFind = livro.find((element) => {
        if(element.id === parseInt(id)){
            return element
        }
    })
    return res.send(livrosFind)
})

routesBook.post('/livros', (req, res) => {
    const novoLivro = 
        {
        'title': req.body.title,
        'author': req.body.author,
        'year': req.body.year,
        'genre': req.body.genre,
        'id': idGen
        }
    idGen++
    livro.push(novoLivro)
    return res.status(201).send('livro registrado!')
})

routesBook.put('/livros/:id', (req, res) => {
    const { id } = req.params
    livro.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.title = update.title
            element.author = update.author
            element.year = update.year
            element.genre = update.genre
            return res.send("livro editado com sucesso!")
        }
    })
    return res.send("livro não encontrado!")
})

routesBook.delete('/livros/:id', (req, res) => {
    const { id } = req.params
    const livrosFind = livro.findIndex((element) => element.id == id)

    if(livrosFind !== -1){
        livro.splice(livrosFind, 1)
        return res.send('livro removido!')
    }
    return res.send("livro não encontrado")
})

export { routesBook }