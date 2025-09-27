* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comic Sans MS', cursive, sans-serif;
}

body {
    background: linear-gradient(135deg, #ffb6c1, #ffc0cb, #ffd1dc, #ffdae0);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: backgroundPulse 8s infinite alternate;
}

@keyframes backgroundPulse {
    0% { background: linear-gradient(135deg, #ffb6c1, #ffc0cb, #ffd1dc, #ffdae0); }
    100% { background: linear-gradient(135deg, #ffdae0, #ffd1dc, #ffc0cb, #ffb6c1); }
}

.container {
    max-width: 600px;
    width: 100%;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
}

h1 {
    color: #ff69b4;
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 3px 3px 0 #fff, 5px 5px 0 rgba(255, 105, 180, 0.3);
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.subtitle {
    color: #ff1493;
    font-size: 1.5rem;
    margin-bottom: 30px;
    text-shadow: 1px 1px 0 #fff;
}

.game-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
}

.player-info {
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s;
}

.player-info.active {
    background: rgba(255, 182, 193, 0.5);
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
}

.player-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ff1493;
}

.player-symbol {
    font-size: 2rem;
    margin: 5px 0;
}

.score {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff69b4;
}

.game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 20px auto;
    max-width: 400px;
}

.cell {
    aspect-ratio: 1;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 5px 10px rgba(255, 105, 180, 0.3);
    position: relative;
    overflow: hidden;
}

.cell:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 105, 180, 0.4);
    background: rgba(255, 255, 255, 1);
}

.cell.x::before, .cell.x::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 10px;
    background: #ff69b4;
    border-radius: 5px;
}

.cell.x::before {
    transform: rotate(45deg);
}

.cell.x::after {
    transform: rotate(-45deg);
}

.cell.o::before {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    border: 10px solid #87ceeb;
    border-radius: 50%;
}

.winning-cell {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.controls {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
}

button {
    background: #ff69b4;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1.2rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
}

button:hover {
    background: #ff1493;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 105, 180, 0.6);
}

button:active {
    transform: translateY(1px);
}

.message {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff1493;
    min-height: 40px;
    text-shadow: 1px 1px 0 #fff;
    animation: fadeIn 0.5s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background: #ff69b4;
    border-radius: 50%;
    animation: confettiFall 5s linear forwards;
    z-index: 1000;
}

@keyframes confettiFall {
    0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

@media (max-width: 500px) {
    h1 { font-size: 2.2rem; }
    .subtitle { font-size: 1.2rem; }
    .cell { font-size: 3rem; }
    button { padding: 10px 20px; font-size: 1rem; }
}
