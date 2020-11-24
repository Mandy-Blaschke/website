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
    title: 'Homepage',
    description: 'Das ist meine alte Homepage. Auf dieser Seite finden Sie bei Bedarf noch immer weitere Informationen zu mir.',
    preview: '/assets/previews/webseite.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/homepage',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Portfolio',
    description: 'Hier handelt es sich um mein vorheriges Portfolio, auf der ich meine Projekte veröffentlicht habe.',
    preview: '/assets/previews/portfolio.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/portfolio',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Projekt Archiv',
    description: 'Dies ist mein altes Projekt Archiv. In diesem habe ich alle Projekte gehabt, die ich nicht mehr auf Firebase veröffentlicht hatte.',
    preview: '/assets/previews/archiv.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/archiv',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Schach',
    description: 'Schachbrett, sodass zwei Spieler gegeneinander spielen können. ' +
      'Die Regeln habe ich (noch?) nicht implementiert, aber eine Neustartfunktion ist vorhanden.',
    preview: '/assets/previews/schach.webp',
    url: '',
    gitUrl: '',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Hangman',
    description: 'Das ein Spiel, bei dem ein Wort gesucht ist. Man rät Buchstaben, um das Wort zu finden, ' +
      'möglichst bevor der "Hangman" fertig gezeichnet wurde.',
    preview: '/assets/previews/hangman2.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/hangman-game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    pinned: false,
  },
  {
    title: 'TicTacToe',
    description: 'Das ist ein Drei-Gewinnt-Spiel, bei dem zwei Leute gegeneinander spielen können. ' +
      'Das ist meine neue Version von dem Spiel, dass ich dieses Mal mit dem Framework Angular erstellt habe.',
    preview: '/assets/previews/tictactoe2.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: true,
  },
  {
    title: '17und4',
    description: 'Siebzehn-und-vier ist ein Kartenspiel. Es funktioniert fast genauso wie das bekannte Casino-Spiel \'Black Jack\'.',
    preview: '/assets/previews/17und4.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/siebzehn-und-vier',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Pomodoro-Clock',
    description: 'Eine einfache Pomodoro- oder auch Tomato-Clock, bei der man das Intervall festlegen kann und ein Alarm ertönt, wenn ' +
      'die Zeit abgelaufen ist. Bei diesem Projekt hatte ich Hilfe von meinem Mann, bei der Berechnung der Zeiten und deren Aktualisierung, ' +
      'da dies mein erstes Projekt war, bei dem ich Zeitstempel genutzt habe.',
    preview: '/assets/previews/pomodoro.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/pomodoro-clock',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Senso (Simon Says)',
    description: 'Das Spiel hat vier Felder mit unterschiedlichen ' +
      'Farben, der jeweils ein Ton zugeordnet ist. Senso beginnt damit in der ersten Runde einen (in der zweiten zwei usw.) Ton ' +
      'vorzugeben, den der Spieler sich merken und nachspielen muss. Mit wachsender Anzahl werden die Vorgaben schneller.',
    preview: '/assets/previews/senso.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/senso-game',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Whack-a-Mole-Spiel',
    preview: '/assets/previews/mole.webp',
    url: '',
    description: 'Ein Spiel, bei dem um Schnelligkeit geht. Ziel ist es möglichst viele Punkte zu erzielen. ' +
      'Diese bekommt man, indem man einem Maulwurf, der zufällig auf dem Spielfeld erscheint zurück in die ' +
      'Höhle schlägt, bevor dieser wieder verschwindet. Anfangs erscheint nur einer, ' +
      'im Verlauf des Spiels mehrere zugleich.',
    gitUrl: 'https://github.com/Mandy-Blaschke/whack-a-mole',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: true,
  },
  {
    title: 'Memory',
    description: 'Das klassische Memory Spiel, bei dem das Ziel darin besteht, alle Kartenpaare zu finden.' +
      ' Es ist alleine, zu zweit, sowie gegen den Computer spielbar. Der Computer hat aktuell drei Schwierigkeitsstufen.',
    preview: '/assets/previews/memory.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/memory-game',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: true,
  },
  {
    title: 'Vergieß Mein Nicht',
    description: 'Das eine App, die ich geschrieben habe, um den Überblick darüber behalten zu können, ' +
      'wann welche Pflanze gegossen werden muss.',
    preview: '/assets/previews/giess-app.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/vergiess-mein-nicht',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Kalorientracker',
    description: 'Kalorien-App, die den Locale Storage nutzt. Bei dieser ist es möglich, einzelne Nahrungsmittel ' +
      'oder einzelne Zutaten und dann in Summe die Mahlzeit hinzuzufügen.',
    preview: '/assets/previews/kalorien.webp',
    gitUrl: 'https://github.com/Mandy-Blaschke/energiebedarf',
    url: '/assets/kal-v1/',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Rechne Mal',
    description: 'App, um die Malfolgen zu lernen, die ich für meine Nichte erstellt habe, damit sie die Malfolgen lernen konnte.',
    preview: '/assets/previews/rechnen.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/malfolgen',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'ToDo-Liste',
    description: 'Einfache ToDo-Liste. ACHTUNG! Das Projekt hat weder aufwendige Styles, noch ist es responsive gestaltet.',
    preview: '/assets/previews/todo.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/todo-list',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Adressbuch',
    description: 'Diese Anwendung diente ausschließlich dem Lern-Effekt. ' +
      'ACHTUNG! Das Projekt hat weder aufwendige Styles, noch ist es responsive gestaltet.',
    preview: '/assets/previews/adressbuch.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/adressbuch',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Kundenverwaltung',
    description: 'Diese Anwendung diente ausschließlich dem Lern-Effekt. ' +
      'ACHTUNG! Das Projekt hat weder aufwendige Styles, noch ist es responsive gestaltet.',
    preview: '/assets/previews/kunden.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/kundenverwaltung',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    pinned: false,
  },
  {
    title: 'Hangman - Version 1',
    description: 'Hangman-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
    preview: '/assets/previews/hangman1.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/hangman-game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    pinned: false,
  },
  {
    title: 'TicTacToc - Version 1',
    description: 'TicTacToe-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen. ' +
      'Zwei Spieler können gegen einander spielen, wobei die Münze entscheidet, wer beginnt.',
    preview: '/assets/previews/tictactoe1.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    pinned: false,
  },
  {
    title: 'SchereSteinPapier',
    description: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
    preview: '/assets/previews/schere-stein-papier.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/scissors-stone-paper-game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    pinned: false,
  },
  {
    title: 'Zahlen-Raten',
    description: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
    preview: '/assets/previews/zahlen-raten.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/zahlen-raten-spiel',
    tags: ['HTML', 'CSS', 'JavaScript'],
    pinned: false,
  },
  {
    title: 'Portfolio Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/portfolio1.webp',
    url: 'https://codepen.io/M-Andy89/pen/GRprbMQ',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    pinned: false,
  },
  {
    title: 'Documentation Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/documentation.webp',
    url: 'https://codepen.io/M-Andy89/pen/yLYgOWZ',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    pinned: false,
  },
  {
    title: 'Survey Form',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/survey.webp',
    url: 'https://codepen.io/M-Andy89/pen/GRpZBqb',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    pinned: false,
  },
  {
    title: 'Landing Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/landing.webp',
    url: 'https://codepen.io/M-Andy89/pen/LYpNKPd',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    pinned: false,
  },
  {
    title: 'Tribute Page',
    description: 'Projekt aus meinen Kursen bei FreeCodeCamp. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/tribute.webp',
    url: 'https://codepen.io/M-Andy89/pen/pojyJGb',
    gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
    tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    pinned: false,
  },
  {
    title: 'Blog Page',
    description: 'Projekt aus meinem Udacity Kurs. Zum Bestehen war die Einhaltung bestimmter Vorgaben notwendig.',
    preview: '/assets/previews/blog.webp',
    url: '',
    gitUrl: 'https://github.com/Mandy-Blaschke/blog-page',
    tags: ['Udacity', 'Kurs-Projekt', 'HTML', 'CSS'],
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
