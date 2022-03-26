let entrada = document.getElementById("inputInicial");
let botaoInicial = document.getElementById("arrayInicio");
let botaoFinal = document.getElementById("arrayFinal");
let botaoZerar = document.getElementById("zerar");
const lista = document.getElementById("lista");

let valores = [];


function arrayFinal(){
   if(!isNaN(entrada.value)){
      numero = entrada.value;
      valores.push(numero);
      entrada.value = "";
      entrada.focus();
      for(let contador = 0; contador <= 1; contador++){
         lista.innerHTML = "";
         for(let contador = 0; contador < valores.length; contador++){
            lista.innerHTML += '<li>' + valores[contador] + '</li>';
         }
      }
   }
   else{
      alert("Digite novamente");
      entrada.value = "";
      entrada.focus();
   }

   }


function arrayComeço(){
   if(!isNaN(entrada.value)){
      numero = entrada.value;
      valores.unshift(numero);
      entrada.value = "";
      entrada.focus();
         for(let contador = 0; contador <= 1; contador++){
         lista.innerHTML = "";
         for(let contador = 0; contador < valores.length; contador++){
            lista.innerHTML += '<li>' + valores[contador] + '</li>';
         }
      }
   }
   else{
      alert("Digite novamente");
      entrada.value = "";
      entrada.focus();
   }

}

function limpar(){
   for(let contador = valores.length + 1; contador > 0; contador--){
      valores.pop();
   }
   entrada.value = "";
   entrada.focus();
   lista.innerHTML = valores;
}

botaoInicial.onclick = arrayFinal;
botaoFinal.onclick = arrayComeço;
botaoZerar.onclick = limpar;