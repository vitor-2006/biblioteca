import { estudante, idGen } from "./array.js";
import { verificarAno, verificarCurso, verificarMatricula, verificarNome } from "./verificar.js";

export function postEstudante(req, res) {
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

    const matriculaRepetida = estudante.find((element) => element.matricula === req.body.matricula)
    if(matriculaRepetida){
        return res.status(400).send('matrícula já registrada!')
    }

    const novoEstudante = 
        {
        'nome': req.body.nome,
        'matricula': req.body.matricula,
        'curso': req.body.curso,
        'ano': req.body.ano,
        'id': idGen.value
        }
    idGen.value++
    estudante.push(novoEstudante)
    return res.status(200).send('Estudante registrado!')
}