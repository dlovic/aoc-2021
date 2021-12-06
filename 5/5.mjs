import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const lines = input.map(row => {
    const [x1, y1, x2, y2] = row.replace(' -> ', ',').split(',').map(x => parseInt(x));
    
    return { x1, y1, x2, y2 }
});
    
const xMax = Math.max(...lines.reduce((acc, l) => [...acc, l.x1, l.x2], [])) + 1;
const yMax = Math.max(...lines.reduce((acc, l) => [...acc, l.y1, l.y2], [])) + 1;

const grid = Array.from(Array(xMax), () => Array.from(Array(yMax), () => 0));

const move = (d) => {
    if (d < 0) {
        return -1;
    } else if (d > 0) {
        return 1;
    }
    
    return 0;
}

lines.forEach(line => {
    const { x1, y1, x2, y2 } = line;
    let dx = x2 - x1;
    let dy = y2 - y1;

    let diagonal = dx !== 0 && dy !== 0;

    let x = x1;
    let y = y1;

    while (true) {
        grid[x][y]++; 

        if (x === x2 && y === y2) {
            break;
        }

        if (x !== x2) {
            x += move(dx);
        }
        
        if (y !== y2) {
            y += move(dy);
        }
    }
});

let overlaps = 0;

for (let y = 0; y < yMax; y++) {
    for (let x = 0; x < xMax; x++) {
        if (grid[x][y] >= 2) {
            overlaps++;
        }
    }    
}



console.log(overlaps);