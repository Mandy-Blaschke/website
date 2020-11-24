import {Component} from '@angular/core';

@Component({
  selector: 'app-qualification-subpage',
  templateUrl: './qualification-subpage.component.html',
  styleUrls: ['./qualification-subpage.component.scss']
})
export class QualificationSubpageComponent {

  quoteText = 'Um große Erfolge zu erreichen, muss etwas gewagt werden.';
  author = 'Helmuth von Moltke';

  stations = stations;

  leftSide = this.stations.filter((station) => this.stations.indexOf(station) % 2 === 0);
  rightSide = this.stations.filter((station) => this.stations.indexOf(station) % 2 !== 0);

  showDescriptionToggling(station: CareerStation): boolean {
    return station.shown === false ? station.shown = true : station.shown = false;
  }
}


export const stations: CareerStation[] = [
  {
    company: 'Selbststudium',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '06/2020 - heute',
    description: `Seit Juni lerne ich das Framework Angular mit Hilfe von Büchern und meinem Mann.
                  Demnächst werde ich weitere Kurse bei der Udemy Inc. absolvieren, um ein umfassendenderes
                  Wissen zu erlangen und besser sowie schneller im Umgang mit dem Framework zu werden. `,
    shown: false,
  },
  {
    company: 'Udemy Inc.',
    position: 'Studierende',
    specialization: 'Angular (2+)',
    date: '11/2020 - 11/2020',
    description: 'In diesem Kurs habe ich noch einmal die Grundlagen und weiterführende Inhalte von Angular(2+) gelernt.',
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '',
  },
  {
    company: 'Udemy Inc.',
    position: 'Studierende',
    specialization: 'CSS & SCSS',
    date: '05/2020 - 05/2020',
    description: 'In diesem Kurs habe ich mich noch einmal ausführlich mit CSS3 beschäftigt und u.a. eine Einführung in SASS erhalten.',
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '',
  },
  {
    company: 'FreeCodeCamp Inc.',
    position: 'Studierende',
    specialization: 'JS - Algorithmen und Datenstrukturen',
    date: '05/2020 - 05/2020',
    description: `In den Kursen der FreeCodeCamp Inc. habe ich einmal mehr Algorithmen und Datenstrukturen in JavaScript gelernt.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '',
  },
  {
    company: 'FreeCodeCamp Inc.',
    position: 'Studierende',
    specialization: 'Responsive Web Design',
    date: '04/2020 - 04/2020',
    description: `In den Kursen der FreeCodeCamp Inc. habe ich wiederholt und ergänzend Responsive Web Design gelernt.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '',
  },
  {
    company: 'Udacity Inc.',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '01/2020 - 04/2020',
    description: `Bereits neben dem Studium an der HDA habe ich mich bei den ersten Online-Kursen angemeldet und diese
                  erfolgreich abgeschlossen, da ich bereits wusste, dass ich unbedingt in den Bereich Front End Web wollte und
                  anhand der Rahmenlehrpläne ersichtlich wurde, dass dies nur einen kleinen Teil des Studiums ausmachen würde.
                  In den Kursen von Udacity habe ich eine gute Einführung in die Programmierung und das Front End Deveopment erhalten.`,
    shown: false,
    certificate: 'Zertifikat',
    certificateUrl: '',
  },
  {
    company: 'Hochschule Darmstadt',
    position: 'Studierende',
    specialization: 'Informatik | KMI',
    date: '10/2019 - 03/2020',
    description: `Das Studium an der HDA habe ich angebrochen. Auslöser dafür war die Corona-Pandemie und die damit
                   einhergehenden Schulschließungen.
                   Dies ermöglichte es mir jedoch, mich konkret auf Front End Development zu konzentrieren.`,
    shown: false,
  },
  {
    company: 'Ferien/ Selbststudium',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '07/2019 - 10/2019',
    description: `Nach einem Urlaub in meiner Heimat habe ich begonnen, die ersten Bücher zum Thema HTML5 und CSS3
                   zu lesen und meine ersten statischen Webseiten erstellt, bis zum Beginn meines Studiums an der Hochschule Darmstadt.`,
    shown: false,
  },
  {
    company: 'Wilhelm-Merton-Schule',
    position: 'Studierende',
    specialization: 'Betriebswirtschaftslehre',
    date: '08/2017 - 06/2019',
    description: `Da ich ursprünglich Wirtschaftsinformatik studieren wollte, ich jedoch kein Abitur hatte, hatte ich mir überlegt,
                   den staatl. geprüften Betriebswirten zu absolvieren und zeitgleich mein Fachabitur zu erwerben, um an einer Hochschule
                   studieren zu können. Da ich nun bereits einen Abschluss in Bereich Betriebswirtschaft hatte, habe ich mich an der
                   Hochschule für Informatik entschieden.`,
    shown: false,
    certificate: 'Zeugnis',
    certificateUrl: '',
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

export const certificatePreview: PreviewModel[] = [
  {
    preview: './assets/previews/nanodegree-intro-into-programming.jpg',
    label: 'NanoDegree - Intro Into Programming',
    url: 'assets/certificates/NanodegreeIntroToProgramming.pdf'
  },
  {
    preview: './assets/previews/nanodegree-front-end-developer.jpg',
    label: 'NanoDegree - Front End Developer',
    url: 'assets/certificates/NanodegreeFrontEndDeveloper.pdf'
  },
  {
    preview: './assets/previews/certificate-responsive-web-design.jpg',
    label: 'Zertifikat - Responsive Web Design',
    url: 'assets/certificates/FreeCodeCampCertificateResponsiveWebDesign.pdf'
  },
  {
    preview: './assets/previews/certificate-javascript-algorithms-and-data-structures.jpg',
    label: 'Zertifikat - JavaScript Algorithmen & Datenstrukturen',
    url: 'assets/certificates/FreeCodeCampCertificateJavaScriptAlgorithmsAndDataStructures.pdf'
  },
  {
    preview: './assets/previews/certificate-css-the-complete-guide.jpg',
    label: 'Zertifikat - CSS - The Complete Guide 2020 (inkl. Flexbox, Grid & Sass)',
    url: 'assets/certificates/UdemyCSSTheCompleteGuide2020.pdf'
  },
  {
    preview: './assets/previews/certificate-angular(2+)-vertehen-und-anwenden.jpg',
    label: 'Zertifikat - Angular (2+) verstehen und anwenden',
    url: 'assets/certificates/UdemyAngular(2+)VerstehenUndAnwenden.pdf'
  },
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

export interface PreviewModel {
  preview: string;
  label: string;
  url: string;
}
