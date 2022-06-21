export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade() {
      return this.idade
  }

  getNomeCompleto() {
      return this.nome + ' ' + this.sobrenome
  }
}

export class Aluno extends Pessoa {
  
  getNomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
    getNomeCompleto() {
      return this.nome + ' ' + this.sobrenome
  }
}
const pessoa = new Pessoa('leander', 'silveira', 19, '000.000.000-00')
const aluno = new Aluno('leande2w3ar', 'silveira', 29, '000.000.000-00')
const cliente = new Cliente('leandedadadr', 'silveira', 39, '000.000.000-00')
console.log(pessoa)
console.log(aluno)
console.log(cliente)

console.log(pessoa.getIdade())
console.log(aluno.getIdade())
console.log(cliente.getIdade())
console.log(cliente.nome)