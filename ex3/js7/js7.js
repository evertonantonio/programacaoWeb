let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let botao = document.getElementById("botao");
let limpar = document.getElementById("limpar");
let resultado = document.getElementById("resultado");

function resultados(){
    if(valor1.value == "" || valor2.value == ""){
        alert("Não deixe as caixas em branco!")
    }else{
        let soma = parseInt(valor1.value) + parseInt(valor2.value);
        let subtracao = parseInt(valor1.value) - parseInt(valor2.value);
        let multiplicacao = parseInt(valor1.value) * parseInt(valor2.value);
        let divisao = parseInt(valor1.value) / parseInt(valor2.value);
        let potencia = parseInt(valor1.value) ** parseInt(valor2.value);
        resultado.innerHTML += "O resultado entre " + valor1.value + " + " + valor2.value + " = "  + soma + "\n"
        resultado.innerHTML += "O resultado entre " + valor1.value + " - " + valor2.value + " = "  + subtracao + "\n";
        resultado.innerHTML += "O resultado entre " + valor1.value + " x " + valor2.value + " = "  + multiplicacao + "\n";
        resultado.innerHTML += "O resultado entre " + valor1.value + " / " + valor2.value + " = "  +  divisao + "\n"
        resultado.innerHTML += "O resultado entre " + valor1.value + " ** " + valor2.value + " = "  +  potencia + "\n"
        resultado.innerHTML += '<hr>'
        valor1.value = "";
        valor2.value = "";
        valor1.focus();
    }
}

function zerar(){
    resultado.innerHTML = "";
}

botao.onclick = resultados;
limpar.onclick = zerar;