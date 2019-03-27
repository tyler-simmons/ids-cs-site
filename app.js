const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index.ejs'));

app.listen(port, process.env.IP, () => console.log(`Server running on port ${port}`));