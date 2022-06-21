export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  get cpf(): string {
      return this._cpf.replace(/\D/g, '')
  }
  set cpf(valor) {
      this._cpf = valor
  }
}

const pessoa = new Pessoa('leander', 'silveira', 19, '000.000.000-00')
console.log(pessoa.cpf)
pessoa.cpf = '123.000.000-00'
console.log(pessoa.cpf)



