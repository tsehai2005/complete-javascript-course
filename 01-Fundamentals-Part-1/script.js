/*
let js = "amazing";
console.log(23 + 12 + 40 - 29)
console.log('Tsegay');

let firstName = 'Tsegay';
console.log(firstName);

//Variable name Convention

let tsegay_hailemariam = "TH";
let $const = 27;
let person = "Tsegay";
let PI = 3.14;
let jobTitle = "Frontend Developer";

//Assignment
//Values and Variables

let country = 'Ethiopia';
let continent = 'Africa';
let population = 100;
console.log(country, continent, population);

// Javascript data types

true;
console.log(true);
let isJsFun = true;
console.log(typeof true);
console.log(typeof 23);
console.log(typeof isJsFun);
console.log(typeof "Tsegay");
isJsFun = "Yes";
console.log(typeof isJsFun);

let tseg;
console.log(tseg);
console.log(typeof tseg)

tseg = "Tsegay";
console.log(typeof tseg);
console.log(typeof null);

//Data types

let isIsland = false;
let language;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);


// let const and var


// Basic operators
const country = "Ethiopia";
const continent = "Africa";
let language = "Amharic";
let population = 100;
console.log(population / 2);
population++;
console.log(population);
population--;
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population > averagePopulation);
const descrption = country + " is in " + continent + " and its " + population + " million people speak " + language;
console.log(descrption)


// Coding challenge #1
// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;


const johnBMI = johnWeight / (johnHeight * johnHeight);
const markBMI = markWeight / (markHeight * markHeight);
const markHigherBMI = (markBMI > johnBMI);

console.log(markBMI, johnBMI, markHigherBMI);


//template literals

const country = "Ethiopia";
const continent = "Africa";
let language = "Amharic";
let population = 100;
const descrption = `${country} is in ${continent} and its ${population} million
people speak ${language}`;
console.log(descrption)

const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("He can drive now 🚗");
}
else {
    const yearsLeft = 18 - age;
    console.log(`He is too young to drive. he left ${yearsLeft} years to drive`)
}
const country = "Ethiopia";
const continent = "Africa";
let language = "Amharic";
let population = 10;
if (population > 33) {
    console.log(`${country}'s population is more tha average`);
}
else {
    console.log(`${country}'s population is ${33 - population} million below average 👍`);
}

// conditional if els statement

const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

const johnBMI = johnWeight / (johnHeight * johnHeight);
const markBMI = markWeight / (markHeight * markHeight);
if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI})`);
}
else {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}



// type conversion and type coercion

console.log('19' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' > 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// equality operator (== vs ===)

const numNeighbours = Number(prompt("How many neighbour countries does your country have ? "));
if (numNeighbours === 1) {
    console.log('Your country has only 1 border!');
}
else if (numNeighbours === 2) {
    console.log('Your country has only 2 border!');
}
else if (numNeighbours === 3) {
    console.log('Your country has only 3 border!');
}
else if (numNeighbours > 3) {

    console.log("Your country has more tha 3 border");
}
else {
    console.log('No border!');

}


// Logical Operators

const isEnglishSpoken = true;
const isPopulationLessThan50 = true;
const isIsland = false;
if (isEnglishSpoken && isPopulationLessThan50 && !isIsland) {
    console.log('You should live in Ethiopia ❤️');
}
else {
    console.log('Ethiopia does not meet your criteria');
}

// Coding Challenge #3

// const dolphineAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// if (dolphineAverage > koalasAverage) {

//     console.log('Dolphine is the winner');

// }
// else if (dolphineAverage === koalasAverage) {

//     console.log('The match finished in draw');

// }
// else {
//     console.log('Koalas is the winner');
// }
// Bonus
const dolphineScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;
console.log(dolphineScore, koalasScore);

if (dolphineScore > koalasScore && dolphineScore >= 100) {
    console.log('The winner is dolphine 🏆');
}
else if (koalasScore > dolphineScore && koalasScore >= 100) {
    console.log('The winner is koalas 🏆');
}
else if (koalasScore === dolphineScore && dolphineScore >= 100) {
    console.log('Both koalas and dolphine are the winners🏆');
}

else {
    console.log('No winner at all😡');
}
//Switch Statemenet
const language = 'arabic';
switch (language) {

    case 'chinese':
        console.log("MOST number of native speakers! 😳");
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers 🎆');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}


//condtional operator Assignment
const population = 10;
population > 33 ? console.log(`Ethiopia's population is more than average.`) : console.log(`Ethiopia's
population is less than average.`);



// Coding challenge #4

const bill = 40;
let tip
bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill} the tip was ${0.15 * bill} and 
the total value is ${bill + (0.15 * bill)}`) : console.log(`The bill was ${bill} the tip was ${0.2 * bill} and 
the total value is ${bill + (0.2 * bill)}`);

*/
