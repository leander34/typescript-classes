type CoresObj = typeof coresObj // CoresObj é do tipo do objeto coresObj
type CoresChaves = keyof CoresObj // keyof precisa ser usado especificadamente com um type

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue'
}

export function traduzCor(cor: CoresChaves, cores: CoresObj): string {
  return cores[cor];
}

console.log(traduzCor("azul", coresObj));
console.log(traduzCor("vermelho", coresObj));