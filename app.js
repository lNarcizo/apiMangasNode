const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const mangas = [];

app.post("/cadastra-manga-novo", (req, resp)=> {

    const { nome, capitulo} = req.body;

    mangas.push({
        id: randomUUID(),
        nome,
        capitulo
    });

    return resp.json(mangas);

});

app.get("/mangas", (req, resp)=> {

    return resp.json(mangas);

});

app.listen(5000, () => console.log("servidor esta aqui port:5000"));