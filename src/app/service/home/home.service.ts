import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private API = 'http://localhost:8080/';
  private HOUSE_API = this.API + '/houses';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/houses');
  }

  get(id: string) {
    return this.http.get(this.HOUSE_API + '/' + id);
  }

  save(house: any): Observable<any> {
    let result: Observable<Object>;
    if (house['href']) {
      result = this.http.put(house.href, house);
    } else {
      result = this.http.post(this.HOUSE_API, house);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
