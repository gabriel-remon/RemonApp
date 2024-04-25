import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { user } from '../models/users.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaeService {

  auth = inject(AngularFireAuth);

  // autentificacion

  login(user:user){
    return signInWithEmailAndPassword(getAuth(),user.email,user.password)
  }

}
