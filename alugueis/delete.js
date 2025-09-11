import { aluguel } from "./array.js"

export function deleteAluguel (req, res) {
    const { id } = req.params
    const aluguelIndex = aluguel.findIndex((element) => element.id == id)

    if(aluguelIndex !== -1){
        if(aluguel[aluguelIndex].dataDevolucao === ""){
            return res.status(400).send("livro não devolvido!")
        }
        aluguel.splice(aluguelIndex, 1)
        return res.status(200).send('Aluguel removido!')
    }
    return res.status(404).send("Aluguel não encontrado")
}
