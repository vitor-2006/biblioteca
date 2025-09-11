import { estudante } from "./array.js";
import { aluguel } from "../alugueis/array.js";

export function deleteEstudante(req, res) {
    const { id } = req.params
    const estudanteIndex = estudante.findIndex((element) => element.id == id)

    if(estudanteIndex !== -1){
        const aluguelRealizado = aluguel.filter((element) => {
            if(parseInt(element.idEstudante) === parseInt(id)){
                return element
            }
        })
        const livroNaoDevolvido = aluguelRealizado.map((aluguelReal) => {
            if(aluguelReal.dataDevolucao === ""){
                return true
            }
        })
        
        if(livroNaoDevolvido[0]){
            return res.status(400).send("livro não devolvido!")
        }
        const aluguelRestante = aluguel.filter((element) => {
            if(parseInt(element.idEstudante) !== parseInt(id)){
                return element
            }
        })
        aluguel.length = 0
        aluguel.push(...aluguelRestante)
        estudante.splice(estudanteIndex, 1)
        return res.status(200).send('estudante removido!')
    }
    return res.status(404).send("estudante não encontrado")
}