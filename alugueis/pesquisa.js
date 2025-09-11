import { aluguel } from "./array.js"

function pesqPorIdLivro (req, res) {
    const { idLivro } = req.query
    if(idLivro.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const aluguelFind = aluguel.find((element) => {
        if(parseInt(element.idLivro) === parseInt(idLivro)){
            return element
        }
    })
    if(!aluguelFind){
        return res.status(404).send("id do livro não encontrado!")
    }
    return res.status(201).send(aluguelFind)
}

function pesqPorIdEstudante (req, res) {
    const { idEstudante } = req.query
    if(idEstudante.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const aluguelFind = aluguel.find((element) => {
        if(parseInt(element.idEstudante) === parseInt(idEstudante)){
            return element
        }
    })
    if(!aluguelFind){
        return res.status(404).send("id do estudante não encontrado!")
    }
    return res.status(200).send(aluguelFind)
}

function pesqPorDataAluguel (req, res) {
    const { dataAluguel } = req.query
    if(dataAluguel.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const aluguelFind = aluguel.find((element) => {
        if(element.dataAluguel.toLowerCase().trim() === dataAluguel.toLowerCase().trim()){
            return element
        }
    })
    if(!aluguelFind){
        return res.status(404).send("data do aluguel não encontrado!")
    }
    return res.status(201).send(aluguelFind)
}

export { pesqPorDataAluguel, pesqPorIdEstudante, pesqPorIdLivro }