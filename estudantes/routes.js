import express from "express"
import { getEstudante } from "./get.js"
import { postEstudante } from "./post.js"
import { putEstudante } from "./put.js"
import { deleteEstudante } from "./delete.js"
import { pesqPorCurso, pesqPorMatricula, pesqPorNome } from "./pesquisa.js"

const routesEstudante = express.Router()

routesEstudante.get('/estudantes', getEstudante)
routesEstudante.post('/estudantes', postEstudante)
routesEstudante.put('/estudantes/:id', putEstudante)
routesEstudante.delete('/estudantes/:id', deleteEstudante)

routesEstudante.get('/estudantes/nome/', pesqPorNome)
routesEstudante.get('/estudantes/matricula/', pesqPorMatricula)
routesEstudante.get('/estudantes/curso/', pesqPorCurso)

export { routesEstudante }