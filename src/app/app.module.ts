import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BRNavigtionComponent } from './brnavigtion/brnavigtion.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BRNavigtionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot([
      {
        states:[],
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
