import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').split('\n').map(x => parseInt(x));

console.log(input);

let prevSum = null;
let sumIncrease = 0;

input.forEach((v, i) => {
    if (Number.isInteger(input[i + 2])) {
        console.log(input.slice(i, i + 3));
        const sum = input.slice(i, i + 3).reduce((sum, currentValue) => {
            return sum += currentValue;
        }, 0);

        if (prevSum !== null && sum > prevSum) {
            sumIncrease++;
        }

        prevSum = sum;
    }
});

console.log(sumIncrease);