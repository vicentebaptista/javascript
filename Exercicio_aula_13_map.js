
let btnCalcular = document.getElementById("calcular");
let btnLimpar = document.getElementById("limpar");
let numero = document.getElementById("numero");
let arrValores = [];
let resultadoDiv = document.getElementById("resultado");

function limparLista() {
    resultadoDiv.innerText = "";
    arrValores = [];
}

function salvaNumero(){
     let numeroDigitado = numero.value;
     arrValores.push(numeroDigitado);
     let numeroTriplicado = arrValores.map(function (item) {
        return item * 3
    })
    resultadoDiv.innerText = numeroTriplicado.join(",");
    numero.value = "";
    console.log(numeroTriplicado);
}

btnCalcular.addEventListener("click", salvaNumero);
btnLimpar.addEventListener("click", limparLista);
