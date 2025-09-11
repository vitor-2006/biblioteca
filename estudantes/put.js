import { estudante } from "./routes.js";
import { verificarAno, verificarCurso, verificarMatricula, verificarNome } from "./verificar.js";

export function putEstudante (req, res) {
    const { id } = req.params

    const nomeFind = verificarNome(req.body.nome)
    if(!nomeFind){
        return res.status(400).send("nome inválido!")
    }

    const matriculaFind = verificarMatricula(req.body.matricula)
    if(!matriculaFind){
        return res.status(400).send("matrícula inválida!")
    }

    const cursoFind = verificarCurso(req.body.curso)
    if(!cursoFind){
        return res.status(400).send("curso inválido!")
    }

    const anoFind = verificarAno(req.body.ano)
    if(!anoFind){
        return res.status(400).send("ano inválido!")
    }

    estudante.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.nome = update.nome
            element.matricula = update.matricula
            element.curso = update.curso
            element.ano = update.ano
            return res.status(200).send("estudante editado com sucesso!")
        }
    })
    return res.status(404).send("estudante não encontrado!")
}