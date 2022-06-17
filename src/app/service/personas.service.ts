import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona/persona.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private afs: AngularFirestore) { }

  save(persona: Persona){
    
    const refPersonas = this.afs.collection("personas");

    if (persona.uid == null){
      persona.uid = this.afs.createId();
    }

    refPersonas.doc(persona.uid).set(Object.assign({}, persona));

  }
}
