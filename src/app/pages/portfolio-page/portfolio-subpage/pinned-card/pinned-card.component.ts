import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../portfolio-subpage.component';

@Component({
  selector: 'app-pinned-card',
  templateUrl: './pinned-card.component.html',
  styleUrls: ['./pinned-card.component.scss']
})
export class PinnedCardComponent implements OnInit {

  @Input() pinnedCards: Project[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
