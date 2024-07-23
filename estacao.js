function estacao() {
    let mes = window.prompt("Digite o mês em extenso (ex: Setembro)");
    let msg = document.getElementById("msg");
    switch (mes.toLowerCase()) {
        case "janeiro":
        case "fevereiro":
            msg.innerHTML = "Estação: Verão";
            break;
        case "março":
        case "abril":
        case "maio":
            msg.innerHTML = "Estação: Outono";
            break;
        case "junho":
        case "julho":
        case "agosto":
            msg.innerHTML = "Estação: Inverno";
            break;
        case "setembro":
        case "outubro":
        case "novembro":
            msg.innerHTML = "Estação: Primavera";
            break;
        default:
            msg.innerHTML = "Mês inválido!";
            break;
    }
}