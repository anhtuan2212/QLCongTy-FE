import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiPaths } from "src/environments/enums";
@Injectable({
  providedIn: "root",
})
export class NhansuService {
  BASE_URL = environment.fakeAPI;
  constructor(private http: HttpClient) {
  }
  // let url = `${this.baseUrl}/${ApiPaths.Foo}/all`;  -- ví dụ về cộng chuỗi URL
  
  getList(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }
  deleteById(id:number):Observable<any>{
    return this.http.delete(this.BASE_URL + id);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>(this.BASE_URL + id);
  }
}
