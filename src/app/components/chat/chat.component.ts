import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from 'src/app/services/chat.service';
import { Mensaje } from 'src/app/models/mensaje';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  chat: Observable<Mensaje[]>;
  mensaje:string;

  constructor(public chatSvc:ChatService) {
    this.chat = chatSvc.mensajes;
  }

  enviar(msg){
    
  }

}
