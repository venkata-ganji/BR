import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BRNavigtionComponent } from './brnavigtion/brnavigtion.component';
import { BrsubheaderComponent } from './brsubheader/brsubheader.component';
import { BrloginComponent } from './brlogin/brlogin.component';
import { BrcarouselComponent } from './brcarousel/brcarousel.component';
import { BrcaroueslmainComponent } from './brcaroueslmain/brcaroueslmain.component';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrsignupComponent } from './brsignup/brsignup.component';
import { ReactiveFormsModule } from'@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyBJAqv3cK8gXASna_EDGzx7lwg3hrdCe-4",
    authDomain: "a2zbuyrental.firebaseapp.com",
    databaseURL: "https://a2zbuyrental.firebaseio.com",
    projectId: "a2zbuyrental",
    storageBucket: "a2zbuyrental.appspot.com",
    messagingSenderId: "997900591788"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BRNavigtionComponent,
    BrsubheaderComponent,
    BrloginComponent,
    BrcarouselComponent,
    BrcaroueslmainComponent,
    BrsignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    UIRouterModule.forRoot([
      {
        states:[],
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
