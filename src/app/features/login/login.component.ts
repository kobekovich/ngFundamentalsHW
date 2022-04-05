import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.auth.login(f.value)
      .subscribe(
        () => {
          this.router.navigate(['/courses']);
        }
      );
  }

  goRegistration() {
    this.router.navigate(['/registration']);
  }

}
