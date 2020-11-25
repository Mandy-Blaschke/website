document.addEventListener('DOMContentLoaded', function () {

        const field1 = document.querySelector('#field1');
        const field2 = document.querySelector('#field2');
        const field3 = document.querySelector('#field3');
        const field4 = document.querySelector('#field4');
        const field5 = document.querySelector('#field5');
        const field6 = document.querySelector('#field6');
        const field7 = document.querySelector('#field7');
        const field8 = document.querySelector('#field8');
        const field9 = document.querySelector('#field9');
        let showPlayer = document.querySelector('.displayPlayer');
        let displayBeginner = document.createElement('div');

        let gameGrid = document.querySelector('.gamePlay');

        let coin = document.createElement('div');

        let divForCoin = document.querySelector('.flip-coin');
        const flipCoin = document.querySelector('#flipCoin');
        let flipBtn = document.querySelector('#flipCoin');

        let description = document.querySelector('#flipBtnDescription');

        let newGameBtn = document.createElement('button');

        let onTurn;

        newGameBtn.addEventListener('click', function () {
            location.reload();
        })

        flipCoin.addEventListener('click', function () {
            const randCoin = Math.round(Math.random() + 0.9);

            if (randCoin === 1) {
                coin.classList.add('turnPlayerOne');
                divForCoin.appendChild(coin);
                hideCoinBtnAndDescription();
                displayBeginner.innerText = 'Spieler 1 beginnt!';
                displayBeginner.classList.add('currentPlayerBlue');
                showPlayer.appendChild(displayBeginner);
                startButton.classList.remove('hidden');
                onTurn = 'Spieler 1';

            } else {
                coin.classList.add('turnPlayerTwo');
                divForCoin.appendChild(coin);
                hideCoinBtnAndDescription();
                displayBeginner.innerText = 'Spieler 2 beginnt!';
                displayBeginner.classList.add('currentPlayerRed');
                showPlayer.appendChild(displayBeginner);
                startButton.classList.remove('hidden');
                onTurn = 'Spieler 2';
            }

        });

        const startButton = document.querySelector('.startBtn');
        startButton.addEventListener('click', function () {
            gameGrid.classList.remove('hidden');
            divForCoin.classList.add('hidden');
            startButton.classList.add('hidden');
        });


        function hideCoinBtnAndDescription() {
            flipBtn.classList.add('hidden');
            description.classList.add('hidden');
        }

        function clickOnField(fieldN) {
            if (fieldN.classList.contains('activeBlue') || fieldN.classList.contains('activeRed')) {
                // do nothing

            } else {
                if (onTurn === 'Spieler 1') {
                    fieldN.classList.add('activeBlue');
                    onTurn = 'Spieler 2';
                    displayBeginner.classList.remove('currentPlayerBlue');
                    displayBeginner.classList.add('currentPlayerRed');
                    displayBeginner.innerText = 'Spieler 2 ist an der Reihe.';
                } else if (onTurn === 'Spieler 2') {
                    fieldN.classList.add('activeRed');
                    onTurn = 'Spieler 1';
                    displayBeginner.classList.remove('currentPlayerRed');
                    displayBeginner.classList.add('currentPlayerBlue');
                    displayBeginner.innerText = 'Spieler 1 ist an der Reihe.';
                }

                checkWinning('Spieler 1', 'activeBlue');
                checkWinning('Spieler 2', 'activeRed');
            }

        }

        field1.addEventListener('click', function () {
            clickOnField(field1);
        });

        field2.addEventListener('click', function () {
            clickOnField(field2);
        });

        field3.addEventListener('click', function () {
            clickOnField(field3);
        });

        field4.addEventListener('click', function () {
            clickOnField(field4);
        });
        field5.addEventListener('click', function () {
            clickOnField(field5);
        });
        field6.addEventListener('click', function () {
            clickOnField(field6);
        });
        field7.addEventListener('click', function () {
            clickOnField(field7);
        });
        field8.addEventListener('click', function () {
            clickOnField(field8);
        });
        field9.addEventListener('click', function () {
            clickOnField(field9);
        });

        function checkWinning(player, color) {
            // Reihen
            if (field1.classList.contains(color) && field2.classList.contains(color) && field3.classList.contains(color)) {
                displayWinner(player);

            } else if (field4.classList.contains(color) && field5.classList.contains(color) && field6.classList.contains(color)) {
                displayWinner(player);

            } else if (field7.classList.contains(color) && field8.classList.contains(color) && field9.classList.contains(color)) {
                displayWinner(player);

                //Spalten
            } else if (field1.classList.contains(color) && field4.classList.contains(color) && field7.classList.contains(color)) {
                displayWinner(player);

            } else if (field2.classList.contains(color) && field5.classList.contains(color) && field8.classList.contains(color)) {
                displayWinner(player);

            } else if (field3.classList.contains(color) && field6.classList.contains(color) && field9.classList.contains(color)) {
                displayWinner(player);

                //Diagonale
            } else if (field1.classList.contains(color) && field5.classList.contains(color) && field9.classList.contains(color)) {
                displayWinner(player);

            } else if (field3.classList.contains(color) && field5.classList.contains(color) && field7.classList.contains(color)) {
                displayWinner(player);

            } else {
                noWinner();
            }

        }

        function displayWinner(player) {
            displayBeginner.innerText = `${player} hat gewonnen.`;
            displayBeginner.classList.add('winner');
            onTurn = '';
            addNewGameButton();
        }

        function noWinner() {
            let looser = document.querySelectorAll('.activeRed, .activeBlue').length;
            if (looser === 9) {
                displayBeginner.innerText = 'Unentschieden';
                displayBeginner.classList.add('noWinner');
                onTurn = '';
                addNewGameButton();
            }
        }

        function addNewGameButton() {
            newGameBtn.innerText = 'Neues Spiel?';
            showPlayer.appendChild(newGameBtn);
        }
    }
);