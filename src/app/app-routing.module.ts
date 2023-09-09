import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CurrencyComponent} from "./pages/currency/currency.component";
import {CurrencyPageComponent} from "./pages/currency-page/currency-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'currency', component: CurrencyPageComponent },
  // Add other routes as needed
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect to home by default
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
