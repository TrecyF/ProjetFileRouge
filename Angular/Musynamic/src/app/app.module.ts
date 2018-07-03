import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationProduitComponent } from './presentation-produit/presentation-produit.component';
import { CarouselImg } from './carousel/carousel-img';
import { AdministrateurComponent } from './administrateur/administrateur.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationProduitComponent,
    CarouselImg,
    AdministrateurComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule, WavesModule,
    HttpClientModule
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
