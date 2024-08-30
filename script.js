// script.js
const ball = document.getElementById('ball');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

let ballX = 390; // 초기 x 위치 (게임 컨테이너 중앙에 맞춤)
let ballY = 190; // 초기 y 위치 (게임 컨테이너 중앙에 맞춤)
let ballSpeedX = 2;
let ballSpeedY = 2;

function updateBallPosition() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with left and right walls
    if (ballX <= 0 || ballX >= 780) {
        ballSpeedX *= -1;
    }

    // Ball collision with top and bottom walls
    if (ballY <= 0 || ballY >= 380) {
        ballSpeedY *= -1;
    }

    // Update ball position on screen
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function gameLoop() {
    updateBallPosition();
    requestAnimationFrame(gameLoop);
}

gameLoop();
