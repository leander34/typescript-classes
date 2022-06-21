// utility types

// Record 
const objeto1: Record<string, string | number> = {
    nome: 'leander',
    sobrenome: 'Silveira',
    idade: 19
}

console.log(objeto1)

type PessoaProtocol = {
    nome?: string
    sobrenome?: string
    idade?: number
}

// Required
// transforma todo que era opcional em obrigatório
type PessoaRequired = Required<PessoaProtocol>

// Partial
// transforma tudo que era obrigatório em opcional 
type PessoaPartial = Partial<PessoaRequired>

// Readonly
// transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>

// Pick
// Você escolha que quer pegar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>

const objeto2: PessoaRequired = {
  nome: "leander",
  sobrenome: "Silveira",
  idade: 19,
};

console.log(objeto2)

// Exclude e Extract
type ABC = 'A' | 'B' | 'C'
type CDE = "C" | "D" | "E";

// Vai pegar tudo que tem em ABC e não tem em CDE
type TipoExclude = Exclude<ABC, CDE>
// Vai pegar tudo que tem em ABC e em CDE
type TipoExtract = Extract<ABC, CDE>

type AccountMongo = {
    _id: string
    nome: string
    sobrenome: string
    idade: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string
}

const accountMongo: AccountMongo = {
    _id: 'iadabdi1h9da9daj',
    nome: 'leander',
    sobrenome: 'silveira',
    idade: 19
}

export function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo
    return {...accountData, id: _id}
}

const accountApi = mapAccount(accountMongo)
console.log('------------------')
console.log(accountApi)


// module mode
export default 1