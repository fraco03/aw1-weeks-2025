"use strict";
/*
const marks = [-20, -5, -1, 100, -3, 30, 50]
const betterScores = []
for (let n of marks) {
    if(n>0)
        betterScores.push(n)
}

let NN = marks.length - betterScores.length

let min = Math.min(...betterScores)
let index = betterScores.indexOf(min)
betterScores.splice(index, 1)

min = Math.min(...betterScores)
index = betterScores.indexOf(min)
betterScores.splice(index, 1)

let avg=0;
for (let s of betterScores)
    avg+=s;

avg /= betterScores.length;
avg = Math.round(avg)
for (let i=0; i<NN+2; i++)
    betterScores.push(avg)

console.log(marks)
console.log(betterScores)

*/

const names="Luigi De Russis, Luca Scibetta, Fulvio Corno, Francesca Russo";

const namesSplit=names.split(",");
for (let i=0 ; i<namesSplit.length ; i++) 
    namesSplit[i]=namesSplit[i].trim()  //per togliere gli spazi

const acronimus=[];

for (let element of namesSplit) {
    let divisi=element.split(" ");
    let acronimo=""
    for (let tmp of divisi) {
        acronimo=acronimo+tmp[0];
    }
    acronimus.push(acronimo)
    acronimo.
}

console.log(acronimus.sort())