const express = require("express");

const app = express();

// Porta de controle entre o Front e o Back
app.listen(8080, () => {
  console.log("O server está ativo na porta 8080");
});

let nome = "Duda";
let color = "crimson"

app.get("/", (req, res) => {
  res.send(`<h1 style="color: ${color}">Olá ${nome}!!!</h1>`);
});

app.post("/getHTML", (req, res) => {
    const { nome } = req.body;
    console.log(`Olá ${nome}`)
})
