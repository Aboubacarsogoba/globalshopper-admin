// src/app/features/tx/tx-page.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true, selector:'app-tx', imports:[CommonModule],
  template:`
  <div class="toolbar">
    <h2>Transaction & Paiements</h2>
    <div class="spacer"></div>
    <input class="input" placeholder="Rechercher ID" (input)="handleSearch($event)">
  </div>
  <div class="card" style="padding:0">
    <table class="table">
      <thead style="background:#f3f4f6"><tr>
        <th>ID</th><th>Date</th><th>Commerçant</th><th>Fournisseur</th><th>Montant</th><th>Statut</th>
      </tr></thead>
      <tbody>
        <tr *ngFor="let t of filtered()">
          <td>{{t.id}}</td><td>{{t.date}}</td><td>{{t.merchant}}</td><td>{{t.supplier}}</td><td>{{t.amount | number}}</td><td>⏳</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles:[`.toolbar{display:flex;gap:12px;align-items:center;margin-bottom:12px}.spacer{flex:1}.toolbar .input{width:200px}.table{width:100%;border-collapse:collapse}.table thead th{background:#f9fafb;color:#374151}.table th,.table td{padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:.95rem;vertical-align:middle;text-align:center}.table tbody tr:hover{background:#f9fafb}`]
})
export class TxPageComponent{
  q = signal('');
  rows = [
    { id:'Tx-441', date:'25/09/1998', merchant:'Djibril', supplier:'Aboubacar', amount:250000 },
    { id:'Tx-442', date:'26/09/1998', merchant:'Djibril', supplier:'Aboubacar', amount:250000 },
  ];
  filtered = () => this.rows.filter(r => r.id.toLowerCase().includes(this.q().toLowerCase()));
  
  handleSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.q.set(target.value);
  }
}
