// Questão 1
(function () {
  const a = 10;
  const b = 20;
  const c = a * b;
  const d = a + b + c;
  console.log(`
  Questão 1:
  a:${a}
  b:${b}
  c:${c}
  d:${d}
  Média:${(a + b + c + d) / 4}`);
}());

// Questão 2
(function () {
  const salario = 3000;
  let indiceReajustado;
  // Tabela reajuste:
  // | Salário           | Percentual de reajuste |
  // | 0 - 2000.00       | 15%                    |
  // | 2000.01 - 4000.00 | 12%                    |
  // | Acima de 4000     | 10%                    |
  if (salario <= 2000) indiceReajustado = 0.15;
  else if (salario <= 4000) indiceReajustado = 0.12;
  else indiceReajustado = 0.1;
  const valorReajustado = salario * indiceReajustado;
  const novoSalario = salario + valorReajustado;
  console.log(`
  Questão 2:
  Novo Salário: R$ ${novoSalario.toFixed(2)}
  Valor Reajustado: R$ ${valorReajustado.toFixed(2)}
  Índice Reajustado: ${indiceReajustado * 100}%`);
}());

// Questão 3
(function () {
  const custoBase = 50;
  const custoMinicurso = 20;
  const custoTraducao = 10;
  const opcaoMinicurso = 'S';
  const opcaoTraducao = 'S';
  let custoTotal = custoBase;
  if (opcaoMinicurso === 'S') custoTotal += custoMinicurso;
  if (opcaoTraducao === 'S') custoTotal += custoTraducao;
  console.log(`
  Questão 3:
  Valor da Inscrição: R$ ${custoTotal.toFixed(2)}`);
}());

// Questão 4
(function () {
  const tamAmostra = 50;
  // Inicializa um array vazio do tamanho da amostra da pesquisa
  // Para cada item, escolhe um número entre 0 e 1
  const arrSexo = [...Array(tamAmostra)].map(() => Math.floor(Math.random() * 2));
  // Para cada item, escolhe um número entre 0 e 20
  const arrQtdFilme = [...Array(tamAmostra)].map(() => Math.floor(Math.random() * 20));
  // Homem = 0; Mulher = 1; Quantidade de mulheres é a soma de todos elementos do array
  const qtdMulheres = arrSexo.reduce((a, b) => a + b, 0);
  const qtdAcimaDez = arrQtdFilme.filter((qtd) => qtd > 10).length;
  const percentMulheres = (qtdMulheres / tamAmostra) * 100;
  console.log(`
  Questão 4:
  Quantidade de mulheres: ${qtdMulheres}
  Quantidade de pessoas que assistiram mais que 10 filmes: ${qtdAcimaDez}
  Percentual de mulheres: ${percentMulheres.toFixed(1)}%`);
}());

// Questão 5
(function () {
  const NOTA1 = [7, 7, 5.5, 6, 6, 7, 9, 6.8, 6.5, 6];
  const NOTA2 = [7.5, 8, 6, 6, 6.5, 6, 8, 7.2, 7.5, 8];
  const qtdAlunos = NOTA1.length === NOTA2.length ? NOTA1.length : 10;
  // Inicializa um array vazio do tamanho do número de alunos
  // Para cada item, calcula a média dos dois valores no mesmo índice
  const MEDIAS = [...Array(qtdAlunos)].map((e, i) => ((NOTA1[i] + NOTA2[i]) / 2));
  const qtdAcimaNove = MEDIAS.filter((e) => e >= 9).length;
  // Soma de todas as notas, divido pela quantidade de notas
  const mediaGeral = MEDIAS.reduce((a, b) => a + b, 0) / MEDIAS.length;
  console.log(`
  Questão 5:
  Quantidade de alunos conceito A: ${qtdAcimaNove}
  Média geral da turma: ${mediaGeral.toFixed(1)}`);
}());
