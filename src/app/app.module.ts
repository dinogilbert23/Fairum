import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomebackgroundComponent } from './homebackground/homebackground.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { HomegrowingnetworkComponent } from './homegrowingnetwork/homegrowingnetwork.component';
import { OurmissionComponent } from './ourmission/ourmission.component';
import { ResearchComponent } from './research/research.component';
import { FooterComponent } from './footer/footer.component';
import { TokenheaderComponent } from './tokenheader/tokenheader.component';
import { TokencontentComponent } from './tokencontent/tokencontent.component';
import { TiersheaderComponent } from './tiersheader/tiersheader.component';
import { TierscontentComponent } from './tierscontent/tierscontent.component';
import { BlogheaderComponent } from './blogheader/blogheader.component';
import { BlogcontentComponent } from './blogcontent/blogcontent.component';
import { PortfolioheadComponent } from './portfoliohead/portfoliohead.component';
import { PortfoliocontentComponent } from './portfoliocontent/portfoliocontent.component';
import { PartnerheadComponent } from './partnerhead/partnerhead.component';
import { PartnercontentComponent } from './partnercontent/partnercontent.component';
import { FaqheadComponent } from './faqhead/faqhead.component';
import { FaqcontentComponent } from './faqcontent/faqcontent.component';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFontAwesomeModule } from '';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomebackgroundComponent,
    HomesliderComponent,
    HomegrowingnetworkComponent,
    OurmissionComponent,
    ResearchComponent,
    FooterComponent,
    TokenheaderComponent,
    TokencontentComponent,
    TiersheaderComponent,
    TierscontentComponent,
    BlogheaderComponent,
    BlogcontentComponent,
    PortfolioheadComponent,
    PortfoliocontentComponent,
    PartnerheadComponent,
    PartnercontentComponent,
    FaqheadComponent,
    FaqcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
