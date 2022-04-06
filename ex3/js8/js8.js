let dinheiro = document.getElementById("dinheiro");
let verificar = document.getElementById("verificar");
let resultado = document.getElementById("resultado");

function quantidadeNotas(){
    let valor = dinheiro.value;
    if(valor == ''){
        alert("Coloque um valor válido para o valor!")
    }else{
        let nota200 = 0;
        let nota100 = 0;
        let nota50 = 0;
        let nota20 = 0;
        let nota10 = 0;
        let nota5 = 0;
        let nota2 = 0;
        let nota1 = 0;
        let moeda50 = 0;
        let moeda25 = 0;
        let moeda10 = 0;
        let moeda5 = 0;
        let moeda1 = 0;
        while(valor > 0.00){
            if(valor >= 200){
                valor -= 200;
                nota200++;
            }else if(valor >= 100){
                valor -= 100;
                nota100++;
            }else if(valor >= 50){
                valor -= 50;
                nota50++;
            }else if(valor >= 20){
                valor -= 20;
                nota20++;
            }else if(valor >= 10){
                valor -= 10;
                nota10++;
            }else if(valor >= 5){
                valor -= 5;
                nota5++;
            }else if(valor >= 2){
                valor -= 2;
                nota2++;
            }else if(valor>= 1){
                valor -= 1;
                nota1++;
            }else if(valor >= 0.50){
                valor -= 0.50;
                moeda50++;
            }else if(valor >= 0.25){
                valor -= 0.25;
                moeda25++;
            }else if(valor >= 0.10){
                valor -= 0.10;
                moeda10++;
            }else if(valor >= 0.05){
                valor -= 0.05;
                moeda5++;
            }else{
                valor -= 0.01;
                moeda1++;
            }
        }
        resultado.innerHTML = "";
        resultado.innerHTML += "Você tem " + nota200 + " notas de 200" + "\n";
        resultado.innerHTML += "Você tem " + nota100 + " notas de 100" + "\n";
        resultado.innerHTML += "Você tem " + nota50 + " notas de 50" + "\n";
        resultado.innerHTML += "Você tem " + nota20 + " notas de 20" + "\n";
        resultado.innerHTML += "Você tem " + nota10 + " notas de 10" + "\n";
        resultado.innerHTML += "Você tem " + nota5 + " notas de 5" + "\n";
        resultado.innerHTML += "Você tem " + nota2 + " notas de 2" + "\n";
        resultado.innerHTML += "Você tem " + nota1 + " moedas de 1" + "\n";
        resultado.innerHTML += "Você tem " + moeda50 + " moedas de 50" + "\n";
        resultado.innerHTML += "Você tem " + moeda25 + " moedas de 25" + "\n";
        resultado.innerHTML += "Você tem " + moeda10 + " moedas de 10" + "\n";
        resultado.innerHTML += "Você tem " + moeda5 + " moedas de 5" + "\n";
        resultado.innerHTML += "Você tem " + moeda1 + " moedas de 1" + "\n";

        dinheiro.value = "";
        dinheiro.focus();
    }
}

verificar.onclick = quantidadeNotas;