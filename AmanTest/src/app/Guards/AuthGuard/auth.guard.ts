import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Classes/User/user';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private route: Router,
    private localStorage: LocalStorageService
  ) {}
  canActivate() {
    const user:User = this.localStorage.getFromLocal('User');
    if (!!user.email && !!user.password) {
      return true;
    } else {
      this.route.navigate(['']);
      return true;
    }
  }
  
}
