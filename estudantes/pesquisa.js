import { estudante } from "./array.js"

function pesqPorNome(req, res) {
    const { nome } = req.query
    if(nome.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const estudanteFind = estudante.find((element) => {
        if(element.nome.toLowerCase().trim() === nome.toLowerCase().trim()){
            return element
        }
    })
    if(!estudanteFind){
        return res.status(404).send("nome não encontrado!")
    }
    return res.status(201).send(estudanteFind)
}

function pesqPorMatricula(req, res) {
    const { matricula } = req.query
    if(matricula.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const estudanteFind = estudante.find((element) => {
        if(parseInt(element.matricula) === parseInt(matricula)){
            return element
        }
    })
    if(!estudanteFind){
        return res.status(404).send("matricula não encontrada!")
    }
    return res.status(201).send(estudanteFind)
}

function pesqPorCurso(req, res) {
    const { curso } = req.query
    if(curso.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const estudanteFind = estudante.find((element) => {
        if(element.curso.toLowerCase().trim() === curso.toLowerCase().trim()){
            return element
        }
    })
    if(!estudanteFind){
        return res.status(404).send("curso não encontrado!")
    }
    return res.status(201).send(estudanteFind)
}

export { pesqPorNome, pesqPorCurso, pesqPorMatricula }