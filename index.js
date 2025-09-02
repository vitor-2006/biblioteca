import express from 'express'
import { routesBook } from './routes.js';
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routesBook)


app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});