export class VotingApp {
  public readonly polls: Record<string, number> = {};
  constructor(private ask: string, private options: string[]) {
    this.criarVotacao()
  } 

  vote(vote: string): void {
    if (vote in this.polls) {
      this.polls[vote]++;
    }
  }

  criarVotacao(): void {
    this.options.forEach((option) => {
      this.polls[option] = 0;
    });
  }

  showVoting(): void {
      console.log(this.ask)
      for(let option in this.polls) {
          console.log(option.toUpperCase() + ': ' + this.polls[option])
      }
  }
}

const linguagem = new VotingApp("Qual sua liguagem de votação preferida ?", [
  "js",
  "ts",
  "java",
]);


// linguagem.criarVotacao();
linguagem.vote("ts")
linguagem.vote("ts")
linguagem.vote("ts")
linguagem.vote("ts")
linguagem.vote('js')
linguagem.showVoting()
