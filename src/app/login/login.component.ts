import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import profile from '../../../database/profile.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  usernameVal = '';
  passwordVal = '';

  ngOnInit(): void {
  }

  usernameKey(value: string) {
    this.usernameVal = value;
  }

  passwordKey(value: string) {
    this.passwordVal = value;
  }

  onLogin() {
    if (!this.usernameVal || !this.passwordVal) {
      throw new Error('Username or Password is Empty');
    }

    const userExists = profile.find(obj => obj.username === this.usernameVal && obj.password === this.passwordVal);

    if (userExists) {
      this.router.navigate([`capabilities`]);
    } else {
      console.log('MALI');
    }
  }

}
