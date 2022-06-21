// Composicao de decoradores

interface Constructor {
    new (...args: any[]): any
}


@outroDecorador
@inverteCoisas("valores", "coisasasa") // nesse caso já executamos
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log("Sou a classe animal");
  }
}

function inverteCoisas(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log("Sou o decorator e recebi", target);
    return class extends target {
      public idade: number = 11;
      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]) + " " + param1;
        this.cor = this.inverte(args[1]) + " " + param2;
      }

      inverte(valor: string): string {
        return valor.split("").reverse().join("");
      }
    };
  };
}

function outroDecorador(target: Constructor) {
    console.log('segundo construtor')
    return target 
}

// const animal = new Animal("cachorro", "preto e branco")
// console.log(animal)
