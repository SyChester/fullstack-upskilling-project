import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import profile from '../../../database/profile.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameVal = '';
  passwordVal = '';
  errorMsg = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  usernameKey(value: string) {
    this.usernameVal = value;
  }

  passwordKey(value: string) {
    this.passwordVal = value;
  }

  onLogin() {
    if (!this.usernameVal && !this.passwordVal) {
      this.errorMsg = 'Username and password are required';
    } else if (!this.usernameVal) {
      this.errorMsg = 'Username is required';
    } else if (!this.passwordVal) {
      this.errorMsg = 'Password is required';
    }

    const userExists = profile.find(obj => obj.username === this.usernameVal && obj.password === this.passwordVal);

    if (userExists) {
      this.router.navigate([`resources`], { state: { firstName: userExists.firstName, lastName: userExists.lastName, resourceId: userExists.resourceId } });
    } else if (this.usernameVal && this.passwordVal) {
      this.errorMsg = 'Username or password is incorrect'
    }
  }

  onRegister() {
    this.router.navigate(['register']);
  }

}
