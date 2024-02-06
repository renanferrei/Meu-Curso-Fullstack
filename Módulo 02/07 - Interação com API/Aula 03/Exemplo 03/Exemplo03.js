async function transformes(){
    let prime = await fetch("Novo.txt")
   let unicron = await prime.text()

   console.log(unicron)
   alert(unicron)
}

transformes()