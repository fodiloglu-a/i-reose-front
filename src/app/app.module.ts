import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './pages/currency/currency.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './pages/component/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    NavbarComponent,
    HomePageComponent,
    CurrencyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
