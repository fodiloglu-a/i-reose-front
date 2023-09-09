import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ServiceService} from "../../services/service.service";
import {ResponseModel} from "../model/ResponseModel";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CurrentDTO} from "../model/CurrentDTO";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  contentList: string[] = [
    'News : For Currency and Currency Rate',

  ];

  currentIndex: number = 0;
  currentContent: string = '';
   data: ResponseModel | null = null;



  public currencyDTOS:CurrentDTO[] | null=[];


  constructor(private sercice:ServiceService) {


    this.getHomePage()


  }

  ngOnInit(): void {

    this.updateTickerContent();
    setInterval(() => this.updateTickerContent(), 5000); // 5 saniyede bir içerikleri güncelle
  }

  updateTickerContent() {

    this.currentContent = this.contentList[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.contentList.length;
  }


 public getHomePage(){
    console.log("getHomePage")
    this.sercice.getHomePage().subscribe(
      (response:ResponseModel)=>{
        console.log("this.currencyDTOS=response.currencyDTOs;")
          this.currencyDTOS=response.currencyDTOs;
        this.currencyDTOS?.forEach((item) => {
          this.contentList.push(
            `${item.oznaka} >>>>>, Exchange Rate: ${item.exchangeRate}`);
        });



      },(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )

  }

  getRateColor(rateDay: number | null): string {
    // rateDay null ise varsayılan olarak 0 kabul edilir
    const rate = rateDay !== null ? rateDay : 0;

    if (rate < 0) {
      return 'red'; // Negatif değerler için kırmızı
    } else if (rate > 0) {
      return 'green'; // Pozitif değerler için yeşil
    } else {
      return '#F9D401'; // Sıfır veya null için siyah (isteğe bağlı)
    }
  }



}
