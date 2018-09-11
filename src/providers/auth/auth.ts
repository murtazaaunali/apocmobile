import { Injectable } from '@angular/core';
import {promise} from "selenium-webdriver";
import {NULL_EXPR} from "@angular/compiler/src/output/output_ast";

export interface User {
  name: string;
  role: number;
}

@Injectable()
export class AuthProvider {
  currentUser: User;
  constructor() { }

  register(username: string, pin: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if(username !== null && pin !== null) {
        // set username and pin in localStorage
      }
    })
  }

  login(name: string, pin: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (pin === '1234') {
        this.currentUser = {
          name: name,
          role: 0
        };
        resolve(true);
      } else if (pin === '1234') {
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  isLoggedIn() {
    return this.currentUser != null;
  }

  isAdmin() {
    return this.currentUser.role === 0;
  }

  logout() {
    this.currentUser = null;
  }
}
