// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 

const squadre = [
    {
        nome: 'squadra1',
        punti: 0,
        falli: 0
    },
    {
        nome: 'squadra2',
        punti: 0,
        falli: 0
    },
    {
        nome: 'squadra3',
        punti: 0,
        falli: 0
    },
    {
        nome: 'squadra4',
        punti: 0,
        falli: 0
    }
    
];


// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// (Utilizzate le arrow function). 
const random = (min,max) => Math.floor(Math.random() * (max - min) ) + min;

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.
const nuovoArray = [];

for (let i = 0; i < squadre.length; i++){
    let{nome, falli} = squadre[i];
    squadre[i].falli = random(1,10);
    nuovoArray.push({nome,falli});    
}

console.log(nuovoArray);



