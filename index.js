import express from 'express'
import { routesBook } from './livros/routes.js';
import { routesEstudante } from './estudantes/routes.js';
import { routesAluguel } from './alugueis/routes.js';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routesBook)
app.use(routesEstudante)
app.use(routesAluguel)

app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});