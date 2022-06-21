// refinar o retorno de uma funcao que pode receber varios tipo de parametros

export function somaCoisas(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`
}

// console.log(somaCoisas(1, 8));
// console.log(somaCoisas('lea', 'nder'));


type Pessoa = {
    tipo: 'pessoa'
    nome: string
}

type Animal = {
    tipo: 'animal'
    cor: string
}

type PessoaOuAnimal = Pessoa | Animal

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa'
    constructor(public nome: string) {}
}

function mostraNome(objeto: PessoaOuAnimal) {
    // if ("nome" in objeto) console.log(objeto.nome);
    // if (objeto instanceof Aluno) console.log(objeto.nome);
    switch(objeto.tipo) {
        case 'pessoa':
            console.log(objeto.nome)
            return
        case 'animal':
            console.log('Isso é um animal ' + objeto.cor)
            return    
    }
}


const aluno = new Aluno('leand')
console.log(aluno.tipo)
mostraNome(aluno)
mostraNome({ tipo: 'animal', cor: 'Rosa'});