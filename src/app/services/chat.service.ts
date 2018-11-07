import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.mensajesCollection = db.collection<Mensaje>('chats');
    this.mensajes = this.mensajesCollection.valueChanges();
  }

  enviarMsg(mensaje: Mensaje) {
    this.mensajesCollection.add(mensaje);
  }

}
