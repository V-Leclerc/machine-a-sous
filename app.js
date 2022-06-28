function updateRow() {
    for (let i=1; i<=3; i++) {
        let row = document.getElementById(`row${i}`);
        for (let j=1; j<=3; j++) {
            let cell = document.createElement("td");
            cell.innerHTML += newNumber();
            row.appendChild(cell);
        }
    }
}

function newNumber() {
    return toString(Math.floor(Math.random()*10));
};