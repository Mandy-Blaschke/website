import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../portfolio-subpage.component';

@Component({
  selector: 'app-archived-card',
  templateUrl: './archived-card.component.html',
  styleUrls: ['./archived-card.component.scss']
})
export class ArchivedCardComponent implements OnInit {

  @Input() archivedProject: Project[];

  activeTag = 'ALLE';

  filterTags: string[] = ['ALLE', 'Responsive', 'Blickfang', 'Interaktiv', 'Angular', 'JavaScript', 'Kurs-Projekt', 'Statisch'];
  projectsToShow: Project[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.filterProjectsByTag('ALLE');
  }

  filterProjectsByTag(tag: string): void {
    if (tag === 'ALLE') {
      this.projectsToShow = this.archivedProject;
      this.activeTag = 'ALLE';
    } else {
    this.projectsToShow = this.archivedProject.filter((project) => project.tags.includes(tag));
    this.activeTag = tag;
    }
  }
}
