function decorador(
  classPrototype: any,
  nomeProperty: string | symbol,
): any {
  // console.log(classPrototype);
  // console.log(nomeProperty);
  let valorP: any
  console.log(valorP)

  return {
      get: () => valorP,
      set: (valor: string) => {
          if(typeof valor === 'string') {
              valorP = valor.split('').reverse().join('')
              return
          }
          return valor
      }
  }
}

export class UmPessoa {
  @decorador
  nome: string;
  @decorador
  public teste: string = '';
  @decorador
  sobrenome: string;
  idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
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
p1.teste = 'teste'
console.log(p1.teste)
// console.log(p1)
// p1.nome = 'dada'
// console.log(p1.nome)
// console.log(p1.nomeCompleto)
// const metodo = p1.metodo("Olá mundo!")
// console.log(metodo)
