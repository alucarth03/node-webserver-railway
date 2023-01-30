require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;
//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

const objeto ={
    nombre:'Rafael',
    titulo:'Curso de Node'
};


//Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', objeto);
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/generic', (req, res) => {
    res.render('generic', objeto);
    // res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.render('elements', objeto);
    // res.sendFile(__dirname + '/public/elements.html');
});

// app.get('*', (req, res) => {
//     // res.send('404 | Page not found');
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, ()=>{
    console.log(`La applicacion esta corriendo en  http://localhost:${port}`)
});