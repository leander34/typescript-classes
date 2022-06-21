
// um classe que representa um votacao em um aplicativo de votacoes que pode ter varias votacoes juntas
// esse classe terá a pergunta dessa votacao, as opcoes e a quantidade de votos de cada opcao

type PollProtocol = {
    [k: string]: number
}

export class Poll {
    private readonly polls: PollProtocol = {}
    constructor(public ask: string, private options: string[]) {
        this.criarVotacao()
    }

    vote(vote: string): void {
        if(vote in this.polls) {
            this.polls[vote]++
        }
    }

    criarVotacao(): void {
        this.options.forEach(option => {
            this.polls[option] = 0
        })
    }

    get votacoes() {
        return this.polls
    }
}

// esse classe vai receber varias votacoes individuais
// mostrará os resultados de todas votações
export class VotingApp {
    private readonly allPools: Poll[] = []

    addPoll(poll: Poll): void {
        this.allPools.push(poll)
    }

    showResults() {
        this.allPools.forEach(poll => {
            console.log(poll.ask)
            for(let chave in poll.votacoes) {
                console.log(chave, poll.votacoes[chave])
            }

            console.log("");
            console.log('#######')
            console.log("");
        })
    }
}

const liguagem = new Poll("Qual sua liguagem de votação preferida ?", [
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
]);

const cores = new Poll("Qual sua cor preferida ?", [
  "Vermelho",
  "Verde",
  "Azul",
  "Rosa",
]);

liguagem.vote("JavaScript");
liguagem.vote("JavaScript");
liguagem.vote("JavaScript");

const meuAppDeVotacao = new VotingApp()
meuAppDeVotacao.addPoll(liguagem)
meuAppDeVotacao.addPoll(cores);
meuAppDeVotacao.showResults()