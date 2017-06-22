import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showPopUp = false;
  constructor( ) {}

  clicked() {
    this.showPopUp = !this.showPopUp;
  }
  ngOnInit() {
  
  }
}

 