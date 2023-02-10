"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
// Questão 1
(function () {
  var a = 10;
  var b = 20;
  var c = a * b;
  var d = a + b + c;
  console.log("\n  Quest\xE3o 1:\n  a:".concat(a, "\n  b:").concat(b, "\n  c:").concat(c, "\n  d:").concat(d, "\n  M\xE9dia:").concat((a + b + c + d) / 4));
})();

// Questão 2
(function () {
  var salario = 3000;
  var indiceReajustado;
  // Tabela reajuste:
  // | Salário           | Percentual de reajuste |
  // | 0 - 2000.00       | 15%                    |
  // | 2000.01 - 4000.00 | 12%                    |
  // | Acima de 4000     | 10%                    |
  if (salario <= 2000) indiceReajustado = 0.15;else if (salario <= 4000) indiceReajustado = 0.12;else indiceReajustado = 0.1;
  var valorReajustado = salario * indiceReajustado;
  var novoSalario = salario + valorReajustado;
  console.log("\n  Quest\xE3o 2:\n  Novo Sal\xE1rio: R$ ".concat(novoSalario.toFixed(2), "\n  Valor Reajustado: R$ ").concat(valorReajustado.toFixed(2), "\n  \xCDndice Reajustado: ").concat(indiceReajustado * 100, "%"));
})();

// Questão 3
(function () {
  var custoBase = 50;
  var custoMinicurso = 20;
  var custoTraducao = 10;
  var opcaoMinicurso = 'S';
  var opcaoTraducao = 'S';
  var custoTotal = custoBase;
  if (opcaoMinicurso === 'S') custoTotal += custoMinicurso;
  if (opcaoTraducao === 'S') custoTotal += custoTraducao;
  console.log("\n  Quest\xE3o 3:\n  Valor da Inscri\xE7\xE3o: R$ ".concat(custoTotal.toFixed(2)));
})();

// Questão 4
(function () {
  var tamAmostra = 50;
  // Inicializa um array vazio do tamanho da amostra da pesquisa
  // Para cada item, escolhe um número entre 0 e 1
  var arrSexo = (0, _toConsumableArray2["default"])(Array(tamAmostra)).map(function () {
    return Math.floor(Math.random() * 2);
  });
  // Para cada item, escolhe um número entre 0 e 20
  var arrQtdFilme = (0, _toConsumableArray2["default"])(Array(tamAmostra)).map(function () {
    return Math.floor(Math.random() * 20);
  });
  // Homem = 0; Mulher = 1; Quantidade de mulheres é a soma de todos elementos do array
  var qtdMulheres = arrSexo.reduce(function (a, b) {
    return a + b;
  }, 0);
  var qtdAcimaDez = arrQtdFilme.filter(function (qtd) {
    return qtd > 10;
  }).length;
  var percentMulheres = qtdMulheres / tamAmostra * 100;
  console.log("\n  Quest\xE3o 4:\n  Quantidade de mulheres: ".concat(qtdMulheres, "\n  Quantidade de pessoas que assistiram mais que 10 filmes: ").concat(qtdAcimaDez, "\n  Percentual de mulheres: ").concat(percentMulheres.toFixed(1), "%"));
})();

// Questão 5
(function () {
  var NOTA1 = [7, 7, 5.5, 6, 6, 7, 9, 6.8, 6.5, 6];
  var NOTA2 = [7.5, 8, 6, 6, 6.5, 6, 8, 7.2, 7.5, 8];
  var qtdAlunos = NOTA1.length === NOTA2.length ? NOTA1.length : 10;
  // Inicializa um array vazio do tamanho do número de alunos
  // Para cada item, calcula a média dos dois valores no mesmo índice
  var MEDIAS = (0, _toConsumableArray2["default"])(Array(qtdAlunos)).map(function (e, i) {
    return (NOTA1[i] + NOTA2[i]) / 2;
  });
  var qtdAcimaNove = MEDIAS.filter(function (e) {
    return e >= 9;
  }).length;
  // Soma de todas as notas, divido pela quantidade de notas
  var mediaGeral = MEDIAS.reduce(function (a, b) {
    return a + b;
  }, 0) / MEDIAS.length;
  console.log("\n  Quest\xE3o 5:\n  Quantidade de alunos conceito A: ".concat(qtdAcimaNove, "\n  M\xE9dia geral da turma: ").concat(mediaGeral.toFixed(1)));
})();