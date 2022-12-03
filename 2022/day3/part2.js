const fs = require('fs');
const path = require('path');
const input = fs.readFileSync('input.txt', 'utf8');

const answer = input
    .match(/\w+\n\w+\n\w+/g)
    .map((group) => group.match(/(?<item>\w).*\n.*\k<item>.*\n.*\k<item>/))
    .map((match) => match.groups["item"])
    .map((item) =>
        item === item.toUpperCase()
        ? item.charCodeAt(0) - 65 + 27
        : item.charCodeAt(0) - 97 + 1
    )
    .reduce((acc, priority) => acc + priority, 0);

console.log("❓P2 » Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?");
console.log(`❗️P2 » The answer is ${answer}.`);

// ---
// https://jsbench.me/

// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

// ---