async function terrocons() {
    let scourge = await fetch("Pw2.txt")
    let nightbird = await scourge.text()

    console.log(nightbird)
    alert(nightbird)
    
}

terrocons()