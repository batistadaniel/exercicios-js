function contar() {
    let msg = document.getElementById('msg');
    let valorFinal = Number(document.getElementById('valorFinal').value);

    msg.innerHTML += `<h2>Contando de 0 até ${valorFinal}</h2>`

    let cont = 0;
    while (cont <= valorFinal) {
        msg.innerHTML += `${cont} &#x1F449;`;
        cont ++;
    }
    msg.innerHTML += ` &#x1F3C1;`
} 

function limpar() {
    let msg = document.getElementById('msg');
    msg.innerHTML = ``;
}