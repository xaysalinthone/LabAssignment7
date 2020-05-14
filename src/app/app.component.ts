import { Component } from '@angular/core';
import {ToastService} from './toast/toast.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';

  constructor(private toastService: ToastService){

    showToast(){
      cosnt toastType ='info',
      const toastMessage = 'Hi this is a message';
      const duration: 2000;
      this.toastService.showToast(toastType, toastMessage, duration);
    }
  }
}
