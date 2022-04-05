import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { forbiddenEmailValidator } from 'src/app/shared/directives/forbidden-email.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  get userName() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, forbiddenEmailValidator(/^\S+@\S+\.\S+$/)]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.register(this.registrationForm.value)
     .subscribe(data => document.querySelector('#regMessage')!.innerHTML = data);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}
