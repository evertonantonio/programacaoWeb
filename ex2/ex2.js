let linha = document.getElementById("numero");
let coluna = document.getElementById("coluna");
let minimo = document.getElementById("minimo");
let maximo = document.getElementById("maximo");
let botao = document.getElementById("botao");
let tabela = document.getElementById("tabela");



function gerar(){
  if(linha.value == "" || coluna.value == "" || minimo.value == "" || maximo.value == ""){
    alert("digite os valores em vazio");
  }else{
    tabela.innerHTML = "";
    for(let contador = 0; contador < linha.value; contador++){
      if(contador % coluna.value != 0){
        tabela.innerHTML += (Math.floor(Math.random() * (maximo.value - minimo.value + 1)) + parseInt(minimo.value)) + "|";
      }else{
        tabela.innerHTML += "\n";
        tabela.innerHTML +=  (Math.floor(Math.random() * (maximo.value - minimo.value + 1)) + parseInt(minimo.value)) + "|";
      }
    }
    linha.value = "";
    coluna.value = "";
    minimo.value = "";
    maximo.value = "";
    linha.focus();
  }

}

botao.onclick = gerar;