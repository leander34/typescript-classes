var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNameSpace = "leander";
    var Pessoa = /** @class */ (function () {
        function Pessoa(nome) {
            this.nome = nome;
        }
        return Pessoa;
    }());
    MeuNamespace.Pessoa = Pessoa;
    var pessoaDoNameSpace = new Pessoa("leander");
    //   console.log(pessoaDoNameSpace);
    var OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nomeDoNameSpace = "santos";
    })(OutroNameSpace = MeuNamespace.OutroNameSpace || (MeuNamespace.OutroNameSpace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var constDoNameSpace = 'constante';
// const pessoaDoNameSpace = new MeuNamespace.Pessoa("lucas");
// console.log(pessoaDoNameSpace);
// console.log(MeuNamespace.nomeDoNameSpace);
// console.log(MeuNamespace.OutroNameSpace.nomeDoNameSpace);
// somente nas lib AMD e system
// e usar outFile no lugar de outDir
// pq para isso funcionar tudo precisa estar no mesmo arquivo
// npx tsc index.ts --outfile arquivo-compilado.js
/// <reference path="module.ts"/>
console.log(MeuNamespace.nomeDoNameSpace);
console.log(MeuNamespace.OutroNameSpace.nomeDoNameSpace);
console.log(constDoNameSpace);
var pessoa = new MeuNamespace.Pessoa('leanderrrrr');
console.log(pessoa);
