const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');

        res.json(result.rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({
            error: 'Database error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
