export class Pessoa {
    static idadePadrao = 0
    static cpfPadrao = '000.000.000-00'
  constructor(
    private nome: string,
    private sobrenome: string,
    public idade: number,
    private _cpf: string
  ) {}

  metodoPadrao(): void {
      console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
      return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
  
}

const pessoa = new Pessoa('leander', 'silveira', 19, '000.000.000-00')
const pessoa2 = Pessoa.criaPessoa('joao', 'carlos')
console.log(pessoa2)
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
pessoa2.metodoPadrao()




