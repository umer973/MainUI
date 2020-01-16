import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }

  valid: boolean = true

  canActivate()
  {
    return true;
  }


  canActivateChild() {
    if (this.valid) {
      return true
    }
    else {
      debugger;
      
      
        this.router.navigate['/']
    }
  }
}
