import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const picks = [...input[0].split(',').map(x => parseInt(x))];

const [rows, boardSize] = [[...input.slice(2).filter(x => x)], 5];
const boards = [...Array(Math.ceil(rows.length / boardSize))].map((b, i) => {

    const boardRows = rows.slice(i * boardSize, i * boardSize + boardSize).map(br => {
        return br.split(' ').filter(x => x).map(x => parseInt(x));
    });

    const columns = [...Array(boardSize)].map((c, i) => boardRows.map(r => r[i]));

    return { rows: boardRows, columns: columns };
});

const isWinner = (board, picked) => {
    const winningRow = board.rows.some(r => r.every(x => picked.includes(x)));
    const winningColumn = board.columns.some(r => r.every(x => picked.includes(x)));

    return winningRow || winningColumn;
}

const getScore = (board, picked) => {
    return board.rows.reduce((sum, row) => {
        return sum + row.filter(x => !picked.includes(x)).reduce((rSum, v) => rSum + v, 0);
    }, 0) * picked[picked.length - 1];
}

let bingo = false;

for (let i = 0; i < picks.length; i++) {
    const picked = picks.slice(0, i);

    const winner = boards.find(b => isWinner(b, picked));
    const winners = boards.filter(b => isWinner(b, picked));

    if (winner && !bingo) {
        bingo = true;
        console.log('bingo:', getScore(winner, picked));
    }

    if (winners.length === boards.length) {
        const loser = boards.find(b => !isWinner(b, picked.slice(0, picked.length - 2)));
        console.log('loser:', getScore(loser, picked));
        break;
    }
}