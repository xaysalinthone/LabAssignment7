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
      this.toastService.showToast();
    }
  }
}
