const playerScoreElement = document.getElementById('playerScore');
const startGameButton = document.getElementById('startGameButton');
const targetAreas = Array.from(document.getElementsByClassName('targetArea'));
let playerScore = 0;

function startGame() {
    playerScore = 0;
    updateScore();
    targetAreas.forEach(targetArea => targetArea.innerHTML = '');
    createTarget();
}

function updateScore() {
    playerScoreElement.innerText = `점수: ${playerScore}`;
}

function createTarget() {
    const targetArea = targetAreas[Math.floor(Math.random() * targetAreas.length)];
    const target = document.createElement('div');
    target.className = 'target';
    target.onclick = clickTarget;
    targetArea.appendChild(target);
}

function clickTarget() {
    this.parentElement.removeChild(this);
    playerScore++;
    updateScore();
    createTarget();
}

function clickRedCircle(e) {
    e.stopPropagation();
    playerScore += 2;
    updateScore();
    this.parentElement.remove();
    createTarget();
}

function clickGreenCircle(e) {
    e.stopPropagation();
    playerScore -= 1;
    updateScore();
    this.parentElement.remove();
    createTarget();
}

startGameButton.addEventListener('click', startGame);
