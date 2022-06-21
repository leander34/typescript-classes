// somente nas lib AMD e system
// e usar outFile no lugar de outDir
// pq para isso funcionar tudo precisa estar no mesmo arquivo
// npx tsc index.ts --outfile arquivo-compilado.js
/// <reference path="module.ts"/>

console.log(MeuNamespace.nomeDoNameSpace)
console.log(MeuNamespace.OutroNameSpace.nomeDoNameSpace)
console.log(constDoNameSpace)

const pessoa = new MeuNamespace.Pessoa('leanderrrrr')
console.log(pessoa)
