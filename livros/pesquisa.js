import { livro } from "./array"

function pesqPorTitle(req, res) {
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
}

function pesqPorAuthor(req, res) {
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
}

function pesqPorYear(req, res) {
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
}

function pesqPorGenre(req, res) {
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
}

export { pesqPorAuthor, pesqPorGenre, pesqPorTitle, pesqPorYear }