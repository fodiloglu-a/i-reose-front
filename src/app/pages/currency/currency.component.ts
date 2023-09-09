import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {Data} from "@angular/router";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
 // private LocalDate: any;
  //getMoveResponse:any

  constructor(private service:ServiceService) {
 //   this.LocalDate = this.LocalDate.of(2023, 9, 8);
  }





  ngOnInit(): void {

    //this.getMovie(this.LocalDate);

  }
  // getMovie(date:any){
  //   this.service.getByDatum(date).subscribe((result)=> this.getMoveResponse=result);
  //
  // }




}
