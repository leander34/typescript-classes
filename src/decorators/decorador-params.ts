function decorador(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
} // somente para assistir esse decorador
// n retorna nada

export class UmPessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }


  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(" ");
  }
}

const p1 = new UmPessoa("leander", "silveira", 19);
const metodo = p1.metodo("que")
console.log(metodo)
