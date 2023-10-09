const options = document.querySelectorAll('button');
let shift = 0;
const board = [];
const resetButton = document.getElementById('reset');
const messageDiv = document.getElementById('message');

const playerName = prompt("Ingresa tu nombre:");


window.addEventListener('DOMContentLoaded', () => {
    options.forEach((item, idx) => 
        item.addEventListener("click", (event) => pressButton(event, idx))
    );
    
    resetButton.addEventListener("click", () => {
        resetGame();
    });
});

function pressButton(event, pos) {
    if (board[pos]) {
        
        return;
    }

    let x = "X";
    let o = "O";
    let currentBtn = event.target;
    if (shift % 2 === 0) {
        currentBtn.style.backgroundColor = "#008000";
        currentBtn.textContent = x;
        board[pos] = x;
        shift++;
    } else {
        currentBtn.style.backgroundColor = "#0d58e4"
        currentBtn.textContent = o;
        board[pos] = o;
        shift++;
    }

    const winner = validateGame();
    if (winner) {
        messageDiv.innerHTML = `¡Ganaste, ${playerName}! <button id="reset">Reiniciar</button>`;
        resetButton.style.display = 'block';
        options.forEach((item) => {
            item.disabled = true;
        });
    }
}

function validateGame() {
    if (board[0] === board[1] && board[0] === board[2] && board[0]) {
        return board[0];
    } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
        return board[3];
    } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
        return board[6];
    } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
        return board[0];
    } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
        return board[1];
    } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
        return board[2];
    } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
        return board[0];
    } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
        return board[2];
    }
    return null;
}

function resetGame() {
    options.forEach((item) => {
        item.textContent = '';
        item.style.backgroundColor = '';
        item.disabled = false;
    });
    board.fill('');
    shift = 0;
    resetButton.style.display = 'none';
    messageDiv.innerHTML = '';
}


