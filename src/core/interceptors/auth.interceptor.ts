// src/app/core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isAuthEndpoint = /\/auth\/(login|refresh|logout)/.test(req.url);
  if (isAuthEndpoint) return next(req);
  const token = localStorage.getItem('accessToken');
  return next(token ? req.clone({ setHeaders: { Authorization:`Bearer ${token}`}}) : req);
};
