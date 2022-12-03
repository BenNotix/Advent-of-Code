const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');
let { performance } = require('perf_hooks');

const executionStart = performance.now();

const points = {
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3 // Scissors
};

const situation = {
    win: 6,
    lose: 0,
    draw: 3
};

const answer = input
    .map((line) => {
        switch (line) {
            case "A X": // Rock-Rock
                return points.X + situation.draw;
            case "A Y": // Rock-Paper
                return points.Y + situation.win;
            case "A Z": // Rock-Scissors
                return points.Z + situation.lose;
            case "B X": // Paper-Rock
                return points.X + situation.lose;
            case "B Y": // Paper-Paper
                return points.Y + situation.draw;
            case "B Z": // Paper-Scissors
                return points.Z + situation.win;
            case "C X": // Scissors-Rock
                return points.X + situation.win;
            case "C Y": // Scissors-Paper
                return points.Y + situation.lose;
            case "C Z": // Scissors-Scissors
                return points.Z + situation.draw;
        }
    })
    .reduce((acc, score) => acc + score, 0);

const executionEnd = performance.now();
const ms = (executionEnd - executionStart) * 1000;
console.log("❓P1 » What would your total score be if everything goes exactly according to your strategy guide?")
console.log(`❗️P1 » Your total score is ${answer} (in  ${ms.toFixed(2)}ms).`);