export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

// nesse casso o typescript conseguiu inferir os tipos
// const pessoa1 = new Pessoa('leander', 19)
// const pessoa2 = new Pessoa(["leander"], 19);
// const pessoa3 = new Pessoa(["leander"], { idade: 19});
// const pessoa4 = new Pessoa<string, number>("leander", 19);

export class Pilha<T> {
    private contador = 0
    private elements: { [key: number]: T} = {}

    push(element: T): void {
        this.elements[this.contador] = element
        this.contador++
    }

    pop(): T | void {
        if(this.isEmpty()) return undefined
        this.contador--
        const element = this.elements[this.contador]
        delete this.elements[this.contador];
        return element
    }

    isEmpty(): boolean {
        return this.contador === 0
    }

    get length(): number {
        return this.contador
    }

    showStack(): void {
        for(let chave in this.elements) {
            console.log(this.elements[chave])
        }
    }
}
// como os valores forem inicializados depois o ts não consegue inferir
const pilha = new Pilha<number>()
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.pop()
pilha.showStack()
pilha.push(100)
pilha.showStack();
console.log(pilha.isEmpty());
console.log(pilha.length);

