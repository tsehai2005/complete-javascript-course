`use strict`;
// Lecture 2 : Functions
/*function describeCountry(country, population, capitalCity) {
    const descCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return descCountry;
}
const fin = describeCountry('Finland', 6, 'Helinski');
console.log(fin);
const eth = describeCountry('Ethiopia', 100, 'Addis Ababa');
console.log(eth);
const tig = describeCountry('Tigray', 6, 'Mekelle');
console.log(tig);

// Function declaration and function expression
function percentageOfWorld1(population) {
    const peoplationPercentage = (population / 7900) * 100;
    return peoplationPercentage;

}
const chinaPeopulationInPercent = percentageOfWorld1(1441);
console.log(`China's peoplation in percent is ${chinaPeopulationInPercent} %`);

const EthiopiaPeoplationInPercent = percentageOfWorld1(100);
console.log(`Ethiopia's peoplation in percent is ${EthiopiaPeoplationInPercent} %`);

const TigrayPeoplationInPercent = percentageOfWorld1(6);
console.log(`Tigray's peoplation in percent is ${TigrayPeoplationInPercent} %`);

const percentageOfWorld2 = function (population) {
    const peoplationPercentage = (population / 7900) * 100;
    return peoplationPercentage;

}
console.log("=================================================================");
const chinaPeopulationInPercent2 = percentageOfWorld2(1000);
console.log(`China's peoplation in percent is ${chinaPeopulationInPercent2} %`);

const EthiopiaPeoplationInPercent2 = percentageOfWorld2(200);
console.log(`Ethiopia's peoplation in percent is ${EthiopiaPeoplationInPercent2} %`);

const TigrayPeoplationInPercent2 = percentageOfWorld2(60);
console.log(`Tigray's peoplation in percent is ${TigrayPeoplationInPercent2} %`);

// Arrow Function

const percentageOfWorld3 = population => (population / 7900) * 100;

const chinaPeopulationInPercent3 = percentageOfWorld3(2000);
console.log(`China's peoplation in percent is ${chinaPeopulationInPercent3} %`);

const EthiopiaPeoplationInPercent3 = percentageOfWorld3(300);
console.log(`Ethiopia's peoplation in percent is ${EthiopiaPeoplationInPercent3} %`);

const TigrayPeoplationInPercent3 = percentageOfWorld3(120);
console.log(`Tigray's peoplation in percent is ${TigrayPeoplationInPercent3} %`);

//Functions Calling Other Functions

function percentageOfWorld1(population) {
    const peoplationPercentage = (population / 7900) * 100;
    return peoplationPercentage

const describePopulation = function (country, population) {
    const countryPopulationPercent = percentageOfWorld1(population);
    return `${country} has ${population} million people,which is about ${countryPopulationPercent}% of the world`;
}
const describeCountryEtPopulation = describePopulation('Ethiopia', 1441);
console.log(describeCountryEtPopulation);
const describeCountryChiPopulation = describePopulation('China', 120);
console.log(describeCountryChiPopulation);
const describeCountryTigPopulation = describePopulation('Tigray', 12);
console.log(describeCountryTigPopulation);

const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;
let avgDolphin = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphin, avgKoalas);

const checkWinner = function (averageDolphin, averageKoalas) {
    if (averageDolphin >= 2 * averageKoalas) {
        console.log(`Dolphin win (${averageDolphin} vs. ${averageKoalas})`);
    }
    else if (averageKoalas >= 2 * averageDolphin) {
        console.log(`Koalas win (${averageKoalas} vs. ${averageDolphin})`);
    }
    else {
        console.log('No winner in this match');
    }
}
checkWinner(avgDolphin, avgKoalas);

avgDolphin = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphin, avgKoalas);
checkWinner(avgDolphin, avgKoalas);

// Introduction to array
function percentageOfWorld1(population) {
    const peoplationPercentage = (population / 7900) * 100;
    return peoplationPercentage
}

const population = [120, 1441, 12, 37];
console.log(population.length === 4);

const percentage = [percentageOfWorld1(population[0]),
percentageOfWorld1(population[1]), percentageOfWorld1(population[2]),
percentageOfWorld1(population[3])]
console.log(percentage);

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    else {
        return bill * 0.2;
    }
}
console.log(calcTip(100));
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//Introduction to Objects
let myCountry = {

    country: "Ethiopia",
    population: 120,
    capital: "Adiss Ababa",
    language: "Amharic",
    nighbours: ['Eritrea', 'Sudan', 'Kenya']
}
const Eth = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.nighbours.length} countries and a capital called ${myCountry.capital}`
console.log(Eth);

myCountry.population = myCountry.population - 2;
console.log(myCountry.population);
myCountry['population'] = myCountry['population'] + 2
console.log(myCountry['population']);

// Object Methods
const myCountry = {

    country: "Ethiopia",
    population: 120,
    capital: "Adiss Ababa",
    language: "Amharic",
    nighbours: ['Eritrea', 'Sudan', 'Kenya'],
    describe: function () {

        this.eth = `${this.country} has ${this.population} million ${this.language}-speaking people,
${this.nighbours.length} neighbouring countries and a capital called ${this.capital}`;
        return this.eth;
    },
    checkIsland: function () {
        this.isIsland = (this.nighbours.length === 0) ? true : false;
        return this.isIsland;
    }
}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//codding challenge 3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.markBMI = this.mass / (this.height ** 2);
        return this.markBMI;
    }
}
const jhon = {

    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.jhonBMI = this.mass / (this.height ** 2);
        return this.jhonBMI;
    }

}
if (mark.calcBMI() > jhon.calcBMI()) {

    console.log(`${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${jhon.fullName}(${jhon.calcBMI()})!`)
}
else {
    console.log(`${jhon.fullName}'s BMI(${jhon.calcBMI()}) is higher than ${mark.fullName}'s BMI(${mark.calcBMI()})!`)
}

// for loop
for (let voter = 1; voter <= 50; voter++) {

    console.log(`Voter number ${voter} is currently voting`);

}
//Loopi ng arrays and , braek and continuing

const population = [120, 1441, 12, 37];
const percentages2 = [];
function percentageOfWorld1(population) {
    const peoplationPercentage = (population / 7900) * 100;
    return peoplationPercentage;
}
for (i = 0; i < population.length; i++) {
    percentages2.push(percentageOfWorld1(population[i]));
}
console.log(percentages2);

//Loops in loop
const listOfNeighbours =
    [
        ['Canada', 'Mexico'],
        ['Spain'],
        ['Norway', 'Sweden', 'Russia']
    ];
for (let i = 0; i < listOfNeighbours.length; i++) {
    let listOfNeighbourInner = listOfNeighbours[i];
    for (let j = 0; j < listOfNeighbourInner.length; j++) {
        console.log(` Nighbour: ${listOfNeighbourInner[j]}`);
    }
}

const population = [120, 1441, 12, 37];
const percentages2 = [];
function percentageOfWorld1(population) {
    const peoplationPercentage = (population / 7900) * 100;
    return peoplationPercentage;
}

let i = 0;
while (i < population.length) {
    percentages2.push(percentageOfWorld1(population[i]));
    i++;
}
console.log(percentages2);

// codding challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    else {
        return bill * 0.2;
    }
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(bills, tips, totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / arr.length;
    return average;
}
console.log(calcAverage([10, 2, 3, 20]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));

*/



