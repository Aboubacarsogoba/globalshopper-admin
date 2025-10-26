// src/app/core/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../tokens';
@Injectable({ providedIn:'root' })
export class ApiService{
  private http = inject(HttpClient); private base = inject(API_URL);
  get<T>(p:string, q?:Record<string,any>){ return this.http.get<T>(`${this.base}/${p}`, { params: new HttpParams({fromObject:q||{}}) }); }
  post<T>(p:string, b:any){ return this.http.post<T>(`${this.base}/${p}`, b); }
  put<T>(p:string, b:any){ return this.http.put<T>(`${this.base}/${p}`, b); }
  delete<T>(p:string){ return this.http.delete<T>(`${this.base}/${p}`); }
}
