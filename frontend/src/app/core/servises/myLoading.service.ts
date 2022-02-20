import { BehaviorSubject, timer } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public  statusLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // не могу понять как заменить в ТС запинить this в функции при использование setTimeout
  set setStatusLoading(status: string) {
    const self = this;
    switch (status) {
      case 'start':
        self.statusLoading.next(true);
        break;
      case 'stop':
        timer(1000).subscribe(()=> self.statusLoading.next(false)) 
        break;
    }
  }
}
