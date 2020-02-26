let pizzas =[
    {
        nome: "Calabresa",
        categoria: "Salgada",
        preco: 10
    },
    {
        nome: "Mussarela",
        categoria: "Salgada",
        preco: 12
    },
    {
        nome: "Chocolate",
        categoria: "Doce",
        preco: 15
    },
    {
        nome: "Brócolis",
        categoria: "Vegetariana",
        preco: 30
    },
    {
        nome: "Chocolate com banana",
        categoria: "Doce",
        preco: 30
    }
];
//Dúvida: Não entendi a funcionalidade do "conteudo" e como ele faz com que o for realmente funcione. 
//Acabei utilizando-o ao seguir o padrão listarPizzas, funçao antes feita no dojo.
const listarPizzas= () =>{
    let conteudo = ""
    for(let pizza of pizzas){
        conteudo+=`
        ------------ <br>
        Sabor: ${pizza.nome} <br>
        Categoria: ${pizza.categoria} <br>
        Preço: ${pizza.preco} <br>
        ------------`         
    }
    return conteudo;
}

const adicionarPizza = novaPizza => {
    return pizzas.push(novaPizza);
}

const buscarNome = nomePizza => {
    let pizzasEncontradas = pizzas.filter(pizza => pizza.nome == nomePizza.nome);
    let conteudo = ""
    for (pizza of pizzasEncontradas) {
        conteudo+=(`
        --------------------------------<br>
        Sabor: ${pizza.nome} <br>
        Categoria: ${pizza.categoria} <br>
        Preço: ${pizza.preco} <br>
        --------------------------------<br>`) 
    }
    return conteudo
}

const buscarCategoria = nomeCategoria => {
    let pizzasEncontradas = pizzas.filter(pizza => pizza.categoria == nomeCategoria.categoria);
    let conteudo = ""
    for (pizza of pizzasEncontradas) {
        conteudo+=(`
        --------------------------------<br>
        Sabor: ${pizza.nome} <br>
        Categoria: ${pizza.categoria} <br>
        Preço: ${pizza.preco} <br>
        --------------------------------<br>`)
    }
    return (`Abaixo listamos as pizzas na categoria ${nomeCategoria.categoria}:<br> ${conteudo}`)
}

let pedidos = [
    {
        cliente:'Joao',
        pizza:['Calabresa'],
        total: 0
    }
];

const listarPedidos = () => {
    let conteudo = ""
    for(let pedido of pedidos){
        conteudo+=`
        ------------ <br>
        Cliente: ${pedido.cliente} <br>
        Pedidos: ${pedido.pizza} <br>
        Total: ${pedido.total} <br>
        ------------<br>`         
    }
    return (`Abaixo listamos os pedidos feitos até o momento: <br> ${conteudo}`);
}
//http://localhost:3000/fazerpedido/Lucas?array=Mussarela,Calabresa
const fazerPedido = (cliente, seusPedidos)=>{
    let soma = 0
    for (let ask of seusPedidos) {
        var pizzasFiltradas = pizzas.filter(pizza => {
            if (pizza.nome == ask) {
                return soma = soma + pizza.preco;
            }})
    }
    pedidos.push({
        cliente: cliente.nome,
        pizza: seusPedidos,
        total: soma
    })
    return`
    Pedido realizado com sucesso! Confira-o logo abaixo:<br>
    ----------------------------------------------------<br>
    Cliente: ${cliente.nome}<br>
    Pedidos: ${seusPedidos}<br>
    Total a pagar: ${soma}<br>
    -----------------------------------------------------`
};

module.exports = {listarPizzas, adicionarPizza, buscarNome, buscarCategoria, listarPedidos, fazerPedido}