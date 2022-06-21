type ObjetChaveFn = <O, K extends keyof O>(object: O, chave: K) => O[K]

const obterChave: ObjetChaveFn = (object, chave) => object[chave];


const animal = {
    cor: 'preto',
    vacinas: ['xT-90', 'raiva'],
    idade: 12
}

const cor = obterChave(animal, 'cor')
const vacinas = obterChave(animal, 'vacinas')
console.log(cor, vacinas, obterChave(animal, 'idade'))



// type AnimalObj = {
//     cor: string
//     vacinas: string[]
//     idade: number
// }

// type FnKey = keyof AnimalObj


// function getValue<O, K extends keyof O>(object: O, chave: K): O[K] {
//     return object[chave]
// }

const getValue = <O, K extends keyof O>(object: O, chave: K): O[K] => object[chave];


const cor2 = getValue(animal, 'cor')
console.log(cor2)