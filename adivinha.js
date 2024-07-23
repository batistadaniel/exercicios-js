let msg = document.getElementById("msg");
let computador  = 0;
let palpite = 0;


function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    computador = min + Math.trunc(aleatorio * dif);
}

function jogar() {
    palpite = Number(window.prompt("Qual é o seu palpite? "));

    if (palpite < computador ) {
        msg.innerHTML += `Você falou ${palpite}. Meu número é <strong>MAIOR</strong>! <br>`;
    } else if (palpite > computador ) {
        msg.innerHTML += `Você falou ${palpite}. Meu número é <strong>MENOR</strong>! <br>`;
    } else if (palpite === computador ) {
        msg.innerHTML += `<strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}! <br>`;
    }
}