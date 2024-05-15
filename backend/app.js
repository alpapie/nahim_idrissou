const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors({
    origin: true
  }))

const db = new sqlite3.Database('./database/db.sqlite');

db.on('error', err => {
    console.error('Erreur de connexion à la base de données :', err.message);
});

app.get('/medecins', (req, res) => {
    const page = req.query.page || 1; 
    const limit = 9; 
    const offset = (page - 1) * limit; 

    const query = `SELECT * FROM medecins LIMIT ${limit} OFFSET ${offset};`;

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête :', err.message);
            res.status(500).send('Erreur serveur');
            return;
        }

        res.json({
            page: parseInt(page),
            limit: limit,
            data: rows
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port http:localhost:${PORT}`);
});
