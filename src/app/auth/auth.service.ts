import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UserIsAuthenticated = false;



  constructor() { }

  // To get the "user"
  get userIsAuthenticated() {
    return this.UserIsAuthenticated;
  }

  login() {
    this.UserIsAuthenticated = true;
  }


  logout() {
    this.UserIsAuthenticated = false;
  }
}
