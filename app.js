let data = {
    tokens: 0,
    turns: 0
};

let cells = {
    cell1row1: 1,
    cell2row1: 2,
    cell3row1: 3,
    cell1row2: 4,
    cell2row2: 5,
    cell3row2: 6,
    cell1row3: 7,
    cell2row3: 8,
    cell3row3: 9
}

function newGame() {
    const start = document.getElementById("start");
    start.addEventListener('click', function(e) {
        e.preventDefault();
        data.tokens = 50;
        data.turns = 0;
        updateTokens();
    });
}

function updateTokens() {
    const tokens = document.getElementById("tokens");
    const turns = document.getElementById("turns");
    tokens.innerHTML = "Jetons : " + data.tokens;
    turns.innerHTML = "Nombre de tours : " + data.turns;
}

function useMachine() {
    const goButton = document.getElementById("go");
    goButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (data.tokens >= 5) {
            data.tokens -= 5;
            data.turns += 1;
            updateRow();
        } else {
            data.tokens = "GAME OVER";
            updateTokens();
        }
    });
}

function updateRow() {
    for (let i=1; i<=3; i++) {
        let row = document.getElementById(`row${i}`);
        for (let j=1; j<=3; j++) {
            let cellToRemove = document.getElementById(`cell${j}row${i}`);
            row.removeChild(cellToRemove);
            let cell = document.createElement("td");
            cell.id = `cell${j}row${i}`;
            cells[`cell${j}row${i}`] = newNumber();
            cell.innerHTML = cells[`cell${j}row${i}`];
            row.appendChild(cell);
        }
    }
    countGain();
    updateTokens();
}

function countGain() {
    for (let i = 1; i<= 3; i++) {
        if (cells[`cell1row${i}`] == cells[`cell2row${i}`]) {
            if (cells[`cell1row${i}`] == cells[`cell2row${i}`] && cells[`cell2row${i}`] == cells[`cell3row${i}`]) {
                data.tokens += cells[`cell1row${i}`] * cells[`cell2row${i}`] * cells[`cell3row${i}`];
            } else {
                data.tokens += cells[`cell1row${i}`] * cells[`cell2row${i}`];
            }
        }
    }
} console.log(data.tokens);

function newNumber() {
    return Math.floor(Math.random()*(8 - 1) + 1);
};

useMachine();
newGame();