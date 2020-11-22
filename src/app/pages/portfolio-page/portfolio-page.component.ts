import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToSubpage(): void {
    this.router.navigate(['portfolio']);
  }
}
