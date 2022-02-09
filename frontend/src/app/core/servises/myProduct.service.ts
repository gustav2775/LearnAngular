import { async } from '@angular/core/testing';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyProductService {
  private products: any = []
  private url_path = '/api/product'
  get getProducts() {
    return this.products;
  }

  constructor(private http: HttpClient) { }

  reqGet = async() => {
    await this.http.get(environment.ENV.localhost + this.url_path)
      .subscribe((res:any):any => {
        this.products =  res.results;
      })
  }

}
