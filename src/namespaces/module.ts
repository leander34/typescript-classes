namespace MeuNamespace {
  export const nomeDoNameSpace = "leander";
  export class Pessoa {
    constructor(public nome: string) {}
  }

  const pessoaDoNameSpace = new Pessoa("leander");
//   console.log(pessoaDoNameSpace);

  export namespace OutroNameSpace {
    export const nomeDoNameSpace = "santos";
  }
}

const constDoNameSpace = 'constante'



// const pessoaDoNameSpace = new MeuNamespace.Pessoa("lucas");
// console.log(pessoaDoNameSpace);
// console.log(MeuNamespace.nomeDoNameSpace);
// console.log(MeuNamespace.OutroNameSpace.nomeDoNameSpace);
