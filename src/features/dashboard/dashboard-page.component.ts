// src/app/features/dashboard/dashboard-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../shared/stat-card.component';

type Row = { id:string; produit:string; moq:number; reserve:number; avance:number; deadline:string; statut:'pending'|'progress'|'done' };

@Component({
  standalone:true, selector:'app-dashboard',
  imports:[CommonModule, StatCardComponent],
  template:`
  <div class="grid gap">
    <div class="stats">
      <app-stat-card icon="assets/fournisseur.png" [value]="20 | number" label="Partenaires"/>
      <app-stat-card icon="assets/produit.png" [value]="100 | number" label="Produits en ligne"/>
      <app-stat-card icon="assets/commande.png" [value]="500 | number" label="Commandes"/>
      <app-stat-card icon="assets/transaction.png" [value]="40 | number" label="Transaction"/>
    </div>

    <div class="card" style="padding:16px">
      <div class="kpis">
        <div>
          <div>Taux de complétion des commandes groupées</div>
          <div class="progress"><span [style.width.%]="78"></span></div>
          <small>78% des commandes atteignent le MOQ</small>
        </div>
        <div class="text-right">
          <div>Délai moyen d’expédition</div>
          <h2 style="color:var(--gs-gold)">2 Semaines</h2>
        </div>
      </div>
    </div>

    <div class="card" style="padding:0">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th><th>Produit</th><th>MOQ</th><th>Réservé</th><th>Avancement</th><th>Deadline</th><th>Statut</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of rows">
            <td>{{r.id}}</td>
            <td>{{r.produit}}</td>
            <td>{{r.moq}}</td>
            <td>{{r.reserve}}</td>
            <td><div class="progress"><span [style.width.%]="r.avance"></span></div></td>
            <td>{{r.deadline}}</td>
            <td><span class="pill">⏳</span></td>
            <td><button class="btn btn-outline">🗑️</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styles:[`
  .grid{display:grid;gap:16px}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .kpis{display:flex;justify-content:space-between;gap:16px;align-items:center}
  .kpis .progress{margin-top:8px}
  .kpis small{display:block;margin-top:12px}
  .text-right{text-align:right}
  `]
})
export class DashboardPageComponent{
  rows: Row[] = [
    { id:'#RP-1021', produit:"cartons d'emballage 50 x 50", moq:100, reserve:70, avance:70, deadline:'25/10/2025', statut:'progress'},
    { id:'#RP-1022', produit:"Power banks 10 000 Ah", moq:200, reserve:70, avance:60, deadline:'25/10/2025', statut:'pending'},
    { id:'#RP-1023', produit:"Power banks 10 000 Ah", moq:150, reserve:70, avance:30, deadline:'25/10/2025', statut:'pending'},
    { id:'#RP-1024', produit:"Power banks 10 000 Ah", moq:500, reserve:70, avance:80, deadline:'25/10/2025', statut:'progress'},
  ];
}
