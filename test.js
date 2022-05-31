const functions = require('./algoritimos.js');


describe("Troca de Variável", () => {
    test('Inverte os valores das variaveis', () => {
        expect(functions.trocaDeVariavel(1, 2)).toEqual([2, 1])
    });

    test("Se os valores das variaveis forem iguais permanecem na mesma ordem", () => {
        expect(functions.trocaDeVariavel(1, 1)).toEqual([1, 1])
    })
})

describe("Fatorial",() =>{
    test("O fatorial de 5 deve ser 120", () =>{
        expect(functions.fatorial(5)).toEqual(120);
    })

    test("Se o valor do fatorial for negativo o valor deve ser 0", () =>{
        expect(functions.fatorial(-1)).toEqual(NaN);
    })
})

describe("Fibonacci", () =>{
    test("A sequencia de fibonnaci de 5 elementos deve ser", () =>{
        expect(functions.fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    })

    test("se a sequencia for negativa deve retornar um array vazio", () => {
        expect(functions.fibonacci(-1)).toEqual([]);
    })
})

describe("Ordenação", () => {
    test("Se receber uma lista desordenada deve ordendar do menor para o maior", () => {
        expect(functions.ordenador([5,3,9,4])).toEqual([3,4,5,9]);
    })

    test("Se elemento não for uma lista deve retornar lista vazia", () => {
        expect(functions.ordenador("Definitivamente não sou uma lista")).toEqual([]);
    })
})

describe("Contagem", () => {
    test("Se tiver 5 elementos com valor maior que 6 deve retornar 5", () => {
        expect(functions.contagem([1,1,1,7,7,7,7,7])).toEqual(5);
    })

    test("Se não tiver nenhum elemento deve retornar 0", () => {
        expect(functions.contagem([])).toEqual(0);
    })
})

describe("Verifica Primo", () => {
    test("Deve retornar true para um número primo", () => {
        expect(functions.verificaPrimo(5)).toEqual(true);
    })

    test("Deve retornar false para um número não primo", () => {
        expect(functions.verificaPrimo(4)).toEqual(false);
    })
})



