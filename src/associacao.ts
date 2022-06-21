// não existe dependencia (entre Escritor e Ferramenta)
// um objeto usa o outro
// relacao mais fraca entre objetos

export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
      return this._ferramenta
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log("Não posso escrever sem ferramenta");
      return;
    }

    this.ferramenta.escrever()
  }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}

    get nome(): string {
        return this._nome
    }

    abstract escrever(): void

}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`)
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando...`)
    }
}

const escritor = new Escritor('leand')
const caneta = new Caneta('Bic')
const maquina = new MaquinaEscrever('tecs')

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.ferramenta = caneta
escritor.ferramenta = maquina
// escritor.ferramenta = null
escritor.escrever()

