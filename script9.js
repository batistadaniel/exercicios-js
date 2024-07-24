function fatorial() {
    let numero = Number(document.getElementById('numero').value);
    let msg = document.getElementById("msg");

    msg.innerHTML = `Calculando ${numero}!<br><br>`;

    let cont = numero;
    let fatorial = 1;
    while (cont > 1) {
        msg.innerHTML += `${cont} x `;
        fatorial *= cont;
        cont--;
    }
    msg.innerHTML += `1 = <strong>${fatorial.toLocaleString('pt-BR')}</strong>`;
}