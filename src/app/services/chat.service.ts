import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from 'src/app/models/mensaje';
// https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mensajesCollection: AngularFirestoreCollection<Mensaje>;
  mensajes: Observable<Mensaje[]>;

  constructor(db: AngularFirestore) {
    this.mensajesCollection = db.collection<Mensaje>( 'chats', 
                                                 ref => ref.orderBy('fecha', 'desc').limit(5) );
    this.mensajes = this.mensajesCollection.valueChanges().pipe(
      map( msgs => msgs.reverse())
    );
  }

  enviarMsg(msg:string) {
    if(!msg) return;
    const nombreUser = "Marcos";
    const uidUser = "123";
    let mensaje:Mensaje = {"nombre":nombreUser, "mensaje":msg, "fecha":new Date().getTime()}; //con new Mensaje revienta ...
    return this.mensajesCollection.add(mensaje);
  }

}
