const { somarDoisNumeros } = require("../src/calculadora");
const { expect } = require("chai");

describe("Testes da Função de Soma", function () {
  it("A função deve ser capaz de soomar dois numeros positivos", function () {
    const resultadoDaSoma = somarDoisNumeros(3, 5);
    expect(resultadoDaSoma).to.equal(8);
  });

  it("A função deve ser capaz de somar um numero positivo e um numero negativo ", function () {
    const resultadoDaSoma = somarDoisNumeros(50, -15);
    expect(resultadoDaSoma).to.equal(35);
  });
});
