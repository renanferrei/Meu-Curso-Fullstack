async function produtos() {
    let R = await fetch("produtos.json")
    let F = await R.json()
    let NovaDiv = document.getElementById("lista-card")

    for(let x of F){
        NovaDiv.innerHTML += `
        <div class= "card" data-id="${x.id}">
            <h3>${x.marca}</h3>
            <img id="imagens-${x.id}" src="${x.img[0]}" alt="" width="250px" height="250px">
            <h3>${x.modelo}</h3>
            <div class="valor">
            <h3>R$ ${x.valor.toFixed(2).replace(".",",")}</h3>
            </div>
        </div>`;

       

        
    }

    let Divscards = document.getElementsByClassName("card");

    for(let card of Divscards){
        card.addEventListener("click", clicou);
    }
}

function clicou() {
    let elementoId = this.getAttribute("data-id");
    window.location.href = "detalhes.html?produto-id=" + elementoId;
}


produtos();
