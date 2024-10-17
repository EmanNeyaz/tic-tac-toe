let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';
let isGameActive = true;

const gameContainer = document.getElementById('game');

function createBoard() {
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.addEventListener('click', () => handleCellClick(index));
        gameContainer.appendChild(cellElement);
    });
}

function handleCellClick(index) {
    if (board[index] === '' && isGameActive) {
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
        cell.classList.remove('x', 'o');
        if (board[index] === 'x') cell.classList.add('x');
        if (board[index] === 'o') cell.classList.add('o');
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isGameActive = false;
            alert(`${board[a]} wins!`);
            return;
        }
    }
    if (!board.includes('')) {
        alert("It's a draw!");
        isGameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'x';
    isGameActive = true;
    renderBoard();
}

createBoard();
