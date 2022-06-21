export class Calculadora {
  constructor(public numero: number) {}

  add(num: number): this {
    this.numero += num;
    return this; // retorna o proprio objeto
  }

  sub(num: number): this {
    this.numero -= num;
    return this; // retorna o proprio objeto
  }

  div(num: number): this {
    this.numero /= num;
    return this; // retorna o proprio objeto
  } 

  mult(num: number): this {
    this.numero *= num;
    return this; // retorna o proprio objeto
  }
}

export class SubCalculadora extends Calculadora {
    pow(num: number): this {
        this.numero **= num
        return this
    }
}


const calculadora = new Calculadora(10)

// calculadora.add(5).mult(2).div(3).sub(1)
// console.log(calculadora.numero)

const subCalculadora = new SubCalculadora(10)
subCalculadora.pow(2)
console.log(subCalculadora.numero)



// padrao de projeto builder da GoF
// esse padrao de projeto vc inicia o construtor aos poucos

export class RequestBuilder {
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setUrl(url: string): this {
        this.url = url
        return this
    }

    send(): void {
        console.log(`Menssagem envia por ${this.method} para ${this.url}`)
    }
}

const request = new RequestBuilder()
request.setUrl('https://www.goggle.com').setMethod('post').send()