import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const movements = input.map(x => ({ direction: x.split(' ')[0], units: parseInt(x.split(' ')[1]) }));

const depth = movements.filter(x => x.direction !== 'forward').reduce((sum, current) => {
    if (current.direction === 'up') {
        return sum -= current.units;
    } else {
        return sum += current.units;
    }
}, 0);

const horizontal = movements.filter(x => x.direction === 'forward').reduce((sum, current) => {
    return sum += current.units;
}, 0);


console.log(depth * horizontal);