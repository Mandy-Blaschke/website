let words = [
    'Eule', 'Staubsauger', 'Hangman', 'Eheleute', 'Kuckucksuhr', 'Flasche', 'Uhr', 'Mitternacht',
    'Blumentopf', 'Lautsprecher', 'Pflanze', 'Xylophon', 'Telefon', 'PlayStation', 'Ladekabel',
    'Trinkflasche', 'Lampe', 'Fledermaus', 'Tisch', 'Briefumschlag', 'Jalousien', 'Gardine', 'Palme',
    'Keyboard', 'Computer', 'Wandbild', 'Tapete', 'Bettbezug', 'Ordner', 'Computermaus', 'Rasen',
    'Wildblumen', 'Kopfhörer', 'Lederjacke', 'Untersetzer', 'Spezialisierung', 'Bauchnabel', 'Smartphone',
    'Pinguin', 'Hund', 'Mund', 'Magnet', 'Krankschreibung', 'Arzt', 'Joghurt', 'Kabel', 'Fenster', 'Rauch',
    'Feuer', 'Oma', 'Luftfeuchtigkeit', 'Blatt', 'Kekse', 'Arme', 'Nuss', 'Weihnachten', 'Karte', 'Eltern',
    'Bildschirm', 'Gabel', 'Messer', 'Besteck', 'Tafel', 'Schuhe', 'Hosen', 'Haarfarbe', 'Krawatte', 'Bettbezug',
    'Beutel', 'Schreibtischunterlage', 'Grabstein', 'Auge', 'Stift', 'Wasser', 'Fluss', 'Meer', 'Kronleuchter',
    'Waschbecken', 'Badewanne', 'Toilettenpapier', 'Laptop', 'Staubwedel', 'Besen', 'Couch', 'Telefax', 'Locken',
    'Becher', 'Teppich', 'Supermarkt', 'Zeitschrift', 'Lebensmittel', 'Orange', 'Giraffe', 'Katze', 'Laubbaum',
    'Gehweg', 'Statue', 'Klebestreifen', 'Paketdienst', 'Ohr', 'Buch', 'Wimper', 'Bart', 'polizei', 'feuerwehr',
    'krankenwagen', 'frisur', 'Dose', 'rad', 'Sonne', 'Kamera', 'nagel', 'Finger', 'Bank', 'Erde', 'Planet',
    'Nintendo', 'Wort', 'Ort', 'platz', 'Sitz', 'Tasche', 'taschentuch', 'Nase', 'Zeh', 'neun', 'Acht', 'nacht', 'tag',
    'leder', 'sessel', 'urne', 'schale', 'apfel', 'banane', 'insel', 'stadt', 'land', 'spiel', 'handwerker',
    'krankenschwester', 'lehrer', 'zeitung', 'zeit', 'Karma', 'balkon', 'kasten', 'kiste', 'Party', 'feier', 'feierabend',
    'arbeit', 'arbeitsplatz', 'schule', 'federhalter', 'bleistift', 'schreibheft', 'lineal', 'rucksack', 'Sport',
    'fernsehsendung', 'klavier', 'baum', 'netzwerk', 'internet', 'Youtube', 'netflix', 'fahrrad', 'auto', 'Bus',
    'Werk', 'Wette', 'Wetter', 'Pizza', 'Restaurant', 'Niederlande', 'Italien', 'Griechenland', 'Deutschland', 'Polen',
    'mittag', 'Salat', 'Brot', 'Strickjacke', 'hochzeit', 'feiertag', 'club', 'Babysitter', 'Gelegenheit', 'Chance',
    'Frustration', 'Freude', 'Pinzette', 'Fingernagel', 'Igel', 'Ohrring', 'Savanne', 'Strand', 'Wand', 'Sand',
    'Kammer', 'Zimmer', 'taschenbuch', 'drucker', 'sanduhr', 'leben', 'verlobung', 'Verrat', 'Wurst', 'boden',
    'Ekel', 'Schreibtisch', 'Nagellack', 'Bonbon', 'dach', 'weihnachtsmann', 'osterhase', 'EIER', 'malen', 'zeichnen',
    'singen', 'spielen', 'Gitarre', 'Bass', 'Orchester', 'Geige', 'Seide', 'Wolle', 'Rolle', 'Schiff', 'See',
    'Blutgruppe', 'Stuhl', 'sitzen', 'stehen', 'Luft', 'Sauerstoff', 'atmung', 'trinken', 'aNGST', 'leopard', 'gepard',
    'elefant', 'Elemente', 'leuchten', 'farben', 'knopf', 'Blume', 'Zug', 'eisenbahn', 'flugzeug', 'fliegen', 'fliege',
    'taste', 'schraube', 'hammer', 'bohrmaschine', 'drehen', 'kreisel', 'bahn', 'hahn', 'fisch', 'futter', 'bier', 'foto',
    'bild', 'Kugelschreiber', 'hubschrauber', 'glas', 'Karaffe', 'karamell', 'rottweiler', 'rotkehlchen', 'blaumeise', 'kohlmeise',
    'amsel', 'park', 'emotion', 'schreibfehler', 'tipp', 'rock', 'metall', 'holz', 'dorf', 'regeln', 'tastatur',
    'leuchtturm', 'hafen', 'opa', 'rahmen', 'grenze', 'lutscher', 'lauch', 'paprika', 'basilikum', 'petersilie', 'salz',
    'messe', 'festival', 'positiv', 'negativ', 'corona', 'virus', 'ausgang', 'eingang', 'klinke', 'gras', 'hanf',
    'gerste', 'hopfen', 'wein', 'weinen', 'ziel', 'start', 'zeiger', 'sekunde', 'stunde', 'minute', 'fleisch', 'rum',
    'erdbeeren', 'falle', 'geschenk', 'geburtstag', 'orakel', 'sternzeichen', 'hellseher', 'hochhaus', 'fahrstuhl',
    'treppen', 'stufen', 'girlande', 'lichterkette', 'licht', 'dunkel', 'balance', 'seite', 'saite', 'strohhalm',
    'epoche', 'mittelalter', 'zeitalter', 'krise', 'erholung', 'urlaub', 'ferien', 'klausur', 'tagung', 'reise', 'riese',
    'umlaute', 'rufe', 'geschrei', 'leise', 'weise', 'art', 'quark', 'frosch', 'kaulquappe', 'echse', 'mader', 'kaninchen',
    'laser', 'patrone', 'paradies', 'paradiesvogel', 'kolobri', 'zensur', 'diktatur', 'diakonie', 'kirche', 'dienstleistung',
    'insolvenz', 'gastronomie', 'rezension', 'bewertung', 'stern', 'sonnensystem', 'milch', 'galaxie', 'schlange', 'spinne',
    'feige', 'hase', 'obst', 'heidelbeere', 'karotte', 'kartoffel', 'laufen', 'sprint', 'fussball', 'haus', 'garten',
    'wiese', 'thermometer', 'warm', 'kalt', 'sommer', 'winter', 'herbst', 'silvester', 'lieferung', 'bordsteinkante', 'zahn',
    'hand', 'kopf', 'topf', 'kochen', 'essen', 'sandalen', 'turnen', 'zirkus', 'tiere', 'gegenstand', 'erfolg', 'sieg',
    'niederlage', 'fingerring', 'windel', 'baby', 'kinder', 'rinder', 'kuh', 'schaf', 'hirte', 'gebet', 'gebot', 'verbot',
    'salamie', 'schinken', 'ketchup', 'sauce', 'brei', 'teller', 'hunger', 'satt', 'gott', 'engel', 'teufel', 'lustig',
    'langweilig', 'schnell', 'langsam', 'sachte', 'sagen', 'tomate', 'erbe', 'prinzessin', 'prinz', 'bube', 'dame', 'ass',
    'acker', 'felder', 'wirtschaft', 'abschwung', 'aufschwung', 'geschichte', 'philosophie', 'kurz', 'lang', 'gleich', 'nachher',
    'morgen', 'gestern', 'atom', 'energie', 'kraftwerk', 'strom', 'elektrisch', 'geladen', 'akku', 'batterie',
    'mittel', 'klein', 'sein', 'wunder', 'erleben', 'schauen', 'klauen', 'bauen', 'kruste', 'ruder', 'lenkrad',
    'ameise', 'liebe', 'gesellschaft', 'trennung', 'ansehen', 'aussehen', 'prestige', 'pfannkuchen', 'waffeln', 'backen',
    'folge', 'serie', 'wiederholung', 'deckel', 'dackel', 'abdeckung', 'abschreckung', 'gesetz', 'paragraph', 'text',
    'strafe', 'gefangen', 'frei', 'freiheit', 'eierkuchen', 'tante', 'onkel', 'torte', 'mutter', 'vater', 'meilenstein',
    'kilometer', 'entfernung', 'welle', 'schlagloch', 'golf', 'tor', 'regal', 'keller', 'besichtigung', 'besuch', 'museum',
    'maschine', 'weste', 'roman', 'osten', 'norden', 'westen', 'pullover', 'klemmbrett', 'stiehl', 'handy', 'haushalt',
    'kette', 'freundin', 'enkel', 'enkelin', 'sohn', 'tochter', 
];

console.log(words);

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];

const state = {
    gameStarted: false,
    searchedWord: '',
    clickedLetters: [],
    failures: 0,
    gameFinished: false
};

/*
const state = {
    gameStarted: true,
    searchedWord: 'STAUBWEDEL',
    clickedLetters: 'STAUBWEDEL'.split(''),
    failures: 0,
    gameFinished: true
};
*/

function renderIntro() {
    const outerRules = $('div', 'outerRules', null);
    document.body.appendChild(outerRules);

    const innerRules = $('div', 'innerRules', null);
    innerRules.innerText = 'Ziel des Spiels ist es, das Wort zu erraten, bevor der "Hangman" vollständig gezeichnet wurde. \n' +
        'Es gibt KEINE Umlaute und kein "ß". \n Viel Spaß beim Spiel!';
    outerRules.appendChild(innerRules);

    const startBtn = $('button', 'button', 'Spiel starten');
    document.body.appendChild(startBtn);

    startBtn.addEventListener('click', function () {
        startNewGame();
    });
}

function renderClickableLetters() {
    const letterButtonsBox = $('div', 'letterButtonsBox');
    document.body.appendChild(letterButtonsBox);

    for (let n = 0; n < alphabet.length; n++) {

        let letter = alphabet[n].toLocaleUpperCase();

        let letterBtn = $('div', 'letterBtn', letter);
        letterButtonsBox.appendChild(letterBtn);

        if (state.clickedLetters.indexOf(letter) >= 0) {
            letterBtn.classList.add('disabled');
        }

        letterBtn.addEventListener('click', function () {
            clickedOnLetter(letter);
        });
    }
}

function renderSearchedWordBoxes() {
    const displayLetters = $('div', 'displayLetterBoxes');
    document.body.appendChild(displayLetters);

    for (let i = 0; i < state.searchedWord.length; i++) {
        const letter = state.searchedWord[i];

        const letterBox = $('div', 'box');
        displayLetters.appendChild(letterBox);

        if (state.clickedLetters.indexOf(letter) >= 0 || state.gameFinished === true) {
            letterBox.innerText = letter;
        }
    }
}

function renderHangman() {
    const drawHangman = $('div', 'hangman');
    document.body.appendChild(drawHangman);

    if (state.failures > 0) {
        drawHangman.style.backgroundImage = 'url(pictures/hangman-' + state.failures + '.png)';
    }
}

function renderRestartButton() {
    const restartBtn = $('button', 'button', 'Neustarten?');
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener('click', function () {
        startNewGame();
    });
}

function renderGratulation() {
    const gz = $('div', 'gz', 'Herzlichen Glückwunsch! \n Du hast gewonnen!');
    document.body.appendChild(gz);
}

function renderGame() {
    renderHangman();
    renderSearchedWordBoxes();

    if (state.gameFinished === false) {
        renderClickableLetters();
    } else {
        renderRestartButton();
        if (state.failures < 11) {
            renderGratulation();
        }
    }
}

function wordGuessed() {
    for (let i = 0; i < state.searchedWord.length; i++) {
        if (state.clickedLetters.indexOf(state.searchedWord[i]) === -1) {
            return false;
        }
    }
    return true;
}

function clickedOnLetter(letter) {
    state.clickedLetters.push(letter);

    if (state.searchedWord.includes(letter) === false) {
        state.failures++;
    }

    if (state.failures === 11) {
        state.gameFinished = true;
    }

    if (wordGuessed() === true) {
        state.gameFinished = true;
    }

    render();
}

function render() {
    document.body.innerHTML = '';
    document.body.appendChild($('h1', null, 'Hangman'));

    if (state.gameStarted === false) {
        renderIntro();
    } else {
        renderGame();
    }
}

function $(tagname, clazz, text) {
    const element = document.createElement(tagname);
    if (clazz != null) {
        element.classList.add(clazz);
    }
    if (text != null) {
        element.innerText = text;
    }
    return element;
}

function startNewGame() {
    state.gameStarted = true;
    state.gameFinished = false;
    state.clickedLetters = [];
    state.failures = 0;
    state.searchedWord = newRandWord();
    render();
}

function newRandWord() {
    const randWord = words[Math.round(Math.random() * (words.length - 1))];
    return randWord.toLocaleUpperCase();
}


document.addEventListener('DOMContentLoaded', function () {
    render();
});