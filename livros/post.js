import { livro, idGen } from "./array.js"
import { verificarGenre, verificarTitle, verificarAuthor, verificarYear } from "./verificar.js"

export function postLivro(req, res) {
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
        'id': idGen.value
        }
    idGen.value++
    livro.push(novoLivro)
    return res.status(200).send('livro registrado!')
}