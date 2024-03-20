const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

ages.sort((a, b) => a - b); 
const minAge = ages[0];
const maxAge = ages[ages.length - 1];


let medianAge;
if (ages.length % 2 === 0) {
    const midIndex = ages.length / 2;
    medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2; 
} else {
    const midIndex = Math.floor(ages.length / 2);
    medianAge = ages[midIndex];
}


const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;


const ageRange = maxAge - minAge;


const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);
console.log("Median age:", medianAge);
console.log("Average age:", averageAge);
console.log("Range of ages:", ageRange);
console.log("Absolute difference between minimum and average age:", minDiff);
console.log("Absolute difference between maximum and average age:", maxDiff);
