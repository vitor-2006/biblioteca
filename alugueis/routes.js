import express from "express"
import { getAluguel } from "./get.js"
import { postAluguel } from "./post.js"
import { putAluguel } from "./put.js"
import { deleteAluguel } from "./delete.js"
import { pesqPorDataAluguel, pesqPorIdEstudante, pesqPorIdLivro } from "./pesquisa.js"

const routesAluguel= express.Router()

routesAluguel.get('/alugueis', getAluguel)
routesAluguel.post('/alugueis', postAluguel)
routesAluguel.put('/alugueis/:id', putAluguel)
routesAluguel.delete('/alugueis/:id', deleteAluguel)

routesAluguel.get('/alugueis/livro/', pesqPorIdLivro)
routesAluguel.get('/alugueis/estudante/', pesqPorIdEstudante)
routesAluguel.get('/alugueis/data/', pesqPorDataAluguel)

export { routesAluguel }