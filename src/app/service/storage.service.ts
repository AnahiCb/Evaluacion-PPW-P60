import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private afs: AngularFirestore) { }
  
  getPersonas(): Observable<any[]>{
    const refPersonas = this.afs.collection("personas");

    return refPersonas.valueChanges();
  }
}
