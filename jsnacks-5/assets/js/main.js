const listaNumero = []

for(let i = 0; i < 6; i++){

    const numero = parseInt(prompt('Inserisci un numero'));

    if (numero % 2 !== 0){
        listaNumero.push(numero);
    }
}

console.log(listaNumero);