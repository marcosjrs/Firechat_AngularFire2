import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  usuario:any;

  constructor(public chatSvc: ChatService) {
  }
  
  login(empresaLogin){
    this.chatSvc.login(empresaLogin);   
  }

  logout() {
    this.chatSvc.logout();
  }
  

}
