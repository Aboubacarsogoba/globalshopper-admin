// src/app/core/services/auth.service.ts
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<{ fullName:string; role:'ADMIN'|'MANAGER'|'USER'}|null>(null);

  constructor(private router: Router){ 
    const raw = localStorage.getItem('auth_user');
    if(raw) this.user.set(JSON.parse(raw));
  }

  login(email: string, password: string){
    // TODO call API. MVP: succès factice si non vide
    if(email && password){
      const u = { fullName: 'M. SOGOBA', role: 'ADMIN' as const };
      localStorage.setItem('access_token','demo');
      localStorage.setItem('auth_user', JSON.stringify(u));
      this.user.set(u);
      this.router.navigateByUrl('/dashboard');
    }
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('auth_user');
    this.user.set(null);
    this.router.navigateByUrl('/login');
  }
}
