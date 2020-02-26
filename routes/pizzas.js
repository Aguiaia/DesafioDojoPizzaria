const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");

Router.get('/', pizzaController.index);
Router.get("/add/:nome/:categoria/:preco", pizzaController.add);
Router.get("/buscarnome/:nome", pizzaController.buscarnome);
Router.get("/buscarcategoria/:categoria", pizzaController.buscarcategoria);
Router.get("/pedidos", pizzaController.pedidos);
Router.get("/fazerpedido/:nome", pizzaController.fazerpedido);
//http://localhost:3000/fazerpedido/Lucas?array=Mussarela,Calabresa

module.exports = Router;
