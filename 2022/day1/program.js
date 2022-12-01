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

const elfsSorted = SortsElfsCalories(elfs);
console.log('❓ Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?')
console.log(`❗️ This elf carrying ${elfsSorted[0].Items.length} snacks contains ${elfsSorted[0].calories} calories.`);

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
