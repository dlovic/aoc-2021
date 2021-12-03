import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const numberOfRows = input.length;
const rowTemplate = input[0].split('');

console.log(numberOfRows);

const gamma = rowTemplate.reduce((result, val, index) => {
    const column = input.map(x => parseInt(x.split('')[index]));
    console.log(column, index);
    const zeros = column.filter(x => x === 0).length;

    if (index === 1) {
        console.log(zeros);
    }

    return result += zeros > numberOfRows / 2 ? '0' : '1';
}, '');

const epsilon = gamma.split('').map(x => x === '1' ? '0' : '1').join('');

console.log(gamma, epsilon);

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
