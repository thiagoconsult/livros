const router = require('express').Router();

global.livros = [];

router.get('/', (req, res)=>{
    res.render('livros_list', {title: 'Livros', subtitle: 'Lista de Livros Cadastrados', lista: livros});
})

router.get('/cadastrar', (req, res)=>{
    res.render('livros_new', {title: 'Livros', subtitle: 'Cadastrar Livro'});
})

router.post('/cadastrar', (req, res)=>{
    let new_livro = {
        id: global.livros.length + 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        autor: req.body.autor,
        lancamento: req.body.lancamento
    }
    global.livros.push(new_livro);
    res.redirect('/');
})

module.exports = router;