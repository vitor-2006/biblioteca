import { verificarDataEstrutura, verificarID, verificarData } from "./verificar.js"
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

    const dataAluguelFind = verificarDataEstrutura(req.body.dataAluguel)
    if(!dataAluguelFind){
        return res.status(400).send("data de aluguel inválida!")
    }

    const dataDevolucaoFind = verificarDataEstrutura(req.body.dataDevolucao)
    if(!dataDevolucaoFind) {
        return res.status(400).send("data de devolução inválida!")
    }

    const dataCorreta = verificarData(req.body.dataAluguel, req.body.dataDevolucao)
    if(!dataCorreta) {
        return res.status(400).send("data de devolução inválida!")
    }

    const aluguelIndex = aluguel.findIndex((element) => (element.id === parseInt(id)))
    
    if(aluguelIndex !== -1) {
        
        let update = req.body
        aluguel[aluguelIndex].idLivro= update.idLivro
        aluguel[aluguelIndex].idEstudante = update.idEstudante
        aluguel[aluguelIndex].dataAluguel = update.dataAluguel
        aluguel[aluguelIndex].dataDevolucao= update.dataDevolucao
        return res.status(200).send("Aluguel editado com sucesso!")
    }

    return res.status(404).send("Aluguel não encontrado!")
}