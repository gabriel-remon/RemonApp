import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth,updateProfile,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { user } from '../models/users.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore,setDoc,doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaeService {

  auth = inject(AngularFireAuth);
  fireStorage = inject(AngularFirestore)
  // autentificacion

  login(user:user){
    return signInWithEmailAndPassword(getAuth(),user.email,user.password)
  }
  register(user:user){
    return createUserWithEmailAndPassword(getAuth(),user.email,user.password)
  }

  actualizarUsuario(displayName: string){
    return updateProfile(getAuth().currentUser,{displayName})
  }


  //base de datos firestore

  setDocument(path: string, data:any){
    return setDoc(doc(getFirestore(),path),data);
  }

}
