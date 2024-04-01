const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const rotaEventos = require('./Router/rotaEventos');

const PORT = process.env.PORT || 3000;

// Array de eventos estático
const eventos = [
    {
        id: 1,
        nomeEvento: 'Jão SUPERTUNÊ',
        dataEvento: '06-04-2024',
        horaEvento: '22:00',
    },
    {
        id: 2,
        nomeEvento: 'IMPROVÁVEL - BARBIXAS',
        dataEvento: '30-03-2024',
        horaEvento: '19:00',
    },
    {
        id: 3,
        nomeEvento: 'SEPULTURA',
        dataEvento: '08-08-2024',
        horaEvento: '20:00',
    },
];

// Configurando o Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Configurando o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render('eventos/index', { eventos });
});
app.use('/eventos', rotaEventos);

// Iniciando o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
