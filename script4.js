function contar() {
    let msg = document.getElementById('msg')

    msg.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 2
    while (cont <= 10) {
        cont % 2 === 0 ? msg.innerHTML += ` ${cont} &#x1F449;` : msg.innerHTML += `${cont} &#x1F449;`;
        cont +=2;
    }
    msg.innerHTML += ` &#x1F3C1;`
}