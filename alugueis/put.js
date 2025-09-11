import { verificarData, verificarID } from "./verificar.js"
import { aluguel } from "./array.js"
import { estudante } from "../estudantes/array.js"
import { livro } from "../livros/array.js"

export function putAluguel (req, res){
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
}