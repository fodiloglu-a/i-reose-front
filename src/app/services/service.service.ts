import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = "http://localhost:8080/home"; // Doğru şekilde apiUrl tanımlandı

  constructor(private http: HttpClient) { }

  getHomePage(): Observable<any> {
    console.log("getHomePage");

    return this.http.get<any>(this.apiUrl, { withCredentials: true })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("Hata:", error);
          alert(error.message);
          return throwError(error); // Hata yeniden iletilir
        })
      );
  }


  getByDatum(date: Date): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
