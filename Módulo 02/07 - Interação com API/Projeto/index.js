async function produtos() {
    let R = await fetch("produtos.json")
    let F = await R.json()
    let NovaDiv = document.getElementById("lista-card")

    for(let x of F){
        NovaDiv.innerHTML += `
        <div class= "card" data-id="${x.id}">
            <h3>${x.marca}</h3>
            <img src="${x.img}" alt="" width="250px" height="250px">
            <h3>${x.modelo}</h3>
            <h3>R$ ${x.valor}</h3>
        
        
        </div>`
    }

    let Divscards = document.getElementsByClassName("card")

    for(let card of Divscards){
        card.addEventListener("click", clicou)
    }
}
produtos()

    function clicou(params) {
        let elementoId = this.getAttribute("data-id")
        window.location.href = "detalhes.html?produto-id=" + elementoId
    }