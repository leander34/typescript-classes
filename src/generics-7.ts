// type predicate (predicados de tipos)
// quando vc muda de escopo, o typescript não sabe mais a outra funcao do outro escopo está fazendo (type gards)
// assim vc precisa um type predicate para valor que se aquele função retornar true o valor é um number
// assim o ts pode continuar a execucao de sua outro funcao (essa outro funcao provavelmente precisa que o valor seja de um tipo ex: number)
// por isso é necessario o type predicate


export function isNumber(valor: unknown): valor is number {
    return typeof valor === 'number'
}

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((soma, valor) => {
        if(isNumber(soma) && isNumber(valor)) {
            return soma + valor
        }
        return soma
    }, 0)

    return retorno
}

console.log(soma(1, 2, 3, 4))