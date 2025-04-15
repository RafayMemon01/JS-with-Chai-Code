// updtae Array

let teaTypes = ["herbel tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

console.log(teaTypes);

// Array Softcopy

let popularTeas = ["green tea" , "oolong tea" , "chai"]

let softCopyPopularTeas = popularTeas;

popularTeas.pop()
console.log(softCopyPopularTeas);
console.log(popularTeas);

// Array Hardcopy

let topCities = ["Berlin", "Singapore", "New York"]

let hardCopyTopCities = [...topCities];
let secondHardCopyTopCities = topCities.slice();

console.log(hardCopyTopCities);
console.log(secondHardCopyTopCities);

// Merging Or Concatenating Arrays

let EuropeanCities = ["Paris","Rome"];
let AsianCities = ["Singapore","Bangkok"];
let worldCities = EuropeanCities.concat(AsianCities);
console.log(worldCities);

// Finding in Array

let cityBucketList = ["Berlin", "Singapore", "New York"];

let isBerlinInList = cityBucketList.includes("Berlin");

console.log(isBerlinInList);

