@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log("Sou a classe animal");
  }
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log("Sou o decorator e recebi", target);

  return class extends target {
    public idade: number = 11;
    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split("").reverse().join("");
    }
  };
}

// const animal = new Animal("cachorro", "preto e branco");
// console.log(animal);
