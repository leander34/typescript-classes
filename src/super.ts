export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
      return this.idade
  }

  getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome
  }
}

export class Aluno extends Pessoa {
    constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public nota: number
  ) {
      super(nome, sobrenome, idade, cpf)
  }
  getNomeCompleto(): string {
    return "veio do aluno " + super.getNomeCompleto()
  }

  teste(): void {
      console.log(this.getNomeCompleto())
  }
}

export class Cliente extends Pessoa {
    getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome
  }
  teste(): void {
      console.log(this.getNomeCompleto())
  }
}

const pessoa = new Pessoa('leander', 'silveira', 19, '000.000.000-00')
const aluno = new Aluno('leander', 'silveira', 29, '000.000.000-00', 9.0)
const cliente = new Cliente('leander', 'silveira', 39, '000.000.000-00')
// console.log(pessoa)
// console.log(aluno)
console.log(cliente)

// console.log(aluno.getNomeCompleto())
// console.log(cliente.getNomeCompleto())

aluno.teste()
cliente.teste()