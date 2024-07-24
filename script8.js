function tabuada() {
    let numero = Number(document.getElementById('numero').value);
    let msg = document.getElementById("msg");

    msg.innerHTML = `Tabuada de ${numero}<br><br>`;
    let cont = 1;

    while (cont <= 10) {
        msg.innerHTML += `${numero} x ${cont} = ${numero * cont}<br>`;
        cont++;
    }
}