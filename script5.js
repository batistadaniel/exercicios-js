function contar() {
    let msg = document.getElementById('msg')

    msg.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`

    let cont = 10;
    while (cont >= 1) {
        msg.innerHTML += ` ${cont} &#x1F449;`
        // cont % 2 === 0 ? msg.innerHTML += `${cont} &#x1F449;` : msg.innerHTML += `${cont} &#x1F449;`;
        cont --;
    }
    msg.innerHTML += ` &#x1F3C1;`
}