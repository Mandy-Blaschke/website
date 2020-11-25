export let scissorsBtn;
export let stoneBtn;
export let paperBtn;

export let gameStart;
export let gamePlayDisplay;
export let playersChoiceDiv;
export let comChoiceDiv;

export let result;
export let winner;

export let hideRulesBtn;

export let game = {
    computerChoice: null,
    playerChoice: null,
};

export function fctQueryElements() {
    scissorsBtn = document.querySelector('#scissor-btn');
    stoneBtn = document.querySelector('#stone-btn');
    paperBtn = document.querySelector('#paper-btn');

    gameStart = document.querySelector('.gameStart');
    gamePlayDisplay = document.querySelector('.gamePlay');
    playersChoiceDiv = document.querySelector('.playersChoice');
    comChoiceDiv = document.querySelector('.comChoice');

    result = document.querySelector('.result');
    winner = document.createElement('div');

    hideRulesBtn = document.querySelector('.hide-rules-btn');
}