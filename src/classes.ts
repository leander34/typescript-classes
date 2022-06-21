export class Empresa {
    // posso declarar assim
    public readonly nome: string // poderia ser omitido o public nesse caso
    private readonly colaboradores: Colaborador[] = []
    protected readonly cnpj: string

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

const empresa1 = new Empresa('How', '11.111.111/0001-11')
const colaborador1 = new Colaborador('leander', 'silveira')
const colaborador2 = new Colaborador('Maria', 'santos')
const colaborador3 = new Colaborador('joao', 'camargo')
empresa1.adicionarColaborador(colaborador1)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)
// console.log(empresa1)
empresa1.mostrarColaboradores()
