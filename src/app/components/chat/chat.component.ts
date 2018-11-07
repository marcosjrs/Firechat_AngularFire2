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
  estado:string;

  constructor(public chatSvc:ChatService) {
    this.chat = chatSvc.mensajes;
  }

  enviar(msg){

    this.cambiarEstado("Enviando..");
    this.chatSvc.enviarMsg(msg)
                .then(
                    data => {
                      this.mensaje= "";
                      this.cambiarEstado("Enviado");
                    }
                  )
                .catch(
                  err=>{
                    this.cambiarEstado("Error al enviar");
                  }
                );
  }

  cambiarEstado(estado){
    this.estado = estado;
    setTimeout(()=>this.estado="", 1000);
  }

}
