import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-subpage',
  templateUrl: './portfolio-subpage.component.html',
  styleUrls: ['./portfolio-subpage.component.scss']
})
export class PortfolioSubpageComponent implements OnInit {

  projects: Project[] = [
    {

      // TODO Change description
      title: 'Homepage',
      description: 'Das ist meine alte Homepage. Auf dieser finden Sie Informationen zu meiner Person, ' +
        'meiner Qualifikation und Antworten auf Fragen, die Sie vielleicht interessieren.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/homepage',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {

      // TODO Change description
      title: 'Portfolio',
      description: 'Hier handelt es sich um die Seite, die sie gerade sehen. Da ich ständig neue Projekte erstelle, ' +
        'mit wechselnden Anforderungen und Anwendungsfällen, wird diese Seite den Status "fertig" ' +
        'wahrscheinlich nie erreichen.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/portfolio',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {

      // TODO Change description
      title: 'Projekt Archiv',
      description: 'Dies ist mein altes Projekt Archiv, in dem Sie alle Projekte finden werden, die ich fertig gestellt habe. ' +
        'Dies ermöglicht Ihnen einen umfassenderen Eindruck meiner Entwicklung.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/archiv',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Schach',
      description: 'Schachbrett, sodass zwei Spieler gegeneinander spielen können.',
      preview: '',
      url: '',
      gitUrl: '',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Hangman',
      description: 'Das ein Spiel, bei dem ein Wort gesucht ist. Man rät Buchstaben, um das Wort zu finden, ' +
        'möglichst bevor der "Hangman" fertig gezeichnet wurde.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/hangman-game',
      tags: ['HTML', 'CSS', 'JavaScript'],
      pinned: false,
    },
    {
      title: 'TicTacToe',
      description: 'Das ist ein Drei-Gewinnt-Spiel, bei dem zwei Leute gegeneinander spielen können. ' +
        'Das ist meine neue Version von dem Spiel, dass ich dieses Mal mit dem Framework Angular erstellt habe.',
      preview: '/assets/previews/tictactoe-preview.webp',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: true,
    },
    {
      title: '17und4',
      description: 'Siebzehn-und-vier ist ein Kartenspiel. Es funktioniert fast genauso wie das bekannte Casino-Spiel \'Black Jack\'.',
      preview: '',
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
      preview: '',
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
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/senso-game',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Whack-a-Mole-Spiel',
      preview: '/assets/previews/whack-a-mole-preview.webp',
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
      preview: '/assets/previews/memory-preview.webp',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/memory-game',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: true,
    },
    {
      title: 'Vergieß Mein Nicht',
      description: 'Das eine App, die ich geschrieben habe, um den Überblick darüber behalten zu können, ' +
        'wann welche Pflanze gegossen werden muss.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/vergiess-mein-nicht',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Kalorientracker',
      description: 'Kalorien-App, die den Locale Storage nutzt.',
      preview: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/energiebedarf',
      url: '/assets/kal-v1/',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Rechne Mal',
      description: 'App, um die Malfolgen zu lernen, die ich für meine Nichte erstellt habe.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/malfolgen',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'ToDo-Liste',
      description: 'Einfache ToDo-Liste.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/todo-list',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Adressbuch',
      description: 'Diese Anwendung diente ausschließlich dem Lern-Effekt und ist nicht responsive.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/adressbuch',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Kundenverwaltung',
      description: 'Diese Anwendung diente ausschließlich dem Lern-Effekt und ist nicht responsive.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/kundenverwaltung',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
      pinned: false,
    },
    {
      title: 'Hangman - Version 1',
      description: 'Hangman-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/hangman-game',
      tags: ['HTML', 'CSS', 'JavaScript'],
      pinned: false,
    },
    {
      title: 'TicTacToc - Version 1',
      description: 'TicTacToe-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen. ' +
        'Zwei Spieler können gegen einander spielen, wobei die Münze entscheidet, wer beginnt.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
      tags: ['HTML', 'CSS', 'JavaScript'],
      pinned: false,
    },
    {
      title: 'SchereSteinPapier',
      description: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/scissors-stone-paper-game',
      tags: ['HTML', 'CSS', 'JavaScript'],
      pinned: false,
    },
    {
      title: 'Zahlen-Raten',
      description: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/zahlen-raten-spiel',
      tags: ['HTML', 'CSS', 'JavaScript'],
      pinned: false,
    },
    {
      title: 'Portfolio Page',
      description: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      preview: '',
      url: 'https://codepen.io/M-Andy89/pen/GRprbMQ',
      gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
      pinned: false,
    },
    {
      title: 'Documentation Page',
      description: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      preview: '',
      url: 'https://codepen.io/M-Andy89/pen/yLYgOWZ',
      gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
      pinned: false,
    },
    {
      title: 'Survey Form',
      description: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      preview: '',
      url: 'https://codepen.io/M-Andy89/pen/GRpZBqb',
      gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
      pinned: false,
    },
    {
      title: 'Landing Page',
      description: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      preview: '',
      url: 'https://codepen.io/M-Andy89/pen/LYpNKPd',
      gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
      pinned: false,
    },
    {
      title: 'Tribute Page',
      description: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      preview: '',
      url: 'https://codepen.io/M-Andy89/pen/pojyJGb',
      gitUrl: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
      pinned: false,
    },
    {
      title: 'Blog Page',
      description: 'Projekt aus meinem Udacity Kurs.',
      preview: '',
      url: '',
      gitUrl: 'https://github.com/Mandy-Blaschke/blog-page',
      tags: ['Udacity', 'Kurs-Projekt', 'HTML', 'CSS'],
      pinned: false,
    },
  ];

  pinnedProjects: Project[] = [];
  archivedProjects: Project[] = [];

  ngOnInit(): void {
    this.getPinnedProjects();
    this.getArchivedProjects();
  }

  getPinnedProjects(): void {
    this.pinnedProjects = this.projects.filter((project) => project.pinned);
  }

  getArchivedProjects(): void {
    this.archivedProjects = this.projects.filter((project) => !project.pinned);
  }

}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  preview: string;
  url: string;
  gitUrl: string;
  pinned: boolean;
}
