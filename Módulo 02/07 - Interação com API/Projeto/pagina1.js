async function novapag() {
    let jumento = await fetch("novosprodutos.json")
    let novosMD = await jumento.json()

    let novo = document.getElementById("lista")

    for(let produto of novosMD){
        novo.innerHTML += `
            <div class="novacard">
            <h1>${produto.novaMarca}</h1>
            <img src="${produto.novaImg}" alt="" width="250" height="250">
            <h2>${produto.novoModelo}</h2>
            <h2>R$ ${produto.novovalor}</h2>
            </div>`
    }
}novapag()