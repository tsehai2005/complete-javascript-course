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
*/
