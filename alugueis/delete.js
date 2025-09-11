import { aluguel } from "./array.js"

export function deleteAluguel (req, res) {
    const { id } = req.params
    const aluguelFind = aluguel.findIndex((element) => element.id == id)

    if(aluguelFind !== -1){
        aluguel.splice(aluguelFind, 1)
        return res.status(200).send('Aluguel removido!')
    }
    return res.status(404).send("Aluguel não encontrado")
}
