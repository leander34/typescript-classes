// funcionam melhor juntas mas é possivel viverem sozinhas (igual na associacao)
// um objeto precisa do outro
// relacao um pouco mais forte do objetos

export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = []

    inserirProdutos(...produtos: Produto[]) {
        this.produtos.push(...produtos)
    }

    quantidadeProdutos(): number {
        return this.produtos.length
    }

    valorTotal(): number {
        return Math.round(this.produtos.reduce((soma, produto) => soma + produto.preco, 0))
    }
}


export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const caneta = new Produto("caneta", 1.9);
const camiseta = new Produto("camiseta", 119.9);
const caneca = new Produto('caneca', 19.9)

const carrinho = new CarrinhoDeCompras()
carrinho.inserirProdutos(caneta, camiseta, caneca)
console.log(carrinho.quantidadeProdutos())
console.log(carrinho.valorTotal())