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

    <div class="kpis">
      <div class="kpi-box">
        <div class="kpi-title">Taux de complétion des commandes groupées</div>
        <div class="progress"><span [style.width.%]="78"></span></div>
        <small>78% des commandes atteignent le MOQ</small>
      </div>
      <div class="kpi-box text-right">
        <div class="kpi-title">Délai moyen d’expédition</div>
        <div class="kpi-value">2 Semaines</div>
      </div>
    </div>

    <div class="card" style="padding:0">
      <table class="table">
        <thead>
          <tr>
            <th class="col-id">ID</th>
            <th class="col-product">Produit</th>
            <th class="num">MOQ</th>
            <th class="num">Réservé</th>
            <th class="center">Avancement</th>
            <th>Deadline</th>
            <th class="center">Statut</th>
            <th class="center col-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of rows">
            <td class="col-id">{{r.id}}</td>
            <td class="col-product"><span class="truncate" title="{{r.produit}}">{{r.produit}}</span></td>
            <td class="num">{{r.moq}}</td>
            <td class="num">{{r.reserve}}</td>
            <td class="center"><div class="progress"><span [style.width.%]="r.avance"></span></div></td>
            <td>{{r.deadline}}</td>
            <td class="center"><span class="pill">⏳</span></td>
            <td class="center col-actions">
              <button class="btn btn-outline btn-danger" aria-label="Supprimer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 3h6a1 1 0 0 1 1 1v1h4a1 1 0 1 1 0 2h-1.1l-1.02 12.24A3 3 0 0 1 14.89 22H9.11a3 3 0 0 1-2.99-2.76L5.1 7H4a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1Zm1 2v0h4V4h-4v1Zm-2.9 2l.98 11.76c.07.83.77 1.24 1.93 1.24h5.78c1.16 0 1.86-.41 1.93-1.24L18.9 7H7.1ZM10 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Z"/>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styles:[`
  .grid{display:grid;gap:16px}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .kpis{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .kpi-box{border:1px solid #fde68a;border-radius:12px;padding:16px;background:#fff}
  .kpi-title{color:#6b7280;font-size:.85rem;margin-bottom:8px}
  .kpi-value{color:var(--gs-gold);font-size:1.5rem;font-weight:700}
  .kpi-box .progress{width:100%;margin:8px 0 0 0}
  .kpis small{display:block;margin-top:12px;color:#6b7280}
  .text-right{text-align:right}
  .table{width:100%;border-collapse:collapse}
  .table thead th{background:#f9fafb;color:#374151;text-align:left}
  .table th,.table td{padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:.95rem;vertical-align:middle}
  .table tbody tr:hover{background:#f9fafb}
  .table .num{text-align:right}
  .table .center{text-align:center}
  .table .col-id{width:120px;white-space:nowrap}
  .table .col-actions{width:90px}
  .table .col-product{max-width:360px}
  .truncate{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .progress{height:8px;background:#e5e7eb;border-radius:9999px;overflow:hidden;width:140px;margin:0 auto}
  .progress span{display:block;height:100%;background:#2563eb;border-radius:9999px}
  .pill{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:9999px;background:#fff;border:1px solid #e5e7eb}
  .btn.btn-outline{padding:6px 10px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
  .btn.btn-danger{color:#ef4444;border-color:#fecaca}
  .btn.btn-danger:hover{background:#fee2e2}
  .btn.btn-danger svg{width:18px;height:18px;display:block;fill:currentColor}
  .btn.btn-danger svg path{fill:currentColor;stroke:currentColor}
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
