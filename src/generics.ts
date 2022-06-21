// posso passar o que foi inferido para um type assim
type Callbackfn<U> = (value: U, index?: number, array?: U[]) => boolean;

// coloco <QUALQUER COISA> antes de chamar a função para que o javascript infira o tipo dos parametros
function meuFilter<T>(array: T[], callbackfn: Callbackfn<T>): T[] {
  // passando o tipo inferido para o type
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((valor) => valor < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);

console.log(arrayFiltrado);
