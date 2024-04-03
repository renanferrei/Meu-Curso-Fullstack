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
    <h3 class="card">${produtos[indiceProd].modelo}</h3>
    <img class="card" src="${produtos[indiceProd].img[0]}" alt="" id="frame" width="250px" height="250px" >
    <div style="border: 2px solid blue" class="card miniaturas" id="miniaturas">
    </div>`

    let divMiniaturas = document.getElementById("miniaturas")
    for(let x of produtos[indiceProd].img){
    divMiniaturas.innerHTML +=`
        <img src="${x}" alt="" width="50px" height="50px">
    `
    }
}
buscarDetalhes()