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
  it("A função deve ser capaz de somar 2 numeros zerados", function () {
    const resultadoDaSoma = somarDoisNumeros(0, 0);
    expect(resultadoDaSoma).to.equal(0);
  });
  it("A função deve ser capaz de somar 2 numeros negativos", function () {
    const resultadoDaSoma = somarDoisNumeros(-25, -850);
    expect(resultadoDaSoma).to.equal(-875);
  });
});
