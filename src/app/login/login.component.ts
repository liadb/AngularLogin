import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    usernameControl: new FormControl(''),
    passwordControl: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
