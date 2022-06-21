// um funcão pode variar sua saida dependendo dos parametros que receber
type Adder = {
    (x: number): number
    (x: number, y: number): number
    (x: number, y: number, ...agrs: number[]): number
}

const adder: Adder = (x: number, y?: number, ...agrs: number[]) => {
    if(agrs.length > 0) return agrs.reduce((soma, valor) => soma + valor, 0) + x + (y || 0)
    return x + (y ?? 0)
}

console.log(adder(10));
console.log(adder(10, 8));
console.log(adder(10, 8, 2, 6));
