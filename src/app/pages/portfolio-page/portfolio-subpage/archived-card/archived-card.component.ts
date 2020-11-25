import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../portfolio-subpage.component';

@Component({
  selector: 'app-archived-card',
  templateUrl: './archived-card.component.html',
  styleUrls: ['./archived-card.component.scss']
})
export class ArchivedCardComponent implements OnInit {

  @Input() archivedProject: Project[];

  filterTags: string[] = ['ALLE', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Kurs-Projekt'];

  projectsToShow: Project[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.filterProjectsByTag('ALLE');
  }

  filterProjectsByTag(tag: string): void {
    if (tag === 'ALLE') {
      this.projectsToShow = this.archivedProject;
    } else {
    this.projectsToShow = this.archivedProject.filter((project) => project.tags.includes(tag));
    }
  }
}
