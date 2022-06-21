// const path = require("path");

// module.exports = {
//   mode: "development", // fica mais rapido pq nao precisa fazer minificacoes
//   entry: "./src/index.ts", // arquivo ts (ou js) que será lido e transformado em bundle
//   module: {
//     rules: [
//       // regras
//       {
//         test: /\.tsx?$/, // tipos de extensoes que seram lidas .ts(ou .tsx)
//         loader: "ts-loader", // usando o ts-loader
//         exclude: /node_modules/, // excluindo os arquivos .ts da pasta node_modules
//         // options: {
//         //   configFile: "tsconfig.frontend.json", // mudei o arquivo de configuracao do typescript. Esse arquivo agora é somente responsavel pelo frontend
//         // },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   output: {
//     filename: "bundle.js", // nome do arquivo que será gerado
//     path: path.resolve(__dirname, "webpack", "assets", "js"), // destino desse arquivo
//   },
//   devtool: "source-map", // ferramenta que auxilia em achar erros no codigo ts
// };
