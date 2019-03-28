const express = require('express');
const bodyParser = require('body-parser');
const {Pool, Client} = require('pg');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(express.static(__dirname + '/public'));

const pool = new Pool({
    user: 'qpahbqel',
    host: 'isilo.db.elephantsql.com',
    database: 'qpahbqel',
    password: 'FggtLzROMfqQLA8lUZkSpM-gnkDkwukb',
    port: 5432
});

pool.query('SELECT * FROM users', (err, res) => {
    console.log(err, res)
    pool.end();
})



app.get('/', (req, res) => res.render('index.ejs'));

app.listen(port, process.env.IP, () => console.log(`Server running on port ${port}`));