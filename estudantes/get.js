import { estudante } from "./array.js";

export function getEstudante (req, res) {
    if(estudante.length === 0){
        return res.status(404).send("nenhum estudante registrado!")
    }
    return res.status(201).send(estudante)
}