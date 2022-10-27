import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import profile from '../../../database/profile.json';
import resource from '../../../database/resource.json';
import * as uuid from 'uuid';
import { isExistingUser, isPasswordInvalid } from 'src/common/validation';
import { Project } from 'src/common/models/projects.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  projects: Project[] = [
    { id: 1, name: 'Engineering Services' },
    { id: 2, name: 'Bank' },
    { id: 3, name: 'Insurance (TripX)' },
    { id: 4, name: 'GB' },
    { id: 5, name: 'ePOS' }
  ];
  firstNameVal = '';
  lastNameVal = '';
  usernameVal = '';
  emailVal = '';
  passwordVal = '';
  confirmPassVal = '';
  workdayVal = '';
  titleVal = '';
  dateHiredVal = '';
  projectVal = '';
  errorMsg = '';
  registerForm = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  firstNameKey(value: string) {
    this.firstNameVal = value;
  }

  lastNameKey(value: string) {
    this.lastNameVal = value;
  }

  usernameKey(value: string) {
    this.usernameVal = value;
  }

  emailKey(value: string) {
    this.emailVal = value;
  }

  passwordKey(value: string) {
    this.passwordVal = value;
  }

  confirmPassKey(value: string) {
    this.confirmPassVal = value;
  }

  workdayKey(value: string) {
    this.workdayVal = value;
  }

  titleKey(value: string) {
    this.titleVal = value;
  }

  dateHiredKey(value: string) {
    this.dateHiredVal = value;
  }

  projectKey(value: string) {
    this.projectVal = value;
  }

  onSubmit() {
    if (isExistingUser(this.usernameVal)) {
      this.errorMsg = 'Username already exists';
    } else if (isPasswordInvalid(this.passwordVal, this.confirmPassVal)) {
      this.errorMsg = 'Password does not match';
    } else {
      const UUID = uuid.v4();

      profile.push({
        "id": `0${profile.length}`,
        "resourceId": UUID,
        "firstName": this.firstNameVal,
        "lastName": this.lastNameVal,
        "username": this.usernameVal,
        "email": this.emailVal,
        "password": this.passwordVal
      });

      resource.push({
        "id": UUID,
        "title": this.titleVal,
        "date_hired": this.dateHiredVal,
        "workdayId": this.workdayVal,
        "project": this.projectVal
      });

      this.router.navigate(['']);
    }
  }

}
