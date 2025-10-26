// src/app/features/suppliers/suppliers-page.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Supplier = { id:string; name:string; email:string; phone:string; active:boolean; kyc:'ok'|'warn'|'ko' };

@Component({
  standalone:true, selector:'app-suppliers',
  imports:[CommonModule],
  template:`
  <div class="page">
    <div class="toolbar">
      <h2>Fournisseurs - création & validation</h2>
      <div class="spacer"></div>
      <input class="input" placeholder="Rechercher un fournisseur" (input)="handleSearch($event)">
      <button class="btn">Créer un fournisseur</button>
    </div>

    <div class="card" style="padding:0">
      <table class="table">
        <thead><tr><th>Nom</th><th>Email</th><th>Num tél</th><th>État</th><th>Actions</th></tr></thead>
        <tbody>
          <tr *ngFor="let s of filtered()">
            <td>{{s.name}}</td>
            <td>{{s.email}}</td>
            <td>{{s.phone}}</td>
            <td>
              <span *ngIf="s.kyc==='ok'">✅</span>
              <span *ngIf="s.kyc==='warn'">🟡</span>
              <span *ngIf="s.kyc==='ko'">❌</span>
            </td>
            <td>
              <label style="display:inline-flex;align-items:center;gap:.4rem">
                <input type="checkbox" [checked]="s.active" (change)="s.active=!s.active"> {{s.active?'ON':'OFF'}}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styles:[`.toolbar{display:flex;align-items:center;gap:12px;margin-bottom:12px}.spacer{flex:1}`]
})
export class SuppliersPageComponent{
  q = signal('');
  suppliers = signal<Supplier[]>([
    {id:'1', name:'Aboubacar sogoba', email:'ab9460419@gmail.com', phone:'+223 92 11 30 06', active:true, kyc:'warn'},
    {id:'2', name:'Amadou sogoba', email:'ab9460419@gmail.com', phone:'+223 85 47 47 57', active:false, kyc:'ko'},
  ]);
  filtered = () =>
    this.suppliers().filter(s => s.name.toLowerCase().includes(this.q().toLowerCase()));
  
  handleSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.q.set(target.value);
  }
}
