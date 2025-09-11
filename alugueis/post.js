import { verificarData, verificarID } from "./verificar.js"
import { aluguel, idGen } from "./array.js"
import { estudante } from "../estudantes/array.js"
import { livro } from "../livros/array.js"

export function postAluguel (req, res){
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

    const novoAluguel = 
        {
        'idLivro': req.body.idLivro,
        'idEstudante': req.body.idEstudante,
        'dataAluguel': req.body.dataAluguel,
        'dataDevolucao': req.body.dataDevolucao,
        'id': idGen
        }
    idGen.value++
    aluguel.push(novoAluguel)
    return res.status(200).send('Aluguel registrado!')
}