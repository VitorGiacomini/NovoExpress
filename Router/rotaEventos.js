const express = require('express');
const router = express.Router();

let eventos = [];

router.get('/', (req, res) => {
	res.render('eventos/index', { eventos });
});
router.get('/novo', (req, res) => {
	res.render('eventos/novo');
});
router.post('/', (req, res) => {
	const { nome, data, local } = req.body;
	const novoEvento = { nome, data, local };
	eventos.push(novoEvento);
	res.redirect('/eventos');
});
router.get('/:id', (req, res) => {
	const id = req.params.id;
	const evento = eventos.find((evento) => evento.id === parseInt(id));
	res.render('eventos/detalhes', { evento });
});

router.get('/:id/editar', (req, res) => {
	const id = req.params.id;
	const evento = eventos[id];
	res.redirect('eventos/editar', { evento });
});
router.post('/:id', (req, res) => {
	const id = req.params.id;
	const { nome, data, local } = req.body;
	eventos[id] = { nome, data, local };
	res.redirect('/eventos');
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	eventos.splice(id, 1);
	res.redirect('/eventos');
});
module.exports = router;
