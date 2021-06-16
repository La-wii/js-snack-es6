// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 

const bici = [
    {
        nome: 'bici1',
        peso: 5
    },
    {
        nome: 'bici2',
        peso: 10
    },
    {
        nome: 'bici3',
        peso: 15
    }
]


// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let pesoMinore = bici[0];

for (let i = 1; i< bici.length; i++){
    if (bici[i].peso < pesoMinore.peso) {
        pesoMinore = bici[i];
    }
}

// destructuring
let {nome, peso} = pesoMinore;
// const {nome, peso} = pesoMinore;


// template literal
console.log(
    `
    ${nome}
    ${peso}
    `
);