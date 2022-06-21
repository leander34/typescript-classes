function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
    console.log(classPrototype);
    console.log(nomeMetodo);
    console.log(descriptor);

    return {
        value: function(...args: any[]) {
            return p1.nome + args[0]
        }
    }
}

export class UmPessoa {
    nome: string
    sobrenome: string
    idade: number
    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    @decorador
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g)
        const primeiroNome = palavras.shift()
        if(!primeiroNome) return
        this.nome = primeiroNome
        this.sobrenome = palavras.join(' ')
    }
}

const p1 = new UmPessoa('leander', 'silveira', 19)
// p1.metodo = () => 'dadadad'
console.log(p1.metodo('que'))

