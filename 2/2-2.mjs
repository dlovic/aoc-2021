import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const movements = input.map(x => ({ direction: x.split(' ')[0], units: parseInt(x.split(' ')[1]) }));

let horizontal = 0;
let depth = 0;
let aim = 0;

movements.forEach(m => {
    switch(m.direction) {
        case 'forward':
            horizontal += m.units;
            depth += m.units * aim;
            break;
        case 'up':
            aim -= m.units;
            break;
        case 'down':
            aim += m.units;
            break;
    }
});

console.log(depth * horizontal);