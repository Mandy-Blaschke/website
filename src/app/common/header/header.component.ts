import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showNav = false;
  navOnceOpened = false;
  changeHeader = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScroll(): void {
    // console.log('Scroll', window.scrollY);
    this.changeHeader = window.scrollY > 20;
  }

  async toContact(): Promise<void> {
    await this.router.navigate(['start']);
    scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }

  async toStart(): Promise<void> {
    await this.router.navigate(['start']);
    scrollTo({top: 0, behavior: 'smooth'});
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
    this.navOnceOpened = true;
  }
}
