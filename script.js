// Game state
const gameState = {
    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    gameActive: true,
    scores: { X: 0, O: 0 },
    winningCombinations: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ]
};

// DOM elements
const gameBoard = document.getElementById('game-board');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restart-btn');
const resetScoreButton = document.getElementById('reset-score-btn');
const player1Info = document.getElementById('player1-info');
const player2Info = document.getElementById('player2-info');
const player1Score = document.getElementById('player1-score');
const player2Score = document.getElementById('player2-score');

// Initialize the game board
function initializeBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', () => handleCellClick(i));
        gameBoard.appendChild(cell);
    }
}

// Handle cell click
function handleCellClick(index) {
    if (gameState.board[index] !== '' || !gameState.gameActive) return;

    // Update board state
    gameState.board[index] = gameState.currentPlayer;
    
    // Update UI
    const cell = document.querySelector(`.cell[data-index="${index}"]`);
    cell.classList.add(gameState.currentPlayer.toLowerCase());
    
    // Check for win or draw
    if (checkWin()) {
        endGame(false);
        createConfetti();
    } else if (checkDraw()) {
        endGame(true);
    } else {
        // Switch player
        gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
        updateMessage();
        updatePlayerInfo();
    }
}

// Check for win
function checkWin() {
    for (const combination of gameState.winningCombinations) {
        const [a, b, c] = combination;
        if (gameState.board[a] && 
            gameState.board[a] === gameState.board[b] && 
            gameState.board[a] === gameState.board[c]) {
            
            // Highlight winning cells
            combination.forEach(index => {
                document.querySelector(`.cell[data-index="${index}"]`).classList.add('winning-cell');
            });
            
            return true;
        }
    }
    return false;
}

// Check for draw
function checkDraw() {
    return gameState.board.every(cell => cell !== '');
}

// End the game
function endGame(isDraw) {
    gameState.gameActive = false;
    
    if (isDraw) {
        messageElement.textContent = "It's a draw!";
    } else {
        messageElement.textContent = `Player ${gameState.currentPlayer === 'X' ? '1' : '2'} wins!`;
        // Update score
        gameState.scores[gameState.currentPlayer]++;
        updateScoreDisplay();
    }
}

// Update message
function updateMessage() {
    messageElement.textContent = `Player ${gameState.currentPlayer === 'X' ? '1' : '2'}'s turn!`;
}

// Update player info
function updatePlayerInfo() {
    if (gameState.currentPlayer === 'X') {
        player1Info.classList.add('active');
        player2Info.classList.remove('active');
    } else {
        player2Info.classList.add('active');
        player1Info.classList.remove('active');
    }
}

// Update score display
function updateScoreDisplay() {
    player1Score.textContent = gameState.scores.X;
    player2Score.textContent = gameState.scores.O;
}

// Restart game
function restartGame() {
    gameState.board = ['', '', '', '', '', '', '', '', ''];
    gameState.currentPlayer = 'X';
    gameState.gameActive = true;
    
    initializeBoard();
    updateMessage();
    updatePlayerInfo();
    
    // Remove winning cell animations
    document.querySelectorAll('.winning-cell').forEach(cell => {
        cell.classList.remove('winning-cell');
    });
}

// Reset score
function resetScore() {
    gameState.scores = { X: 0, O: 0 };
    updateScoreDisplay();
    restartGame();
}

// Create confetti effect
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Get random color for confetti
function getRandomColor() {
    const colors = ['#ff69b4', '#ff1493', '#87ceeb', '#ffb6c1', '#ffc0cb'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event listeners
restartButton.addEventListener('click', restartGame);
resetScoreButton.addEventListener('click', resetScore);

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeBoard();
    updateScoreDisplay();
});
