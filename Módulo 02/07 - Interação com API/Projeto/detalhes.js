async function buscarDetalhes() {
    let buscar = await fetch("produtos.json")
    let produtos = await buscar.json()

    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")

    let indiceProd
    for(let x in produtos){
        if (produtos[x].id == parametroID) {
            indiceProd = x
        }
    }

    document.getElementById("detalhes").innerHTML += `
    <h3 class="h3">${produtos[indiceProd].modelo}</h3>
    <h2 class="text">Camisetas de Futebol Europeu</h2>
    <img class="card1" src="${produtos[indiceProd].img[0]}" alt="" id="frame" width="250px" height="250px" >
    <div  class="card-miniaturas" id="miniaturas">
    </div>`

    let divMiniaturas = document.getElementById("miniaturas")
    for(let x of produtos[indiceProd].img){
    divMiniaturas.innerHTML +=`
        <img src="${x}" class="mini" alt="" width="50px" height="50px">
    `
    }

    let minizinhas = document.getElementsByClassName("mini")
    for(let x of minizinhas){
        x.addEventListener("mouseover", deslize)
    }
}

buscarDetalhes()


function deslize() {
    document.getElementById("frame").src = this.src
}

function novabt() {
    document.body.innerHTML = `
    <h1>Compra efetuada com sucesso</h1>
    <h2>Numero do Pedido</h2>
    <h2></h2>
    `
    
}

