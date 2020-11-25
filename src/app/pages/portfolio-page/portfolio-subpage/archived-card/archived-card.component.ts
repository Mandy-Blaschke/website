import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../portfolio-subpage.component';

@Component({
  selector: 'app-archived-card',
  templateUrl: './archived-card.component.html',
  styleUrls: ['./archived-card.component.scss']
})
export class ArchivedCardComponent implements OnInit {

  @Input() archivedCard: Project[];

  filter: string[] = ['Alle', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Kurs-Projekt'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
