import { BehaviorSubject, catchError, debounceTime, map, retry, Observable, Subject } from 'rxjs';
import { LoadingService } from './myLoading.service';
import { environment } from '../../environments/environment.prod';
import { Inject, Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

interface IProduct {
  id:number,
  price:number,
  name:string
}

@Injectable({
  providedIn: 'root'
})
//не работает debounceTime, не получается BehaviorSubject задать обощение 
export class MyProductService {
  public products: BehaviorSubject<[]> = new BehaviorSubject([]);
  private urlPath = '/api/product';

  public productsObserver = ajax(environment.ENV.localhost + this.urlPath).pipe(
    map((res) => {
      if (res.status) {
        this.LoadingService.setStatusLoading = 'stop'
        return res.response
      }
    }),
    retry(2),
    debounceTime(2000),
    catchError(() => this.LoadingService.setStatusLoading = 'stop')
  )

  constructor(@Inject('loadingService') private LoadingService: LoadingService) { }

  reqGet = async () => {
    this.LoadingService.setStatusLoading = 'start'
    this.productsObserver.subscribe((res: any) => {
      this.products.next(res.results)
    })
  }
}
