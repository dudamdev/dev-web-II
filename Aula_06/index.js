// Thunder Cliente => Post localhost:8080/includeAluno
// { "nome": "João Paulo" }

/*
npm init -y => cria package.json
npm i express
npm i express nodemon
adicionar "start": "nodemon index.js" dentro de "script" dentro do arquivo package.json
npm start
*/

const express = require("express"); // chama a dependência express e armazena na constante "express"

const app = express();              // simplificando o nome da função

app.use(express.json());            // função que "lê" o json - não inclusa na dependencia express 

app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080");
})

// CREATE READ UPDATE DELETE (CRUD)
//  POST  GET   PUT   DELETE
// app.get('/', () => {
//     console.log("O NEGOCIO DEU CERTO!!!");
// })
// SELECT * FROM Alunos WHERE id = 23
// app.get('/getAluno', (req, res) => {
//     const { id } = req.body;
//     console.log(`O aluno de ID: ${id} foi encontrado!`);
//     res.send(`O aluno de ID: ${id} foi encontrado!`)
// })

let Alunos = ["Maria", "João", "José"];

// CREATE
app.post('/includeAluno', (req, res) => {
    const { nome } = req.body;
    Alunos.push(nome);
    res.send(`<h1>Olá ${nome}! Bem vindo!`)
    console.log(Alunos)
});

// READ
app.get('/getAluno', (req, res) => {
    const { index } = req.body;
    // connect SQL - SELECT * FROM Alunos WHERE id = index
    res.send(`<h1> O aluno ${Alunos[index]} foi encontrado. </h1>`);
});

app.get('/getAlunos', (req, res) => {
    // SELECT * FROM Alunos
    console.log(Alunos);
    res.send(`Todos os alunos cadastrados são: ${Alunos}`);
});

// UPDATE
app.put('/updateAluno', (req, res) => {
    // UPDATE nome FROM Alunos WHERE id = index;
    const { index, nome } = req.body;
    Alunos[index] = nome;
    res.send(`<h1> O nome ${Alunos[index]} foi atualizado com sucesso!</h1>`);
    console.log(Alunos);
});

// DELETE
app.delete('/deleteAluno', (req, res) => {
    // DELETE FROM Alunos WHERE id = index;
    const { index } = req.body;
    Alunos.splice(index, 1);
    res.send(`<h1>O nome foi deletado</h1>`);
    console.log(Alunos)
});