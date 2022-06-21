const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumeros);

// nesse caso foi inferido
async function promiseAsync(algo: number) {
  return algo;
}

promiseAsync(100).then(console.log);

// nesse tipo de promise o javacript não consegue inferir
function myPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("leander");
    }, 1000);
  });
}

myPromise().then(console.log);
