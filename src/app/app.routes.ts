import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { LoginPageComponent } from '../features/auth/login-page.component';
import { DashboardPageComponent } from '../features/dashboard/dashboard-page.component';
import { OrdersPageComponent } from '../features/orders/orders-page.component';
import { ProductsPageComponent } from '../features/products/products-page.component';
import { SuppliersPageComponent } from '../features/suppliers/suppliers-page.component';
import { TxPageComponent } from '../features/tx/tx-page.component';
import { UsersPageComponent } from '../features/users/users-page.component';
import { AdminShellComponent } from '../layout/admin-shell.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: AdminShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'fournisseurs',
        component: SuppliersPageComponent
      },
      {
        path: 'utilisateurs',
        component: UsersPageComponent
      },
      {
        path: 'produits',
        component: ProductsPageComponent
      },
      {
        path: 'commandes',
        component: OrdersPageComponent
      },
      {
        path: 'transactions',
        component: TxPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
