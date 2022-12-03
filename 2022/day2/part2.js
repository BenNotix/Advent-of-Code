const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');
let { performance } = require('perf_hooks');

const executionStart = performance.now();

const points = {
    A: 1, // Rock
    B: 2, // Paper
    C: 3 // Scissors
};

const situation = {
    X: 0, // Lose
    Y: 3, // Draw
    Z: 6 // Win
};

const answer = input
    .map((line) => {
        switch (line) {
            case "A X": // Rock => Scissor -- Lose
                return 3 + situation.X;
            case "A Y": // Rock => Rock -- Draw
                return 1 + situation.Y;
            case "A Z": // Rock => Paper -- Win
                return 2 + situation.Z;
            case "B X": // Paper => Rock -- Lose
                return 1 + situation.X;
            case "B Y": // Paper => Paper -- Draw
                return 2 + situation.Y;
            case "B Z": // Paper => Scissor -- Win
                return 3 + situation.Z;
            case "C X": // Scissor => Paper -- Lose
                return 2 + situation.X;
            case "C Y": // Scissor => Scissor -- Draw
                return 3 + situation.Y;
            case "C Z": // Scissor => Rock -- Win
                return 1 + situation.Z;
        }
    })
    .reduce((acc, score) => acc + score, 0);

const executionEnd = performance.now();
const ms = (executionEnd - executionStart) * 1000;
console.log("❓P2 » Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?")
console.log(`❗️P2 » Your total score is ${answer} (in  ${ms.toFixed(2)}ms).`);