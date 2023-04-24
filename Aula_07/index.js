const express = require('express');
const { pool } = require('./data/data');
const { connect } = require('../todolist/backend/src/router');
const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log('Server active on port 8080');
});

app.get('/getUsers', async (req, res) => {
    try {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM Users');
        console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Connection error with server');
    }
});

