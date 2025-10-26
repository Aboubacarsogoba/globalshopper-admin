// src/app/core/interceptors/error.interceptor.ts
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(catchError((e:HttpErrorResponse) => {
    console.error('[HTTP]', e.status, e.message);
    return throwError(() => e);
  }));
