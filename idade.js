function nascimento() {
    let anoNascimento = Number(window.prompt("Em que ano você nasceu? "));
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - anoNascimento;

    document.getElementById("msg").innerHTML = `Quem nasceu em ${anoNascimento} vai completar ${idade} anos em ${anoAtual}.`;
}