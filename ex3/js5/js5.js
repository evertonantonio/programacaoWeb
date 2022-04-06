let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let botao = document.getElementById("botao");

function bemVindo(){
    alert("Olá, " + nome.value + sobrenome.value + "!")
}

botao.onclick = bemVindo;