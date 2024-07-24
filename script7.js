function contar() {
    let msg = document.getElementById('msg');
    let valorInicial = Number(document.getElementById('valorInicial').value);
    let valorFinal = Number(document.getElementById('valorFinal').value);

    msg.innerHTML += `<h2>Contando de ${valorInicial} até ${valorFinal}</h2>`

    let cont = valorInicial;
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