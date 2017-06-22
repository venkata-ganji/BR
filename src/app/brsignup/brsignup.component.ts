import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-brsignup',
  templateUrl: './brsignup.component.html',
  styleUrls: ['./brsignup.component.scss']
})
export class BrsignupComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
    cnfpassword: new FormControl()
  });

closePopUp = false;
  constructor() { }
cancelClicked() {
  alert('ddd');
    this.closePopUp = true;
    console.log('sss',this.closePopUp);
  }
  onSubmit() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }

}
