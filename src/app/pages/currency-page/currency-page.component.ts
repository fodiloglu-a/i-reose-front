import {Component} from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ResponseModel } from '../model/ResponseModel';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentDTO } from '../model/CurrentDTO';


@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.css'],
})
export class CurrencyPageComponent  {
  response: any;

  public currencyDTOS: CurrentDTO[] | null = [];
  public sendList:CurrentDTO[]=[];
  startDate: Date|any;
  endDate:Date|any;
  profitLose: { [key: string]: number } = {};


  constructor(private service: ServiceService) {

    this.getPage();


  }



  public getPage(): void {
    console.log('getHomePage');
    this.service.getCurrencyPage().subscribe(
      (response: ResponseModel) => {
        this.response = response;




        if (response.currencyDTOs) {
          this.currencyDTOS = response.currencyDTOs.map((item) => ({
            ...item,
            isSelected: false,
            // isSelected'i varsayılan olarak false ayarla
          }));


        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getComparePage():void{
    console.log('getHomePage');
    if (this.response) {
      this.service.getComparePageValue(this.response).subscribe(
        (response: ResponseModel) => {
          this.response = response
          this.profitLose=response.profitAndLose


        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }
  getCompare() {
    console.log(this.startDate);
    console.log(this.endDate);

    if (
      this.startDate !== null &&
      this.endDate !== null &&
      this.startDate <= this.endDate

    ) {
      if (this.response !== undefined && this.response !== null) {
        console.log("eeeeeeeeeeee");
        const lent = this.sendList.length;
        console.log("eeeeeeeeeeee" + lent);

        if (lent > 0) {
          this.response.endDate = new Date(this.startDate); // Tarihleri ayarlamak için yeni bir tarih oluşturuyoruz.
          this.response.startDate = new Date(this.endDate);
          this.response.oznakaFirs = this.sendList[lent - 2].oznaka;
          this.response.oznakaSecont = this.sendList[lent - 1].oznaka;

          this.getComparePage();
          console.log(1);
        } else {
          console.log("HATAAAAA");
        }
      } else {
        console.log("compareRequestModel null veya undefined."+this.response);
      }
    } else {
      console.log("HATAAAAA");
    }
  }



  addSelected(item: CurrentDTO) {
    const lent = this.sendList.length;
    let poppedItem: CurrentDTO | undefined; // poppedItem değişkenini tanımlayın ve başlangıçta undefined olarak ayarlayın

    if (lent >= 2) {
      poppedItem = this.sendList.pop(); // Pop işlemi sonucunu poppedItem değişkenine atar

      // poppedItem tanımlı ise isSelected özelliğini ayarlayabilirsiniz
      if (poppedItem) {
        poppedItem.isSelected = false;
        this.sendList.push(item)
        console.log(this.sendList);
      }
    } else {
      // Dizinin sonuna öğe ekleyin
      this.sendList.push(item);

      // Eklenen öğenin isSelected özelliğini ayarlayın
      this.sendList[lent].isSelected = false;
      console.log(this.sendList);
    }
  }


  protected readonly Object = Object;
}
