const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./data/data");
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
    console.log("Servidor está ativo na porta 3000!");
});

process.on('SIGINT', () => {
    pool.end();
    process.exit();
});

let register = null;

app.post("/api/registerUser", async (req, res) => {
    try {
        register = await pool.connect();
        const { nome, email, senha } = req.body;
        console.log({ nome, email, senha })
        await register.query(`INSERT INTO Users (id, nome, email, senha) VALUES (uuid_generate_v4(), '${nome}', '${email}', '${senha}')`);
        res.status(200).send("Cadastro realizado com sucesso!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    } finally {
        register.release();
    }
});

app.get("/api/getUsers", async (req, res) => {
    try {
        register = await pool.connect();
        const data = await register.query("SELECT * FROM Users");
        res.status(200).send(data.rows)

    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    }
});

app.put("/api/updateUser/:id", async (req, res) => {
    try {
        register = await pool.connect();
        const { id } = req.params;
        const { nome, email, senha } = req.body
        await register.query(`UPDATE Users SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE id = '${id}'`)
        res.status(200).send("Usuário atualizado com sucesso")
    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    }
});

app.delete("/api/deleteUser/:id", async (req, res) => {
    try {
        register = await pool.connect();
        const { id } = req.params;
        await register.query(`DELETE FROM Users WHERE id = '${id}'`)
        res.status(200).send("Usuário deletado com sucesso")

    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    }
})