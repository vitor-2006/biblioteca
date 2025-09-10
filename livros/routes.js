import express from "express"
// import { livro, idGen } from "./array.js"

let livro = []
let idGen = 1000

const routesBook = express.Router()

routesBook.get('/livros', (req, res) => {
    if(livro.length === 0){
        return res.status(404).send("nenhum livro registrado!")
    }
    return res.status(201).send(livro)
})

function verificarTitle(title) {
    if(title.length === 0) {
        return false
    }
    return true
}

function verificarAuthor(author) {
    if(author.length === 0 || !isNaN(author)){
        return false
    }
    return true
}

function verificarYear(year) {
    if(year.length === 0 || isNaN(year)){
        return false
    }
    return true
}

function verificarGenre(genre) {
    if(genre.length === 0 || !isNaN(genre)){
        return false
    }
    return true
}

routesBook.post('/livros', (req, res) => {
    const titleFind = verificarTitle(req.body.title)
    if(!titleFind){
        return res.status(400).send("título inválido!")
    }

    const authorFind = verificarAuthor(req.body.author)
    if(!authorFind){
        return res.status(400).send("autor inválido!")
    }

    const yearFind = verificarYear(req.body.year)
    if(!yearFind){
        return res.status(400).send("ano inválido!")
    }

    const genreFind = verificarGenre(req.body.genre)
    if(!genreFind){
        return res.status(400).send("gênero inválido!")
    }

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
    return res.status(200).send('livro registrado!')
})

routesBook.put('/livros/:id', (req, res) => {
    const { id } = req.params

    const titleFind = verificarTitle(req.body.title)
    if(!titleFind){
        return res.status(400).send("título inválido!")
    }

    const authorFind = verificarAuthor(req.body.author)
    if(!authorFind){
        return res.status(400).send("autor inválido!")
    }

    const yearFind = verificarYear(req.body.year)
    if(!yearFind){
        return res.status(400).send("ano inválido!")
    }

    const genreFind = verificarGenre(req.body.genre)
    if(!genreFind){
        return res.status(400).send("gênero inválido!")
    }

    livro.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.title = update.title
            element.author = update.author
            element.year = update.year
            element.genre = update.genre
            return res.status(200).send("livro editado com sucesso!")
        }
    })
    return res.status(404).send("livro não encontrado!")
})

routesBook.delete('/livros/:id', (req, res) => {
    const { id } = req.params
    const livrosFind = livro.findIndex((element) => element.id == id)

    if(livrosFind !== -1){
        livro.splice(livrosFind, 1)
        return res.status(200).send('livro removido!')
    }
    return res.status(404).send("livro não encontrado")
})

routesBook.get('/livros/', (req, res) => {
    const { title } = req.query
    if(title.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const livroFind = livro.find((element) => {
        if(element.title.toLowerCase().trim() === title.toLowerCase().trim()){
            return element
        }
    })
    if(!livroFind){
        return res.status(404).send("título não encontrado!")
    }
    return res.status(201).send(livroFind)
})

routesBook.get('/livros/', (req, res) => {
    const { author } = req.query
    if(author.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const livroFind = livro.find((element) => {
        if(element.author.toLowerCase().trim() === author.toLowerCase().trim()){
            return element
        }
    })
    if(!livroFind){
        return res.status(404).send("autor não encontrado!")
    }
    return res.status(201).send(livroFind)
})

routesBook.get('/livros/', (req, res) => {
    const { year } = req.query
    if(year.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const livroFind = livro.find((element) => {
        if(parseInt(element.year) === parseInt(year)){
            return element
        }
    })
    if(!livroFind){
        return res.status(404).send("ano não encontrado!")
    }
    return res.status(201).send(livroFind)
})

routesBook.get('/livros/', (req, res) => {
    const { genre } = req.query
    if(genre.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const livroFind = livro.find((element) => {
        if(element.genre.toLowerCase().trim() === genre.toLowerCase().trim()){
            return element
        }
    })
    if(!livroFind){
        return res.status(404).send("gênero não encontrado!")
    }
    return res.status(201).send(livroFind)
})

export { routesBook, livro }