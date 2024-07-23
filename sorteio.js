function gerador() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    document.getElementById("msg").innerHTML += `Acabei de pensar no numero <mark>${num}</mark>! <br>`;
}

function limpar() {
    document.getElementById("msg").innerHTML = ``;
}