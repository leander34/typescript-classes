// declaration merging
// unicao entre todas as interfaces (diferente dos types que dão erro)

interface Pessoa {
    nome: string
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number
}

const pessoa: Pessoa = {
    nome: 'leander',
    sobrenome: 'silveira',
    enderecos: ['rua guapore'],
    idade: 19
}

console.log(pessoa)