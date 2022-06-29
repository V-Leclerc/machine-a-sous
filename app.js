let data = {
    tokens: 0,
    turns: 0
};

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
            cell.innerHTML = newNumber();
            row.appendChild(cell);
        }
    }
    updateTokens();
}

function newNumber() {
    return Math.floor(Math.random()*10);
};

useMachine();
newGame();