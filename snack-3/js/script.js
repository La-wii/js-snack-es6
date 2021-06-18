
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num1 = parseInt(prompt('Inserisci un numero compreso tra 1 e 9'));
let num2 = parseInt(prompt('Inserisci un numero compreso tra 1 e 9 più grande del primo'));

const position = array.filter((element) => {

    if (element >= num1 && element <= num2){
        return true;
    }
    return false;
});

console.log(position);