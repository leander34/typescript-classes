export abstract class Personagem {
    protected abstract emoji: string
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagemAtacado: Personagem): void {
        if (personagemAtacado.vida - this.ataque <= 0) {
          personagemAtacado.vida = 0;
          console.log(`${personagemAtacado.nome} está MORTO!`);
          return;
        }
        this.bordao()
        personagemAtacado.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida!!!`)
    }

    abstract bordao(): void
}

export class Guerreira extends Personagem {
    protected emoji: string = '\u{1f9DD}'
    bordao(): void {
        console.log(this.emoji + ' Guerreira ESMAGA!!')
    }
}

export class Monstro extends Personagem {
    protected emoji: string = '\u{1f9DF}'
    bordao(): void {
        console.log(this.emoji + ' HAAAARRRRR MONSTRO PEGA')
    } 
}

const guerreira = new Guerreira('Guerreira', 100, 400)
const monstro = new Monstro('Monstro', 90, 1000)

// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
// guerreira.atacar(monstro)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
