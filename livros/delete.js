import { livro } from "./array.js"

export function deleteLivro(req, res) {
    const { id } = req.params
    const livrosFind = livro.findIndex((element) => element.id == id)

    if(livrosFind !== -1){
        livro.splice(livrosFind, 1)
        return res.status(200).send('livro removido!')
    }
    return res.status(404).send("livro não encontrado")
}