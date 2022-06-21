export abstract class TipoPessoa {
    protected abstract nome: string
    protected abstract sobrenome: string
    protected abstract nomeCompleto(): void
}

export class Pessoa extends TipoPessoa {
  constructor(protected nome: string, public sobrenome: string) { // poder ser protected ou public (nao poder ser private)
    super();
  }

  nomeCompleto(): void {
    console.log(this.nome + " " + this.sobrenome);
  }
}

const p1 = new Pessoa('leander', 'silveira')
p1.nomeCompleto()




// type TipoPessoa = {
//     nome: string
//     sobrenome: string
//     nomeCompleto(): void
// }


// export class Pessoa implements TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {}

//   nomeCompleto(): void {
//     console.log(this.nome + " " + this.sobrenome);
//   }
// }

// const p1 = new Pessoa('leander', 'silveira')
// p1.nomeCompleto()

