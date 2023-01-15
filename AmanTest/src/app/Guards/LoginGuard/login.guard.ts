import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Classes/User/user';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private route: Router,
    private localStorage: LocalStorageService
  ) {}
  canActivate() {
    const user: User = this.localStorage.getFromLocal('User') as User || {
      user: '',
      password: '',
    };
    console.log('????', !!user.email && !!user.password);

    if (!!user.email && !!user.password) {
      this.route.navigate(['/jokes-gallery']);
      return true;
    } else {
      return true;
    }
  }
}
