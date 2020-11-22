import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { QualificationPageComponent } from './pages/qualification-page/qualification-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ButtonComponent } from './common/button/button.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MainPageButtonComponent } from './common/main-page-button/main-page-button.component';
import { PortfolioSubpageComponent } from './pages/portfolio-page/portfolio-subpage/portfolio-subpage.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioPageComponent,
    QualificationPageComponent,
    ContactPageComponent,
    ButtonComponent,
    WelcomePageComponent,
    MainPageButtonComponent,
    PortfolioSubpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
