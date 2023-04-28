const express = require('express');
const { connection } = require('./data/data');
const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log('Server active on port 8080');
});

app.get('/getUsers', async (req, res) => {
    try {
        await connection.connect();
        await connection.query('SELECT * FROM Users', (err, results, fields) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Connection error with server');
    }
});

app.post('/includeUser', async (req, res) => {
    try {
        await connection.connect();
        const { id, nome } = req.body;
        await connection.query(`INCLUDE INTO Users VALUES ${id}, ${nome}`);
        res.status(200).send('User included');

    } catch (error) {
        console.log(error);
        res.status(500).send('Connection error with server');
    }
});

app.put('/updateUser', async (req, res) => {
    try {
        const client = await pool.connect();
        const { id, nome } = req.body;
        await client.query(`UPDATE Users SET nome = ${nome} WHERE id = ${id}`);
        res.status(200).send('User updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Connection error with server');
    }

});

app.delete('/deleteUser', async (req, res) => {
    try {
        const client = await pool.connect();
        const { id } = req.body;
        await client.query(`DELETE FROM Users WHERE id = ${id}`);
        res.status(200).send('User deleted');

    } catch (error) {
        console.log(error);
        res.status(500).send('Connection error with server');
    }
});

