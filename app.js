function useMachine() {
    const goButton = document.getElementById("go");
    goButton.addEventListener('click', function(e) {
        e.preventDefault();
        updateRow();
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
}

function newNumber() {
    return Math.floor(Math.random()*10);
};

useMachine();