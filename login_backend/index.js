const express = require('express');
const jwt = require('jsonwebtoken');
const { pool, secret, PORT, expiresIn } = require('./data/data');
const app = express();

app.use(express.json());

app.listen(6660, () => console.log(`Server running on port ${PORT}`));

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ message: 'Token not provided' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Token invalid' });
    }
}

// "Home Page"
app.get("/", verifyToken, (req, res) => {
    res.send('<h1>Tela de Login</h1>')
});

// Chamada login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const client = await pool.connect();

    const checkUser = await client.query(`SELECT * FROM users WHERE email = '${email}'`);
    if (!checkUser) {
        return res.status(401).json({ message: 'Non existing user' });
    }
    if (parseInt(checkUser.rows[0].password) !== password) {
        return res.status(401).json({ message: 'Incorrect password' });
    }

    const { id } = checkUser.rows[0]
    return res.status(200).json({
        token: jwt.sign({ id }, secret, {
            expiresIn: expiresIn,
        }),
    });
});

//  Mostrar todos os usuários
app.get("/users", async (req, res) => {
    try {
        const client = await pool.connect();
        const { rows } = await client.query("SELECT * FROM users");
        res.status(200).json({ message: 'Users successfully found' })
        console.table(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server connection error' });
    }
});

// Criar um usuário
app.post("/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const client = await pool.connect();

        if (!name || !email || !password) {
            return res.status(401).json({ message: 'All fields are required.' })
        }

        const checkUser = await client.query(`SELECT email FROM users WHERE email='${email}'`);
        if (checkUser.rows.length === 0) {
            await client.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`);
            res.status(200).json({ message: 'User successfully registered' });
        } else {
            res.status(401).json({ message: 'User already registered' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server connection error' });
    }
});

// Atualizar um usuário
app.put("/users/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const client = await pool.connect();

        const checkUser = await client.query(`SELECT id FROM users WHERE id=${id}`);
        if (checkUser.rows.length > 0) {
            await client.query(`UPDATE users SET name = '${name}', email = '${email}', password = '${password}' WHERE id=${id}`);
            res.status(200).json({ message: 'User successfully updated' });
        } else {
            res.status(401).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server connection error' });
    }
});

// Deletar um usuário
app.delete("/users/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const client = await pool.connect();
        const deletedUser = await client.query(`DELETE FROM users WHERE id=${id}`);

        if (deletedUser.rowCount === 1) {
            return res.status(200).json({ message: 'User successfully deleted' });
        } else {
            return res.status(200).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server connection error' });
    }
})

