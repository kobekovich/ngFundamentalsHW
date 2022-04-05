import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { UserStateFacade } from 'src/app/user/store/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public buttonText = {logout: "logout"};

  name$ = this.facade.name$;

  constructor(
    private router: Router,
    private session: SessionStorageService,
    private auth: AuthService,
    private facade: UserStateFacade) { }

  logOut() {
    this.name$ = of('');

    this.auth.logout().subscribe();
    this.session.remove('token');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
