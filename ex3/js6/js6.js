let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let botao = document.getElementById("botao");

function bemVindo(){
    if(nome.value == '' || sobrenome.value == ''){
        alert("Complete as caixas");
    }else{
        alert("Olá, " + nome.value + " " + sobrenome.value + "!")
        nome.value = "";
        sobrenome.value = "";
        nome.focus();
    }
}

botao.onclick = bemVindo;