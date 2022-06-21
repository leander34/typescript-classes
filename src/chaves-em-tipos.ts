type Veiculo = {
    marca: string
    ano: number
}

type Car = {
  brand: Veiculo["marca"]; // pega o valor que está dentro da chave marca em Veiculo
  year: Veiculo["ano"]; // pega o valor que está dentro da chave ano em Veiculo
  name: string;
};


const carro: Car = {
    brand: 'ford',
    year: 2020,
    name: 'fusion'
}

console.log(carro)