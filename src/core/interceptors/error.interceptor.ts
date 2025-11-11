// src/app/core/interceptors/error.interceptor.ts
import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const isAuthEndpoint = /\/auth\/(login|refresh|logout)/.test(req.url);

  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      console.error('[HTTP]', e.status, e.message);

      if (e.status === 401 && !isAuthEndpoint) {
        return auth.refresh().pipe(
          switchMap(() => {
            const token = localStorage.getItem('accessToken') || '';
            const retried: HttpRequest<unknown> = req.clone({
              setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
            });
            return next(retried);
          }),
          catchError((refreshErr) => {
            try { auth.logout(); } catch {}
            return throwError(() => refreshErr);
          })
        );
      }

      return throwError(() => e);
    })
  );
};
