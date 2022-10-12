// LOOPING EVENT
const fruit = ['Banana', 'Guava', 'Durian', 'Orange', 'Tin'];
const word = 'Lorem Ipsum';
let text = " ";
const allFruits = document.getElementById('text');


for(let a=0; a<=fruit.length; a++){
    console.log(fruit[a]);
    text += `Adding some ${fruit[a]} <br>`;
    
}
allFruits.innerHTML = text;

// for(let b=0; b<=word.length; b++){
//     console.log(word[b]);
// }

const car = [
    {
        mpv : 'Avanza',
        lcgc : 20,
    },
    {
        mpv : 'Xenia',
        lcgc : 30,
    },
]

const acces = car[1].mpv;
console.log(acces);