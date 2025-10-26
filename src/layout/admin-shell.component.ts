// src/app/layout/admin-shell.component.ts
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  standalone:true,
  selector:'app-admin-shell',
  imports:[RouterOutlet, RouterLink, RouterLinkActive],
  template:`
  <div class="shell">
    <aside class="sidebar card">
      <div class="brand">
        <div class="logo">G</div>
        <div class="txt"><b>lobal</b><span>Shopper</span></div>
      </div>

      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">
          <span class="icon">🏠</span> Tableau de bord
        </a>
        <a routerLink="/fournisseurs" routerLinkActive="active">
          <span class="icon">👥</span> Fournisseurs
        </a>
        <a routerLink="/utilisateurs" routerLinkActive="active">
          <span class="icon">🙍</span> Utilisateurs
        </a>
        <a routerLink="/produits" routerLinkActive="active">
          <span class="icon">🛍️</span> Produits
        </a>
        <a routerLink="/commandes" routerLinkActive="active">
          <span class="icon">📦</span> Commandes
        </a>
        <a routerLink="/transactions" routerLinkActive="active">
          <span class="icon">🧾</span> Transaction
        </a>
      </nav>

      <button class="btn btn-outline danger" (click)="auth.logout()">
        <span class="icon">🚪</span> Deconnexion
      </button>
    </aside>

    <main>
      <header class="topbar">
        <div class="welcome">Bienvenue {{ fullName() }}</div>
        <div class="right"><span class="role">Admin</span></div>
      </header>
      <section class="content"><router-outlet/></section>
    </main>
  </div>
  `,
  styles:[`
  .shell{display:grid;grid-template-columns:260px 1fr;height:100vh;gap:16px;padding:16px}
  .sidebar{padding:16px;display:flex;flex-direction:column;gap:12px;background:#f3f7fb}
  .brand{display:flex;align-items:center;gap:.6rem;margin-bottom:8px}
  .brand .logo{width:40px;height:40px;border-radius:50%;background:var(--gs-blue);color:#fff;display:grid;place-content:center;font-weight:800}
  .brand .txt span{color:var(--gs-gold)}
  nav{display:grid;gap:8px;margin-top:8px}
  nav a{padding:.8rem 1rem;border-radius:12px;border:1px solid var(--gs-gray-100);background:#fff;display:flex;align-items:center;gap:.6rem}
  nav a.active{background:var(--gs-gray-50);border-color:var(--gs-blue);box-shadow:inset 0 0 0 1px var(--gs-blue)}
  .danger{border-color:#eab0b0;color:#b91c1c}
  main{display:grid;grid-template-rows:64px 1fr}
  .topbar{background:var(--gs-gold);border-radius:12px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;color:#1f2937}
  .content{padding:16px;overflow:auto}
  `]
})
export class AdminShellComponent{
  auth = inject(AuthService);
  fullName = computed(() => this.auth.user()?.fullName ?? '');
}
