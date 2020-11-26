import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qualification-subpage',
  templateUrl: './qualification-subpage.component.html',
  styleUrls: ['./qualification-subpage.component.scss']
})
export class QualificationSubpageComponent implements OnInit {

  quoteText = 'Um große Erfolge zu erreichen, muss etwas gewagt werden.';
  author = 'Helmuth von Moltke';

  stations = stations;


  leftSide = this.stations.filter((station) => this.stations.indexOf(station) % 2 === 0);
  rightSide = this.stations.filter((station) => this.stations.indexOf(station) % 2 !== 0);
  wideMedia = window.innerWidth > 640;

  showDescriptionToggling(station: CareerStation): boolean {
    return station.shown === false ? station.shown = true : station.shown = false;
  }

  ngOnInit(): void {
  }
}


export const stations: CareerStation[] = [
  {
    company: 'Selbststudium',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '06/2020 - heute',
    description: `Seit Juni lerne ich das Framework Angular mit Hilfe von Büchern, Online-Kursen und meinem Mann.
                  Seit dieser zeit erstelle ich auch all meine Projekte mit dem Framework.
                  Um meine Fähigkeiten weiter auszubauen, werde ich mich die nächste Zeit darauf konzentrieren,
                  Projekte zu erstellen, da ich der Meinung bin, dass man nicht besser Programmieren lernen kann, als durch Praxis.`,
    shown: false,
  },
  {
    company: 'Udemy Inc.',
    position: 'Studierende',
    specialization: 'Angular (2+)',
    date: '11/2020 - 11/2020',
    description: `Da ich mich für das Framework Angular entschieden hatte, hielt ich es für eine gute Ergänzung, noch einmal einen
                  kompletten Kurs für die Grundlagen und weiterführende Inhalte von Angular(2+) zu absolvieren.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '/assets/certificates/UdemyAngular(2+)VerstehenUndAnwenden.pdf',
  },
  {
    company: 'Udemy Inc.',
    position: 'Studierende',
    specialization: 'CSS & SCSS',
    date: '05/2020 - 05/2020',
    description: 'In diesem Kurs habe ich mich noch einmal ausführlich mit CSS3 beschäftigt und u.a. eine Einführung in ' +
      'SASS bzw. SCSS erhalten.',
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '/assets/certificates/UdemyCSSTheCompleteGuide2020.pdf',
  },
  {
    company: 'FreeCodeCamp Inc.',
    position: 'Studierende',
    specialization: 'JS - Algorithmen und Datenstrukturen',
    date: '05/2020 - 05/2020',
    description: `In diesem Kurs der FreeCodeCamp Inc. habe ich mich tiefergehend mit Algorithmen und Datenstrukturen in JavaScript beschäftigt.
                  Das hat mir geholfen, meine (anfänglich ausschließlich statischen) Webseiten mit Logik für bestimmte Funktionen zu erweitern.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '/assets/certificates/FreeCodeCampCertificateJavaScriptAlgorithmsAndDataStructures.pdf',
  },
  {
    company: 'FreeCodeCamp Inc.',
    position: 'Studierende',
    specialization: 'Responsive Web Design',
    date: '04/2020 - 04/2020',
    description: `In den Kursen der FreeCodeCamp Inc. habe ich wiederholt und ergänzend Responsive Web Design gelernt.
                  Die Kurse sind sehr informativ und bieten viele Übungen und Anwendungsaufgaben, sowie Projekte,
                  die zum Abschluss erstellt werden müssen, um alles Gelernte festigen zu können.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '/assets/certificates/FreeCodeCampCertificateResponsiveWebDesign.pdf',
  },
  {
    company: 'Udacity Inc.',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '03/2020 - 04/2020',
    description: `Da ich bereits wusste, dass ich unbedingt in den Bereich Front End Web wollte und
                  anhand der Rahmenlehrpläne ersichtlich wurde, dass dies nur einen sehr kleinen Teil des Studiums ausmachen würde,
                  habe ich einen weiteren Kurs bei Udacity absolviert und einen umfassenden Eindruck des Web Developments bekommen.
                  Dadurch wurde mir noch einmal ganz deutlich, dass dies genau der Bereich ist, den ich vertiefen möchte.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '/assets/certificates/NanodegreeFrontEndDeveloper.pdf',
  },
  {
    company: 'Udacity Inc.',
    position: 'Studierende',
    specialization: 'Einführung Programmierung',
    date: '01/2020 - 02/2020',
    description: `Bereits neben dem Studium an der HDA habe ich mich bei dem ersten Online-Kurs angemeldet und dieses
                  erfolgreich abgeschlossen. In dem Kurs von Udacity habe ich eine gute Einführung in die Programmierung
                  allgemein erhalten.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '/assets/certificates/NanodegreeIntroToProgramming.pdf',
  },
  {
    company: 'Hochschule Darmstadt',
    position: 'Studierende',
    specialization: 'Informatik | KMI',
    date: '10/2019 - 03/2020',
    description: `Das Studium an der HDA habe ich angebrochen. Auslöser dafür war die Corona-Pandemie und die damit
                  einhergehenden Schulschließungen und Unsicherheiten.
                  Dies ermöglichte es mir jedoch, mich konkret auf Front End Development zu konzentrieren.`,
    shown: false,
  },
  {
    company: 'Ferien/ Selbststudium',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '07/2019 - 10/2019',
    description: `Nach einem Urlaub in meiner Heimat habe ich begonnen, die ersten Bücher zum Thema HTML5 und CSS3
                   zu lesen und meine ersten statischen Webseiten erstellt bis zum Beginn meines Studiums an der Hochschule Darmstadt.`,
    shown: false,
  },
  {
    company: 'Wilhelm-Merton-Schule',
    position: 'Studierende',
    specialization: 'Betriebswirtschaftslehre',
    date: '08/2017 - 06/2019',
    description: `Da ich ursprünglich Wirtschaftsinformatik studieren wollte, ich jedoch kein Abitur hatte, habe ich
                   den staatl. geprüften Betriebswirten absolviert und zeitgleich mein Fachabitur erworben, um an einer Hochschule
                   studieren zu können. Da ich nun bereits einen Abschluss in Bereich Betriebswirtschaft hatte, habe ich mich an der
                   Hochschule für Informatik entschieden.`,
    shown: false,
    certificate: 'Zeugnis',
    certificateUrl: '/assets/certificates/BetriebswirtAbschlusszeugnis.pdf',
  },
  {
    company: 'Verschiedenes',
    position: 'Verschiedenes',
    specialization: '',
    date: '2007 - 08/2017',
    description: `Ich habe die allgemein bildende Schule mit der mittleren Reife verlassen.
                  Meine Ausbildung zur Kauffrau im Einzelhandel habe ich erfolgreich abgeschlossen.
                  Gearbeitet habe ich dann als Verkäuferin, Kauffrau, Kundenbetreuerin, Aushilfe und  ich war als Datenerfasserin tätig.
                  Zudem habe auch einmal ein Praktikum in einem Personalbüro gemacht. \n
                  All diese Tätigkeiten haben mich jedoch nicht glücklich gemacht. \n
                  Deshalb habe ich entschieden, mich weiter zu bilden, mein Abitur nachzuholen und in eine Tätigkeit zu investieren,
                  die Zukunft hat und anspruchsvoll ist.
                  So richtig wohl fühle ich mich erst seit ich begonnen habe, meine ersten Webseiten zu erstellen.`,
    shown: false,
  }
];


export interface CareerStation {
  company: string;
  position: string;
  specialization: string;
  date: string;
  description: string;
  shown: boolean;
  certificate?: string;
  certificateUrl?: string;
}
