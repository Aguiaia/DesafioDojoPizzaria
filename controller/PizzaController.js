const pizzaModel = require("../model/Pizza");
const pizzaController = {
    //http://localhost:3000/
    index:(req, res) => {
        res.send(pizzaModel.listarPizzas())
    },
    //http://localhost:3000/add/Camarao/Salgada/20
    add: (req, res) => {
        let novaPizza = req.params;
        pizzaModel.adicionarPizza(novaPizza);
        res.send(`A pizza de ${novaPizza.nome} foi adicionada ao cardápio! Veja-a na lista abaixo: <br> ${pizzaModel.listarPizzas()}`)
    },
    //http://localhost:3000/buscarnome/Mussarela
    buscarnome: (req, res) => {
        let nomePizza = req.params;
        res.send(`Encontramos a pizza que você procurava! <br> ${pizzaModel.buscarNome(nomePizza)}`); 
    },
    //http://localhost:3000/buscarcategoria/Salgada
    buscarcategoria: (req, res) => {
        let nomeCategoria = req.params;
        res.send(pizzaModel.buscarCategoria(nomeCategoria));
    },
    //http://localhost:3000/pedidos
    pedidos:(req, res) =>{
        res.send(pizzaModel.listarPedidos());
    },
    //http://localhost:3000/fazerpedido/Lucas?array=Mussarela,Calabresa - Resultado de pesquisa cansativa rs
    fazerpedido: (req, res) => {
        let nomePessoa = req.params;
        var arr = req.query.array.split(',');
        let pedidoPizza = arr;
        res.send(pizzaModel.fazerPedido(nomePessoa, pedidoPizza));
    },
}

module.exports = pizzaController