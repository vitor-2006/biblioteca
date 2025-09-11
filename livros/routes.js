import express from "express"
import { getLivro } from "./get.js"
import { postLivro } from "./post.js"
import { putLivro } from "./put.js"
import { deleteLivro } from "./delete.js"
import { pesqPorAuthor, pesqPorGenre, pesqPorTitle, pesqPorYear } from "./pesquisa.js"



const routesBook = express.Router()

routesBook.get('/livros', getLivro)
routesBook.post('/livros', postLivro)
routesBook.put('/livros/:id', putLivro)
routesBook.delete('/livros/:id', deleteLivro)

routesBook.get('/livros/', pesqPorTitle)
routesBook.get('/livros/', pesqPorAuthor)
routesBook.get('/livros/', pesqPorYear)
routesBook.get('/livros/', pesqPorGenre)

export { routesBook }