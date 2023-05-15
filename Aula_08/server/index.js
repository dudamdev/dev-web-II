const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./data/data");

app.use(express.json());
app.use(cors());
app.listen(3000, () => {
    console.log("Server running on port 3000!");
});

process.on('SIGINT', () => {
    pool.end();
    process.exit();
});

let register = null;

app.post("/api/registerUser", async (req, res) => {
    try {
        register = await pool.connect();
        const { name, email, password } = req.body;
        await register.query(`INSERT INTO Users (id, name, email, password) VALUES(uuid_generated_v4(), '${name}', '${email}', '${password}') `);
        res.status(200).send("User successfully registered!");

    } catch (error) {
        res.status(500).send("Error connecting with server");
    } finally {
        register.release();
    }

});




