import { livro } from "./array"
import { verificarGenre, verificarAuthor, verificarTitle, verificarAuthor, verificarYear } from "./verificar.js"

export function putLivro(req, res) {
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
}