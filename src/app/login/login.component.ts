import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

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

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  public loginClick() {
    const email = this.loginForm.controls.usernameControl.value;
    const password = this.loginForm.controls.passwordControl.value;
    this.authentication.login({email, password}).subscribe(resp => {
      console.log('login works!');
    });
  }

}
