// src/app/features/products/products-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true, selector:'app-products', imports:[CommonModule],
  template:`
  <h2>Catalogue - Modération</h2>
  <div class="card" style="padding:0;margin-top:12px">
    <table class="table">
      <thead style="background:var(--gs-gold);color:#fff">
        <tr><th>Produit</th><th>Fournisseur</th><th>Prix</th><th>MOQ</th><th>Action</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of rows">
          <td>{{p.name}}</td><td>{{p.supplier}}</td><td>{{p.price}}</td><td>{{p.moq}}</td>
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
  <div style="display:flex;gap:8px;justify-content:center;margin-top:12px">
    <button class="btn btn-outline">«</button>
    <button class="btn" aria-current="page">1</button>
    <button class="btn btn-outline">2</button>
    <button class="btn btn-outline">3</button>
    <button class="btn btn-outline">»</button>
  </div>
  `
  ,
  styles:[`
  .table{width:100%;border-collapse:collapse}
  .table th,.table td{padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:.95rem;vertical-align:middle;text-align:center}
  .table tbody tr:hover{background:#f9fafb}
  .btn.btn-outline.btn-trash{color:#ef4444;border:1px solid #fecaca;border-radius:8px;padding:6px 10px;background:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
  .btn.btn-outline.btn-trash svg{width:18px;height:18px;display:block;fill:currentColor}
  .btn.btn-outline.btn-trash:hover{background:#fee2e2}
  `]
})
export class ProductsPageComponent{
  rows = [
    { name:'Panneau solaire 200 W', supplier:'Aboubacar sogoba', price:'10 000 FCFA', moq:1000 },
    { name:'Power bank 3000 AP', supplier:'Ibrahima sogoba', price:'10 000 FCFA', moq:1000 },
  ];
}
