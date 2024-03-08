const palavra = 'hugo';
let newPalavra = [];

for (let c = 0; c <= palavra.length; c++) {
    newPalavra[c] = palavra[palavra.length - c]; 
}

newPalavra = newPalavra.join("");

console.log(newPalavra);