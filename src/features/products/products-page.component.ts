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
          <td><button class="btn btn-outline">🗑️</button></td>
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
})
export class ProductsPageComponent{
  rows = [
    { name:'Panneau solaire 200 W', supplier:'Aboubacar sogoba', price:'10 000 FCFA', moq:1000 },
    { name:'Power bank 3000 AP', supplier:'Ibrahima sogoba', price:'10 000 FCFA', moq:1000 },
  ];
}
