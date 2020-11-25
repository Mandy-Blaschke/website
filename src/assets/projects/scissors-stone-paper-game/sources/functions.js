import {
    comChoiceDiv,
    game, gameStart, hideRulesBtn,
    paperBtn,
    playersChoiceDiv,
    result,
    scissorsBtn,
    stoneBtn
} from './html-elements.js';

export function fctGamePlay() {
    fctPlayerChoice(scissorsBtn, 'scissors');
    fctPlayerChoice(stoneBtn, 'stone');
    fctPlayerChoice(paperBtn, 'paper');
}


export function fctPlayerChoice(button, choice) {
    button.addEventListener('click', function () {
            fctComChoice();
            game.playerChoice = choice;
            playersChoiceDiv.classList.remove('scissor-img', 'stone-img', 'paper-img');
            playersChoiceDiv.classList.add('symbol');

            if (game.playerChoice === 'scissors') {
                playersChoiceDiv.classList.add('scissor-img');

            } else if (game.playerChoice === 'stone') {
                playersChoiceDiv.classList.add('stone-img');

            } else if (game.playerChoice === 'paper') {
                playersChoiceDiv.classList.add('paper-img');
            }
            playersChoiceDiv.innerText = fctTranslate(choice);
            fctCheckWinner();
        }
    );
}


export function fctComChoice() {
    let comChoiceArr = ['scissors', 'stone', 'paper'];
    const rand = Math.round(Math.random() * 2);
    let comRandChoice = comChoiceArr[rand];
    game.computerChoice = comRandChoice;
    comChoiceDiv.classList.remove('scissor-img', 'stone-img', 'paper-img');
    comChoiceDiv.classList.add('symbol');

    if (game.computerChoice === 'scissors') {
        comChoiceDiv.classList.add('scissor-img');

    } else if (game.computerChoice === 'stone') {
        comChoiceDiv.classList.add('stone-img');

    } else if (game.computerChoice === 'paper') {
        comChoiceDiv.classList.add('paper-img');
    }

    comChoiceDiv.innerText = fctTranslate(comRandChoice);
}


export function fctCheckWinner() {
    const winnerDiv = document.createElement('div');
    result.innerHTML = '';
    result.appendChild(winnerDiv);

    let winner = fctWinnerIs(game.computerChoice, game.playerChoice);

    const wins = [
        'Pikachu hat Dich gewählt!',
        'Du hast gewonnen!',
        'Du ROCKST!',
        'Sieger!',
        'Gut gemacht!',
        'Weiter so!',
        'Obama ist stolz auf dich!',
        'Ehre gewonnen!'
    ];
    const randWins = Math.round(Math.random() * (wins.length - 1));
    const winText = wins[randWins];

    const looses = [
        'Vielleicht nächste Runde.',
        'Bloß nicht weinen.',
        'Du hast verloren.',
        'Verlierer!',
        'Kein Foto für Dich.',
        'Aaaargh!',
        'Schade!',
        'Ehre genommen!'
    ];
    const randLooses = Math.round(Math.random() * (looses.length - 1));
    const loosesText = looses[randLooses];


    if (winner === 'a') {
        winnerDiv.innerText = loosesText;
    } else if (winner === 'b') {
        winnerDiv.innerText = winText;
    } else {
        winnerDiv.innerText = 'Unentschieden.';
    }

}

export function fctWinnerIs(a, b) {
    if (a === 'scissors' && b === 'paper') {
        return 'a';
    } else if (a === 'stone' && b === 'scissors') {
        return 'a';
    } else if (a === 'paper' && b === 'stone') {
        return 'a';
    } else if (a === b) {
        return null;
    } else {
        return 'b';
    }
}


export function fctTranslate(input) {
    if (input === 'scissors') {
        return 'Schere';
    } else if (input === 'stone') {
        return 'Stein';
    } else if (input === 'paper') {
        return 'Papier';
    }
}

export function fctHideButton() {
    hideRulesBtn.innerText = 'Regeln ausblenden';
    hideRulesBtn.addEventListener('click', function () {
        gameStart.classList.toggle('hidden');
        if (gameStart.classList.contains('hidden')) {
            hideRulesBtn.innerText = 'Regeln einblenden';
        } else {
            hideRulesBtn.innerText = 'Regeln ausblenden';
        }
    });
}