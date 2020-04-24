import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './auth.service';
import { AuthFirebaseService } from './firebase/firebase-auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private nvc: NavController, private authFirebaseService: AuthFirebaseService) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return this.authFirebaseService.isLogged().then((val) => {
      if (!val) {
        this.nvc.navigateRoot(["login"]);
        return false;
      }
  
      return true;
    });
  }
}