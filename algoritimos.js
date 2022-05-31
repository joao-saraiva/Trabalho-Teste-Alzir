//const prompt = require('prompt');

function trocaDeVariavel(inputA, inputB){
    let inputAuxiliar = inputB;
    inputB = inputA;
    inputA = inputAuxiliar;

    return [inputA, inputB];
}

function contagem(notas){
    var totalQueCairamNoCriterio = 0;

    if(notas.length <= 0){
        return 0;
    }

    for(let i =0; i < notas.length; i++){
        if(notas[i] > 6){
            totalQueCairamNoCriterio += 1;
        }else if(!(typeof notas[i] == 'number')){
            return 0;
        }
    }

    return totalQueCairamNoCriterio;
}

function somaDeConjuntos(){
    var n = prompt("Informe a quantidade de números:");
    var numero;
    var soma = 0;
    var i = 0;

    while (i < n) {
    numero = parseInt(prompt("Informe um número"));
    soma = soma + numero;
    i = i + 1;
    }

    console.log("A soma dos " + n + " números é " + soma);
}

function fatorial(n){
    if(n <= 0){
        return NaN;
    }

    var fatorial = 1;
    var i = n;

    while (i >= 1) {
    fatorial = fatorial * i;
    i = i - 1;
    }

    return fatorial;
}

function calculaFatorial(numero){
    var fatorial = 1;
    var i = numero;

    while (i >= 1) {
    fatorial = fatorial * i;
    i = i - 1;
    }

    return fatorial;
}

function calculaSeno(){
    var x = prompt("Informe o valor de x:");
    var n = prompt("Informe o número de termos da série:");

    var termo;
    var sinal = 1;
    var j = 1;
    var seno = 0;

    for (var i = 1; i <= n; i++)
    {
        termo = Math.pow(x, j) / calculaFatorial(j);
        seno = seno + sinal * termo;
    sinal = -1 * sinal;
    j = j + 2;
    }

    console.log(seno.toFixed(2));
}

function fibonacci(n){
    if(n <= 0) {
        return []
    }

    var termo1 = 1;
    var termo2 = 1;
    var termo3;
    var sequencia = [0, termo1, termo2];

    for (i = 3; i <= n; i++)
    {
    termo3 = termo1 + termo2;
    sequencia.push(termo3);
    termo1 = termo2;
    termo2 = termo3;
    }

    return sequencia;
}

function numeroInvertido(){
    var numero = prompt("Informe um número inteiro positivo:");

    var invertido = 0;
    var digito;
    var q = numero;

    while (q > 0)
    {
    digito = q % 10;
    invertido = invertido * 10 + digito;
    q = Math.floor(q / 10);
    }

    console.log("Número original: " + numero );
    console.log("Número invertido: " + invertido);
}

function numeroBaseBinaria(){
    var n = prompt("Informe um número inteiro decimal:");

    var q = n;
    var r = new Array(100);
    var i = 0;

    while (q > 0)
    {
    r[i] = q % 2;
        i++;
    q = Math.floor(q / 2);
    }

    console.log("Número " + n + " na base binária: ");

    while (i > 0)
    {
    i--;
        console.log(r[i]);
    }
}

function converteCaractereParaNumero(){
    var sequencia = prompt("Informe uma sequência de caracteres númerica:");
    var caractere;
    var codigo;
    var numero = 0;
    var n = sequencia.length;

    for (var i = 0; i < n; i++)
    {
        caractere = sequencia.charAt(i);
    codigo = caractere.charCodeAt();
    numero = numero * 10 + (codigo - 48);
    }

    console.log("O número decimal correspondente é: " + numero);
}

function ordenador(elementos){
    if(!(elementos instanceof Array)){
        return [];
    }
    return elementos.sort();
}

function verificaPrimo(num){
    for (let i = 2; i < num; i++)
    if (num % i === 0) {
        return false;
    }
    return num > 1;
};

module.exports = { trocaDeVariavel , contagem, fatorial, fibonacci, ordenador, verificaPrimo};