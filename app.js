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

app.get("/mangas/:id", (req, resp)=> {

    const {id} = req.params;

    const manga = mangas.find(manga => manga.id === id);

    return resp.json(manga);

});

app.put("/atualiza-manga/:id", (req, resp)=> {

    const { id } = req.params;
    const { nome, capitulo } = req.body;

    const mangaIndex = mangas.findIndex(manga => manga.id === id);

    mangas[mangaIndex] = {
        ...mangas[mangaIndex],
        nome,
        capitulo
    };

    return resp.json({message: "Manga atualizado com sucesso"});
});

app.delete("/deletar-manga/:id", (req, resp)=> {

    const {id} = req.params;

    const mangaIndex = mangas.findIndex(manga => manga.id === id);

    mangas.splice(mangaIndex, 1);

    return resp.json({message: "Manga excluido com sucesso!"})
});

app.listen(5000, () => console.log("servidor esta aqui port:5000"));