// src/app/features/users/users-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true, selector:'app-users-page', imports:[CommonModule],
  template:`
  <h2>Listes de tous les utilisateurs</h2>
  <div class="card" style="padding:0;margin-top:12px">
    <table class="table">
      <thead>
        <tr>
          <th class="col-name">Nom</th>
          <th class="col-email">Email</th>
          <th class="col-type">Type</th>
          <th class="col-date">Date inscription</th>
          <th class="center col-actions">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let u of rows">
          <td class="col-name">{{u.name}}</td>
          <td class="col-email">{{u.email}}</td>
          <td class="col-type">{{u.type}}</td>
          <td class="col-date">{{u.date}}</td>
          <td class="center col-actions">
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
  styles:[`
  .table{width:100%;border-collapse:collapse}
  .table thead th{background:#f9fafb;color:#374151;text-align:left}
  .table th,.table td{padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:.95rem;vertical-align:middle}
  .table tbody tr:hover{background:#f9fafb}
  .table .center{text-align:center}
  .table .col-name{width:28%}
  .table .col-email{width:32%}
  .table .col-type{width:20%}
  .table .col-date{width:14%}
  .table .col-actions{width:6%}
  .btn.btn-outline{padding:6px 10px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
  .btn.btn-outline svg{width:18px;height:18px;display:block}
  .btn.btn-outline.btn-trash{color:#ef4444;border-color:#fecaca}
  .btn.btn-outline.btn-trash svg{fill:currentColor}
  .btn.btn-outline.btn-trash:hover{background:#fee2e2}
  `]
})
export class UsersPageComponent{
  rows = [
    { name:'Aboubacar sogoba', email:'ab9460419@gmail.com', type:'Commerçant', date:'15/10/2025' },
    { name:'Aboubacar sogoba', email:'ab9460419@gmail.com', type:'Fournisseur', date:'25/10/2025' },
  ];
}
