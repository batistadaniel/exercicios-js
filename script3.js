function contar() {
    let msg = document.getElementById('msg')

    msg.innerHTML += `Contando de 1 a 10 (marcando os pares)`

    let cont = 1
    while (cont <= 10) {
        
        cont % 2 === 0 ? msg.innerHTML += `<mark>${cont}</mark> &#x1F449;` : msg.innerHTML += `${cont} &#x1F449;`;
        cont ++;
    }
    msg.innerHTML += ` &#x1F3C1;`
}