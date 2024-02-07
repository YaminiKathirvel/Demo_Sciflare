import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';




@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router
        
    ) { }
    canActivate(): boolean{
        // throw new Error('Method not implemented.');
        if (localStorage.getItem('formValue')) {
            return true;
          } else {
            this.router.navigate(['/login']); // Redirect to login page if not logged in
            return false;
          }
    }

   
}
