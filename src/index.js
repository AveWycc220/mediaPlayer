import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtnList = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivatePlayers = () => {
    temp.style.display = 'none';
    playerBtnList.forEach((item) => item.classList.remove('active'));
    playerBlock.forEach((item) => item.classList.remove('active'));
}
playerBtnList.forEach((btn, i) => btn.addEventListener('click', () => {
        deactivatePlayers();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
}));

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();