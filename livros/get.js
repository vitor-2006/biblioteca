import { livro } from "./array.js";

export function getLivro(req, res) {
    if(livro.length === 0){
        return res.status(404).send("nenhum livro registrado!")
    }
    return res.status(201).send(livro)
}