const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//this config is for heroku
const port = process.env.PORT || 3000;

//middleware
//instruccion o callback que se ejecutara siempre no importa que url sea la que la persona pida
app.use(express.static(__dirname + '/public'));

//Express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'carlos salvador garcia'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        image: '/assets/img/image.png'
    });
});


app.get('/data', (req, res) => {
    // ins postman run localhost:3000/data
    res.send('Hola Data');
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});