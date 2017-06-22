import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-brlogin',
  templateUrl: './brlogin.component.html',
  styleUrls: ['./brlogin.component.scss'],
})
export class BrloginComponent implements OnInit {
  error: any;
  showRegisterForm = false;
  closePopUp = false;
  isClassVisible = false;
  hideLogIn = false;
  showForm = false;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    console.log('vvvv',this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider));
  }

  logOut() {
    
  }
  submitClicked() {
    this.afAuth.auth.signInWithCredential(new firebase.auth.GoogleAuthProvider);
  }
  registerClicked() {
    alert('sss');
    this.showRegisterForm = true;
    this.hideLogIn = true;
    this.showForm = true;
  }
  cancelClicked() {
    this.closePopUp = true;
  }


  ngOnInit() {

  }

}
