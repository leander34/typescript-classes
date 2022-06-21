interface TipoPessoa {
    nome: string
    sobrenome: string
    nomeCompleto(): void
}

interface TipoPessoa2 extends TipoPessoa{

}

const pessoaObj: TipoPessoa2 = {
    nome: 'leander',
    sobrenome: 'santos',
    nomeCompleto(): void {
        console.log(this.nome + " " + this.sobrenome);
    }
}

pessoaObj.nomeCompleto()

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {
    // poder ser protected ou public (nao poder ser private)
  }

  nomeCompleto(): void {
    console.log(this.nome + " " + this.sobrenome);
  }
}


const p1 = new Pessoa('leander', 'silveira')
p1.nomeCompleto()
