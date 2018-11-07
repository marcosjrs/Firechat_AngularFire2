import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from 'src/app/models/mensaje';
// https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mensajesCollection: AngularFirestoreCollection<Mensaje>;
  mensajes: Observable<Mensaje[]>;
  usuario:any;

  constructor(public db: AngularFirestore, public auth: AngularFireAuth) {
    auth.authState.subscribe(
      usuario=>{
        if(!usuario){
          this.usuario = null;
        } else{
          this.usuario = {
            "nombre":usuario.displayName,
            "uid":usuario.uid
          }
          this.getMensajes();
        }
      }
    );

  }

  getMensajes(){
    this.mensajesCollection = this.db.collection<Mensaje>( 'chats', 
                                                 ref => ref.orderBy('fecha', 'desc').limit(5) );
    this.mensajes = this.mensajesCollection.valueChanges().pipe(
      map( msgs => msgs.reverse())
    );
  }

  enviarMsg(msg:string) {
    if(!msg) return;
    let mensaje:Mensaje = {"nombre":this.usuario.nombre, "mensaje":msg, "fecha":new Date().getTime(), "uid": this.usuario.uid}; //con new Mensaje revienta ...
    return this.mensajesCollection.add(mensaje);
  }

  /* Servicio de Login, que igual debería estar separado ;) */

  login(empresaLogin){
    if(empresaLogin == "google"){
      this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }    
  }

  logout() {
    this.usuario = null;
    this.auth.auth.signOut();
  }

}
