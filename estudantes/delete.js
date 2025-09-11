import { estudante } from "./routes.js";

export function deleteEstudante(req, res) {
    const { id } = req.params
    const estudanteFind = estudante.findIndex((element) => element.id == id)

    if(estudanteFind !== -1){
        estudante.splice(estudanteFind, 1)
        return res.status(200).send('estudante removido!')
    }
    return res.status(404).send("estudante não encontrado")
}