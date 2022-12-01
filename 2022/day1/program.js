const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const elfs = [];
let elf = getElfStatisitcs();
input.forEach(line => {
    const calories = parseInt(line);
    
    if (isNaN(calories)) {
        elfs.push(elf);
        elf = getElfStatisitcs();
        return;
    }
        elf.Items.push(calories);
        elf.calories += calories;
});

elfs.push(elf);

// Part 1
const elfsSorted = SortsElfsCalories(elfs);
console.log('❓P1 » Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?')
console.log(`❗️P1 » This elf carrying ${elfsSorted[0].Items.length} snacks contains ${elfsSorted[0].calories} calories.`);

// Part 2
const elfTop3 = elfsSorted.slice(0, 3);
const caloriesTotal = elfTop3.reduce((acc, elf) => acc + elf.calories, 0);
const itemsTotal = elfTop3.reduce((acc, elf) => acc + elf.Items.length, 0);
console.log('❓P2 » Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?')
console.log(`❗️P2 » These three elves carrying ${itemsTotal} snacks contains ${caloriesTotal} calories.`);


// -- Functions --
function getElfStatisitcs() {
    return {
        Items: [],
        calories: 0
    };
}

function SortsElfsCalories(elfs) {
    return elfs.sort((a, b) => b.calories - a.calories);
}
