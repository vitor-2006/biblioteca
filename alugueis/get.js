import { aluguel } from "./array.js"

export function getAluguel (req, res) {
    if(aluguel.length === 0){
        return res.status(404).send("nenhum aluguel registrado!")
    }
    return res.status(201).send(aluguel)
}

