import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-subpage',
  templateUrl: './portfolio-subpage.component.html',
  styleUrls: ['./portfolio-subpage.component.scss']
})
export class PortfolioSubpageComponent implements OnInit {

  author = 'Leo Tolstoi';
  quoteText = 'Das Glück besteht nicht darin,  daß du tun kannst, was du willst, \n sondern darin, daß du immer willst, was du tust.';

  pinnedProjects: Project[] = [];
  archivedProjects: Project[] = [];

  ngOnInit(): void {
    this.pinnedProjects = projects.filter((project) => project.pinned);
    this.archivedProjects = projects.filter((project) => !project.pinned);
  }

}

export const projects: Project[] = [
  {
    title: 'Kopfschmerz-Tracker',
    description: 'Hier habe ich einen Kopfschmerz-Tracker erstellt. Bei dem neben der Intensität der Kopfschmerzen auch ' +
      'erfasst werden kann, ob man ausreichend getrunken hat, wie Stimmung und Wetter an dem jeweiligen Tag waren. ' +
      'Zudem ist es möglich, das Farbschema zu ändern.' +
      '\n ACHTUNG! Das \"Login\" ist nicht sicher!',
    preview: '/assets/previews/headache-tracker.webp',
    url: 'https://kopfschmerz-tracker.web.app/uebersicht',
    gitUrl: 'https://github.com/Mandy-Blaschke/headache-tracker',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: true,
  },
  {
    title: 'Tamagotchi',
    description: 'Das ist meine Version eines Tamagotchis - ein virtuelles Haustier, ' +
      'um das sich kümmern und mit dem man interagieren muss, da es andernfalls stirbt.  ' +
      'In dem Fall hat man dann die Möglichkeit, ein neues Tier zu adoptieren. ' +
      'Sämtliche Bilder sind von mir mit dem Programm Affinity Photo gezeichnet - abgesehen von den Emojis. ' +
      'Zur Zeit gibt es einen Hund und eine Katze, ich arbeite aber ggf. noch an weiteren Tieren. ' +
      'Dies ist zudem meine erste PWA.',
    preview: '/assets/previews/tamagotchi.webp',
    url: 'https://mandys-tamagotchi.web.app/',
    gitUrl: 'https://github.com/Mandy-Blaschke/tamagotchi-v4',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: true,
  },
  {
    title: 'Kanban-Board',
    description: 'Das ist mein erstes Projekt mit Backend und auch das erste, in dem ich Drag & Drop genutzt habe. ' +
      'Es ist lediglich eine Demo, weshalb man nur Testdaten eintragen sollte.',
    preview: '/assets/previews/kanban-demo.webp',
    url: '/assets/projects/kanban/',
    gitUrl: 'https://github.com/Mandy-Blaschke/kanban-board',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: true,
  },
  {
    title: 'Homepage',
    description: 'Das ist meine alte Homepage. Auf dieser Seite finden Sie bei Bedarf noch immer weitere Informationen zu mir.',
    preview: '/assets/previews/webseite.webp',
    url: '/assets/projects/website-v5/',
    gitUrl: 'https://github.com/Mandy-Blaschke/homepage',
    tags: ['Responsive', 'Angular', 'Statisch', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'Portfolio',
    description: 'Hier handelt es sich um mein vorheriges Portfolio, auf der ich meine Projekte veröffentlicht habe.',
    preview: '/assets/previews/portfolio.webp',
    url: '/assets/projects/portfolio/',
    gitUrl: 'https://github.com/Mandy-Blaschke/portfolio',
    tags: ['Responsive', 'Angular', 'Statisch', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'Projekt Archiv',
    description: 'Dies ist mein altes Projekt Archiv. In diesem habe ich alle Projekte gehabt, ' +
      'die ich nicht mehr auf Firebase veröffentlicht hatte.',
    preview: '/assets/previews/archiv.webp',
    url: '/assets/projects/archiv/',
    gitUrl: 'https://github.com/Mandy-Blaschke/archiv',
    tags: ['Responsive', 'Angular', 'Statisch'],
    pinned: false,
  },
  {
    title: 'Schere-Stein-Papier - V2',
    description: 'Klassisches Schere-Stein-Papier-Spiel, das man gegen den Computer spielt, der zufällig entscheidet, was er wählt. ' +
      'Diesmal mit dem framework Angular erstellt und mit einigen Animationen.',
    preview: '/assets/previews/scissors-stone-paper.webp',
    url: '/assets/projects/ssp/',
    gitUrl: 'https://github.com/Mandy-Blaschke/scissors-stone-paper-v2',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'Schach',
    description: 'Schachbrett, sodass zwei Spieler gegeneinander spielen können. ' +
      'Die Regeln habe ich nicht implementiert, aber eine Neustartfunktion ist vorhanden.',
    preview: '/assets/previews/schach.webp',
    url: '/assets/projects/chess/',
    gitUrl: 'https://github.com/Mandy-Blaschke/chess',
    tags: ['Responsive', 'Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Hangman - V2',
    description: 'Das ein Spiel, bei dem ein Wort gesucht ist. Man rät Buchstaben, um das Wort zu finden, ' +
      'möglichst bevor der "Hangman" fertig gezeichnet wurde.',
    preview: '/assets/previews/hangman2.webp',
    url: '/assets/projects/hangman-game/',
    gitUrl: 'https://github.com/Mandy-Blaschke/hangman-game',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'TicTacToe - V2',
    description: 'Das ist ein Drei-Gewinnt-Spiel, bei dem zwei Leute gegeneinander spielen können. ' +
      'Das ist meine neue Version von dem Spiel, dass ich dieses Mal mit dem Framework Angular erstellt habe.',
    preview: '/assets/previews/tictactoe2.webp',
    url: '/assets/projects/tictactoe/',
    gitUrl: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: false,
  },
  {
    title: '17und4',
    description: 'Siebzehn-und-vier ist ein Kartenspiel. Es funktioniert fast genauso wie das bekannte Casino-Spiel \'Black Jack\'.',
    preview: '/assets/previews/17und4.webp',
    url: '/assets/projects/siebzehn-und-vier/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/siebzehn-und-vier',
    tags: ['Responsive', 'Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Pomodoro-Clock',
    description: 'Eine einfache Pomodoro- oder auch Tomato-Clock, bei der man das Intervall festlegen kann und ein Alarm ertönt, wenn ' +
      'die Zeit abgelaufen ist. Bei diesem Projekt hatte ich Hilfe von meinem Mann, bei der Berechnung der Zeiten und deren Aktualisierung, ' +
      'da dies mein erstes Projekt war, bei dem ich Zeitstempel genutzt habe.',
    preview: '/assets/previews/pomodoro.webp',
    url: '/assets/projects/pomodoro/',
    gitUrl: 'https://github.com/Mandy-Blaschke/pomodoro-clock',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'Senso (Simon Says)',
    description: 'Das Spiel hat vier Felder mit unterschiedlichen ' +
      'Farben, der jeweils ein Ton zugeordnet ist. Senso beginnt damit in der ersten Runde einen (in der zweiten zwei usw.) Ton ' +
      'vorzugeben, den der Spieler sich merken und nachspielen muss. Mit wachsender Anzahl werden die Vorgaben schneller.',
    preview: '/assets/previews/senso.webp',
    url: '/assets/projects/senso/',
    gitUrl: 'https://github.com/Mandy-Blaschke/senso-game',
    tags: ['Responsive', 'Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Whack-a-Mole-Spiel',
    description: 'Ein Spiel, bei dem um Schnelligkeit geht. Ziel ist es möglichst viele Punkte zu erzielen. ' +
      'Diese bekommt man, indem man einem Maulwurf, der zufällig auf dem Spielfeld erscheint zurück in die ' +
      'Höhle schlägt, bevor dieser wieder verschwindet. Anfangs erscheint nur einer, ' +
      'im Verlauf des Spiels mehrere zugleich.',
    preview: '/assets/previews/mole.webp',
    url: '/assets/projects/whack-a-mole/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/whack-a-mole',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'Memory',
    description: 'Das klassische Memory Spiel, bei dem das Ziel darin besteht, alle Kartenpaare zu finden.' +
      ' Es ist alleine, zu zweit, sowie gegen den Computer spielbar. Der Computer hat aktuell drei Schwierigkeitsstufen.',
    preview: '/assets/previews/memory.webp',
    url: '/assets/projects/memory-v1/',
    gitUrl: 'https://github.com/Mandy-Blaschke/memory-game',
    tags: ['Responsive', 'Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Vergieß Mein Nicht',
    description: 'Das eine App, die ich geschrieben habe, um den Überblick darüber behalten zu können, ' +
      'wann welche Pflanze gegossen werden muss.',
    preview: '/assets/previews/giess-app.webp',
    url: '/assets/projects/plant-watering2',
    gitUrl: 'https://github.com/Mandy-Blaschke/vergiess-mein-nicht',
    tags: ['Responsive', 'Angular', 'Interaktiv', 'Blickfang'],
    pinned: false,
  },
  {
    title: 'Kalorientracker',
    description: 'Kalorien-App, die den Locale Storage nutzt. Bei dieser ist es möglich, einzelne Nahrungsmittel ' +
      'oder einzelne Zutaten und dann in Summe die Mahlzeit hinzuzufügen.',
    preview: '/assets/previews/kalorien.webp',
    url: '/assets/projects/kal-v1/',
    gitUrl: 'https://github.com/Mandy-Blaschke/energiebedarf',
    tags: ['Responsive', 'Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Rechne Mal',
    description: 'App, um die Malfolgen zu lernen, die ich für meine Nichte erstellt habe, damit sie die Malfolgen lernen konnte.',
    preview: '/assets/previews/rechnen.webp',
    url: '/assets/projects/mathe-app/',
    gitUrl: 'https://github.com/Mandy-Blaschke/malfolgen',
    tags: ['Responsive', 'Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'ToDo-Liste',
    description: 'Einfache ToDo-Liste. ACHTUNG! Das Projekt hat weder aufwendige Styles, noch ist es responsive gestaltet.',
    preview: '/assets/previews/todo.webp',
    url: '/assets/projects/todo/',
    gitUrl: 'https://github.com/Mandy-Blaschke/todo-list',
    tags: ['Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Adressbuch',
    description: 'Diese Anwendung diente ausschließlich dem Lern-Effekt. ' +
      'ACHTUNG! Das Projekt hat weder aufwendige Styles, noch ist es responsive gestaltet.',
    preview: '/assets/previews/adressbuch.webp',
    url: '/assets/projects/adress/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/adressbuch',
    tags: ['Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Kundenverwaltung',
    description: 'Diese Anwendung diente ausschließlich dem Lern-Effekt. ' +
      'ACHTUNG! Das Projekt hat weder aufwendige Styles, noch ist es responsive gestaltet.',
    preview: '/assets/previews/kunden.webp',
    url: '/assets/projects/kund/',
    gitUrl: 'https://github.com/Mandy-Blaschke/kundenverwaltung',
    tags: ['Angular', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Hangman - V1',
    description: 'Hangman-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
    preview: '/assets/previews/hangman1.webp',
    url: '/assets/projects/hangman-game/sources/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/hangman-game',
    tags: ['Responsive', 'JavaScript', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'TicTacToc - V1',
    description: 'TicTacToe-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen. ' +
      'Zwei Spieler können gegen einander spielen, wobei die Münze entscheidet, wer beginnt.',
    preview: '/assets/previews/tictactoe1.webp',
    url: '/assets/projects/tic-tac-toe-game/sources/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
    tags: ['Responsive', 'JavaScript', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Schere-Stein-Papier - V1',
    description: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
    preview: '/assets/previews/schere-stein-papier.webp',
    url: '/assets/projects/scissors-stone-paper-game/sources/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/scissors-stone-paper-game',
    tags: ['Responsive', 'JavaScript', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Zahlen-Raten',
    description: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
    preview: '/assets/previews/zahlen-raten.webp',
    url: '/assets/projects/zahlen-raten-spiel/sources/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/zahlen-raten-spiel',
    tags: ['Responsive', 'JavaScript', 'Interaktiv'],
    pinned: false,
  },
  {
    title: 'Portfolio Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/portfolio1.webp',
    url: 'https://codepen.io/M-Andy89/pen/GRprbMQ',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['Responsive', 'Kurs-Projekt', 'Statisch'],
    pinned: false,
  },
  {
    title: 'Documentation Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/documentation.webp',
    url: 'https://codepen.io/M-Andy89/pen/yLYgOWZ',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['Responsive', 'Kurs-Projekt', 'Statisch'],
    pinned: false,
  },
  {
    title: 'Survey Form',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/survey.webp',
    url: 'https://codepen.io/M-Andy89/pen/GRpZBqb',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['Responsive', 'Kurs-Projekt', 'Statisch'],
    pinned: false,
  },
  {
    title: 'Landing Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/landing.webp',
    url: 'https://codepen.io/M-Andy89/pen/LYpNKPd',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['Responsive', 'Kurs-Projekt', 'Statisch'],
    pinned: false,
  },
  {
    title: 'Tribute Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/tribute.webp',
    url: 'https://codepen.io/M-Andy89/pen/pojyJGb',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['Responsive', 'Kurs-Projekt', 'Statisch'],
    pinned: false,
  },
  {
    title: 'Blog Page',
    description: 'Projekt aus meinem Udacity Kurs. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/blog.webp',
    url: '/assets/projects/blog-page/sources/index.html',
    gitUrl: 'https://github.com/Mandy-Blaschke/blog-page',
    tags: ['Responsive', 'Kurs-Projekt', 'Statisch'],
    pinned: false,
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  preview: string;
  url: string;
  gitUrl: string;
  pinned: boolean;
}
