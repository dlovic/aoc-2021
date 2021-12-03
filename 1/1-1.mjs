import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

let increases = 0;

input.forEach((v,i) => {
    if (i > 0) {
        if (v >= input[i - 1]) {
            increases++;
        }
    }
});

console.log(increases);
