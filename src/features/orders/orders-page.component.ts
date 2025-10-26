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
          <td><button class="btn btn-outline">🗑️</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles:[`.toolbar{display:flex;gap:12px;align-items:center;margin-bottom:12px}.spacer{flex:1}`]
})
export class OrdersPageComponent{
  rows = [
    { id:'#RP-1021', produit:"cartons d'emballage 50 x 50", moq:100, reserve:70, avance:65, deadline:'25/10/2025' },
    { id:'#RP-1022', produit:"Power banks 10 000 Ah", moq:200, reserve:70, avance:55, deadline:'25/10/2025' },
  ]
}
