// src/app/core/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const ok = !!localStorage.getItem('access_token');
  if(!ok) router.navigateByUrl('/login');
  return ok;
};
