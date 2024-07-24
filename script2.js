function contar() {
    let msg = document.getElementById('msg')

    msg.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        msg.innerHTML += ` ${cont} &#x1F449;`
        cont ++;
    }
    msg.innerHTML += ` &#x1F3C1;`
}