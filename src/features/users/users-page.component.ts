// src/app/features/users/users-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true, selector:'app-users-page', imports:[CommonModule],
  template:`
  <h2>Listes de tous les utilisateurs</h2>
  <div class="card" style="padding:0;margin-top:12px">
    <table class="table">
      <thead><tr><th>Nom</th><th>Email</th><th>Type</th><th>Date inscription</th><th>Action</th></tr></thead>
      <tbody>
        <tr *ngFor="let u of rows">
          <td>{{u.name}}</td><td>{{u.email}}</td><td>{{u.type}}</td><td>{{u.date}}</td>
          <td><button class="btn btn-outline">🗑️</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})
export class UsersPageComponent{
  rows = [
    { name:'Aboubacar sogoba', email:'ab9460419@gmail.com', type:'Commerçant', date:'15/10/2025' },
    { name:'Aboubacar sogoba', email:'ab9460419@gmail.com', type:'Fournisseur', date:'25/10/2025' },
  ];
}
