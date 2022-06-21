// como se fossem paramentro de funcoes para interfaces e types
// Exemplo de uso é voce queria uma funcão sua tipo um filter
// se vc utilizar generics irá facilitar e ficará mais fácil o entendimento

interface PessoaProtocol<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocol2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocol<string, number> = {
  nome: "leander",
  sobrenome: "Silveira",
  idade: 19,
};

console.log(aluno1);

const aluno2: PessoaProtocol<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 29,
};

console.log(aluno2);

const aluno3: PessoaProtocol = {
  nome: "Maria",
  sobrenome: "Silveira",
  idade: 29,
};
console.log(aluno3);

const aluno4: PessoaProtocol2 = {
  nome: "Ana",
  sobrenome: "Silveira",
  idade: 49,
};
console.log(aluno4);
