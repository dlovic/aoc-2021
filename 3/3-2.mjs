import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const rowTemplate = input[0].split('');

const getReducer = useMostCommon => {
    return (result, val, index) => {
        const column = result.map(x => parseInt(x.split('')[index]));
        const zeros = column.filter(x => x === 0).length;

        let remaining = result;

        if (useMostCommon) {
            remaining = zeros <= result.length / 2 ? result.filter(x => x[index] === '1') : result.filter(x => x[index] === '0');
        } else {
            remaining = zeros > result.length / 2 ? result.filter(x => x[index] === '1') : result.filter(x => x[index] === '0');
        }
    
        if (remaining.length) {
            return remaining;
        } else {
            return result;
        }
    }
}

const oxygen = rowTemplate.reduce(getReducer(true), input)
const scrubber = rowTemplate.reduce(getReducer(false), input);

console.log(oxygen, scrubber);
console.log(parseInt(oxygen[0], 2) * parseInt(scrubber[0], 2));
