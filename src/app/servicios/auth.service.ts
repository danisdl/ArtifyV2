import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { LoginPage } from '../componentes/login/login.page';
import { stringify } from '@angular/compiler/src/util';
import { promise } from 'protractor';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) {}
  
  login(email:string, password:string)
  {
    return new Promise((resolve, reject) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
    })
    }).catch(err => reject(err));
  }
}

