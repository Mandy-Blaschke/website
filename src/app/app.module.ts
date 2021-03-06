import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponent } from './common/header/header.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { QualificationPageComponent } from './pages/qualification-page/qualification-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ButtonComponent } from './common/button/button.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MainPageButtonComponent } from './common/main-page-button/main-page-button.component';
import { PortfolioSubpageComponent } from './pages/portfolio-page/portfolio-subpage/portfolio-subpage.component';
import { PinnedCardComponent } from './pages/portfolio-page/portfolio-subpage/pinned-card/pinned-card.component';
import { ArchivedCardComponent } from './pages/portfolio-page/portfolio-subpage/archived-card/archived-card.component';
import { QualificationSubpageComponent } from './pages/qualification-page/qualification-subpage/qualification-subpage.component';
import { QuoteComponent } from './common/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    PortfolioPageComponent,
    QualificationPageComponent,
    ContactPageComponent,
    ButtonComponent,
    WelcomePageComponent,
    MainPageButtonComponent,
    PortfolioSubpageComponent,
    PinnedCardComponent,
    ArchivedCardComponent,
    QualificationSubpageComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
