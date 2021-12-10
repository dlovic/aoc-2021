import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8');

let initialFishPopulation = input.split(',');
const days = 256;

let fishpedia = Array.from(Array(9), () => 0);

initialFishPopulation.forEach(f => {
    fishpedia[f]++;
});

for (let d = 0; d < days; d++) {
    const spawns = fishpedia[0];
    fishpedia.shift();

    fishpedia[6] += spawns;
    fishpedia.push(spawns);
}

const population = fishpedia.reduce((sum, pop) => {
    return sum + pop;
}, 0);

console.log(population);