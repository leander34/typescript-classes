export class Empresa {
    // posso declarar assim
    public readonly nome: string // poderia ser omitido o public nesse caso
    protected readonly colaboradores: Colaborador[] = [] // deixa disponivel para subclasses
    protected readonly cnpj: string // somente a classe super tem acesso

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores() {
        this.colaboradores.forEach(colaborador => console.log(colaborador))
    }
}

export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string) {}
}


export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/0001-11')
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop()
        if(colaborador) return colaborador
        return null
    }
}

const empresa1 = new Empresa('How', '11.111.111/0001-11')
const empresa2 = new Udemy()
const colaborador1 = new Colaborador('leander', 'silveira')
const colaborador2 = new Colaborador('Maria', 'santos')
const colaborador3 = new Colaborador('joao', 'camargo')
empresa2.adicionarColaborador(colaborador1)
empresa2.adicionarColaborador(colaborador2)
empresa2.adicionarColaborador(colaborador3)
console.log(empresa1)
empresa2.mostrarColaboradores()
console.log(empresa2.popColaborador())
