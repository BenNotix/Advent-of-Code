const fs = require('fs');
const path = require('path');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const answer = input
    .map((line) => [
        line.substring(0, line.length / 2),
        line.substring(line.length / 2, line.length),
    ])
    .map(
        ([compA, compB]) =>
            [...compA].filter((item) => compB.includes(item)) [0]
    )
    .map((item) => 
    item == item.toUpperCase()
        ? item.charCodeAt(0) - 65 + 27
        : item.charCodeAt(0) - 97 + 1
    )
    .reduce((acc, priority) => acc + priority, 0);

console.log("❓P1 » Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?");
console.log(`❗️P1 » The answer is ${answer}.`);