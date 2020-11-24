import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {PortfolioSubpageComponent} from './pages/portfolio-page/portfolio-subpage/portfolio-subpage.component';
import {QualificationSubpageComponent} from './pages/qualification-page/qualification-subpage/qualification-subpage.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: 'start', component: StartPageComponent},
  {path: 'portfolio', component: PortfolioSubpageComponent},
  {path: 'leben', component: QualificationSubpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
