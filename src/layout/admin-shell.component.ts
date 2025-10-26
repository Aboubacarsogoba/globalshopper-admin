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
        <div class="logo-container">
          <img src="assets/globalshopper.png" alt="Global Shopper Logo" class="logo-img" />
        </div>
      </div>

      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">
          <img src="assets/tableau.png" alt="Tableau de bord" class="icon-img" />
          Tableau de bord
        </a>
        <a routerLink="/fournisseurs" routerLinkActive="active">
          <img src="assets/fournisseur.png" alt="Fournisseurs" class="icon-img" />
          Fournisseurs
        </a>
        <a routerLink="/utilisateurs" routerLinkActive="active">
          <img src="assets/utilisateur&commerçant.png" alt="Utilisateurs" class="icon-img" />
          Utilisateurs
        </a>
        <a routerLink="/produits" routerLinkActive="active">
          <img src="assets/produit.png" alt="Produits" class="icon-img" />
          Produits
        </a>
        <a routerLink="/commandes" routerLinkActive="active">
          <img src="assets/commande.png" alt="Commandes" class="icon-img" />
          Commandes
        </a>
        <a routerLink="/transactions" routerLinkActive="active">
          <img src="assets/transaction.png" alt="Transaction" class="icon-img" />
          Transaction
        </a>
      </nav>

      <button class="btn btn-outline danger" (click)="auth.logout()">
        <img src="assets/deconnexion.png" alt="Deconnexion" class="icon-img" />
        Deconnexion
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
  .brand{display:flex;justify-content:center;margin-bottom:0;margin-top:-70px}
  .logo-container{width:180px;height:180px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}
  .logo-img{width:100%;height:100%;object-fit:contain}
  nav{display:grid;gap:8px;margin-top:-15px}
  nav a{padding:.8rem 1rem;border-radius:12px;border:1px solid var(--gs-gray-100);background:#fff;display:flex;align-items:center;gap:.6rem}
  nav a .icon{color:var(--gs-blue);font-size:1.2rem}
  .icon-img{width:20px;height:20px;object-fit:contain;filter:brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1720%) hue-rotate(202deg) brightness(91%) contrast(92%)}
  nav a:hover .icon-img{filter:brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1720%) hue-rotate(202deg) brightness(91%) contrast(92%)}
  .danger .icon-img{filter:brightness(0) saturate(100%) invert(21%) sepia(95%) saturate(7471%) hue-rotate(348deg) brightness(94%) contrast(85%)}
  nav a.active{background:var(--gs-gray-50);border-color:var(--gs-blue);box-shadow:inset 0 0 0 1px var(--gs-blue)}
  .danger{border-color:#eab0b0;color:#b91c1c}
  .danger .icon{color:#b91c1c}
  main{display:grid;grid-template-rows:64px 1fr}
  .topbar{background:var(--gs-gold);border-radius:12px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;color:#1f2937}
  .content{padding:16px;overflow:auto}
  `]
})
export class AdminShellComponent{
  auth = inject(AuthService);
  fullName = computed(() => this.auth.user()?.fullName ?? '');
}
