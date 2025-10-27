// src/app/features/orders/orders-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true, selector:'app-orders',
  imports:[CommonModule],
  template:`
  <div class="toolbar">
    <h2>Commandes groupées - supervision</h2>
    <div class="spacer"></div>
    <select class="input" style="width:auto">
      <option>Ouvertes</option><option>Fermées</option>
    </select>
    <button class="btn">Crée une commande</button>
  </div>
  <div class="card" style="padding:0">
    <table class="table">
      <thead><tr><th>ID</th><th>Produit</th><th>MOQ</th><th>Réservé</th><th>Avancement</th><th>Deadline</th><th>Statut</th><th>Actions</th></tr></thead>
      <tbody>
        <tr *ngFor="let r of rows">
          <td>{{r.id}}</td><td>{{r.produit}}</td><td>{{r.moq}}</td><td>{{r.reserve}}</td>
          <td><div class="progress"><span [style.width.%]="r.avance"></span></div></td>
          <td>{{r.deadline}}</td>
          <td>⏳</td>
          <td>
            <button class="btn btn-outline btn-trash" aria-label="Supprimer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 3h6a1 1 0 0 1 1 1v1h4a1 1 0 1 1 0 2h-1.1l-1.02 12.24A3 3 0 0 1 14.89 22H9.11a3 3 0 0 1-2.99-2.76L5.1 7H4a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1Zm1 2v0h4V4h-4v1Zm-2.9 2l.98 11.76c.07.83.77 1.24 1.93 1.24h5.78c1.16 0 1.86-.41 1.93-1.24L18.9 7H7.1ZM10 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Z"/>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles:[`.toolbar{display:flex;gap:12px;align-items:center;margin-bottom:12px}.spacer{flex:1}.table{width:100%;border-collapse:collapse}.table thead th{background:#f9fafb;color:#374151}.table th,.table td{padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:.95rem;vertical-align:middle;text-align:center}.table tbody tr:hover{background:#f9fafb}.btn.btn-outline.btn-trash{color:#ef4444;border-color:#fecaca}.btn.btn-outline.btn-trash svg{width:18px;height:18px;display:block;fill:currentColor}.btn.btn-outline.btn-trash:hover{background:#fee2e2}`]
})
export class OrdersPageComponent{
  rows = [
    { id:'#RP-1021', produit:"cartons d'emballage 50 x 50", moq:100, reserve:70, avance:65, deadline:'25/10/2025' },
    { id:'#RP-1022', produit:"Power banks 10 000 Ah", moq:200, reserve:70, avance:55, deadline:'25/10/2025' },
  ]
}
