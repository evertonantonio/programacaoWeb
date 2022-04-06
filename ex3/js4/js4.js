let inserir = document.getElementById("nome");
let botao = document.getElementById("botao");

function exibir(){
    let nome = inserir.value
    alert("Olá, " + nome + "!");
}

botao.onclick = exibir;