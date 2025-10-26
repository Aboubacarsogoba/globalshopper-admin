// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login-page.component')
      .then(m => m.LoginPageComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/admin-shell.component')
      .then(m => m.AdminShellComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard-page.component').then(m => m.DashboardPageComponent) },
      { path: 'fournisseurs', loadComponent: () => import('./features/suppliers/suppliers-page.component').then(m => m.SuppliersPageComponent) },
      { path: 'utilisateurs', loadComponent: () => import('./features/users/users-page.component').then(m => m.UsersPageComponent) },
      { path: 'produits', loadComponent: () => import('./features/products/products-page.component').then(m => m.ProductsPageComponent) },
      { path: 'commandes', loadComponent: () => import('./features/orders/orders-page.component').then(m => m.OrdersPageComponent) },
      { path: 'transactions', loadComponent: () => import('./features/tx/tx-page.component').then(m => m.TxPageComponent) },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: '' }
];
