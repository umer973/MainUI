import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate() {
    return true;
  }


  canActivateChild() {

    console.log(localStorage.getItem('isLoggedin'),"IsLogged");
    if (localStorage.getItem('isLoggedin')) {
      return true
    }
    

    else {
    // this.router.navigate['/']
    return true;
    }
  }
}
