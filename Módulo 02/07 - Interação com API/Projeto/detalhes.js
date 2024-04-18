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
        <h3 class="h3">Camisetas de Futebol Europeu</h3>
        <h2 class="text">${produtos[indiceProd].modelo}</h2>
        <img class="card1" src="${produtos[indiceProd].img[0]}" alt="" id="frame" width="250px" height="250px" >
        <div  class="card-miniaturas" id="miniaturas"></div>
    `

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

function deslize() {
    document.getElementById("frame").src = this.src
}

function novabt() {
    document.body.innerHTML = `
        <div class="comprado">
            <h1 class="C1">Compra efetuada com sucesso</h1>
            <h2 class="CE">Numero do Pedido:</h2>
            <h2 class="CE">${parseInt(Math.random() * 123456)}</h2>

            
        </div>
    `
    
}

function mostrarTamanhoSelecionado() {
    let radios = document.querySelectorAll('input[type="radio"]')

    for (let bolinha of radios) {
        bolinha.addEventListener('change', alterar)
    }
}

function alterar() {
    
    let valorSelecionado = document.getElementById('valor-selecionado')

    valorSelecionado.innerHTML += `
        <span>Tamanho selecionado: ${this.value}</span>
        `
}

mostrarTamanhoSelecionado()







buscarDetalhes()