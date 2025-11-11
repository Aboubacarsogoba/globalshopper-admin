// src/app/core/services/auth.service.ts
import { Inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { API_URL } from '../tokens';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<{ fullName:string; role:'ADMIN'|'MANAGER'|'USER'}|null>(null);

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ){ 
    const raw = localStorage.getItem('auth_user');
    if(raw) this.user.set(JSON.parse(raw));
  }

  login(identifiant: string, motDePasse: string){
    return this.http.post<{ accessToken: string; refreshToken: string }>(
      `${this.apiUrl}/auth/login`,
      { identifiant, motDePasse },
      { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
    ).pipe(
      tap(({ accessToken, refreshToken }) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        this.user.set(this.user() ?? null);
        this.router.navigateByUrl('/dashboard');
      })
    );
  }

  refresh(){
    const refreshToken = localStorage.getItem('refreshToken') ?? '';
    return this.http.post<{ accessToken: string; refreshToken: string }>(
      `${this.apiUrl}/auth/refresh`,
      { refreshToken },
      { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
    ).pipe(
      tap(({ accessToken, refreshToken }) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      })
    );
  }

  logout(){
    const refreshToken = localStorage.getItem('refreshToken') ?? '';
    this.http.post(
      `${this.apiUrl}/auth/logout`,
      { refreshToken },
      { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, responseType: 'text' as const }
    ).subscribe({ complete: () => {} , error: () => {} });

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('auth_user');
    this.user.set(null);
    this.router.navigateByUrl('/login');
  }
}
