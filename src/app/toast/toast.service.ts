import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastChanged: Subject<any> = new Subject<any>();
  constructor() { }

  showToast(){
      this.toastChanged.next({
        type: 'info',
        message: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
        timeout: 5000
      });
    
  }
}
