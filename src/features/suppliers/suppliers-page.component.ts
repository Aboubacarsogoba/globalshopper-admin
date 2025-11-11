// src/app/features/suppliers/suppliers-page.component.ts
import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersFacade } from './suppliers.facade';

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
      <button class="btn btn-primary">Créer un fournisseur</button>
    </div>

    <div class="card" style="padding:0">
      <table class="table">
        <thead>
          <tr>
            <th class="col-name">Nom</th>
            <th class="col-email">Email</th>
            <th class="col-phone">Num tel:</th>
            <th class="center col-state">Etat</th>
            <th class="center col-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of filtered()">
            <td class="col-name">{{s.name}}</td>
            <td class="col-email">{{s.email}}</td>
            <td class="col-phone"><span class="muted">{{s.phone}}</span></td>
            <td class="center">
              <ng-container [ngSwitch]="s.kyc">
                <span *ngSwitchCase="'ok'" class="state ok" title="Validé">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span *ngSwitchCase="'warn'" class="state warn" title="À vérifier">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/><path d="M16 6l-7 7"/></svg>
                </span>
                <span *ngSwitchCase="'ko'" class="state ko" title="Refusé">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </span>
              </ng-container>
            </td>
            <td class="center">
              <label class="toggle">
                <input type="checkbox" [checked]="s.active" (change)="s.active=!s.active">
                <span class="slider"><span class="knob"></span></span>
                <span class="toggle-text" [class.on]="s.active" [class.off]="!s.active">{{s.active ? 'ON' : 'OFF'}}</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styles:[`
  .toolbar{display:flex;align-items:center;gap:12px;margin-bottom:12px}
  .spacer{flex:1}
  .input{height:38px;width:220px;padding:0 14px;border:1px solid #e5e7eb;border-radius:9999px;background:#fff;outline:none}
  .input::placeholder{color:#9ca3af}
  .btn{height:38px;padding:0 14px;border-radius:8px;border:1px solid transparent;cursor:pointer;font-weight:600}
  .btn-primary{background:#2563eb;color:#fff}
  .btn-primary:hover{background:#1d4ed8}
  .table{width:100%;border-collapse:collapse}
  .table thead th{background:#f9fafb;color:#374151;text-align:left}
  .table th,.table td{padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:.95rem;vertical-align:middle}
  .table tbody tr:hover{background:#f9fafb}
  .table .center{text-align:center}
  .table .col-name{width:28%}
  .table .col-email{width:32%}
  .table .col-phone{width:20%}
  .table .col-state{width:10%}
  .table .col-actions{width:10%}
  .muted{color:#6b7280}
  .state{display:inline-flex;align-items:center;justify-content:center;color:currentColor}
  .state svg{width:18px;height:18px;display:block}
  .state.ok{color:#22c55e}
  .state.warn{color:#f59e0b}
  .state.ko{color:#ef4444}
  .toggle{display:inline-flex;align-items:center;gap:8px;justify-content:center}
  .toggle input{display:none}
  .slider{position:relative;width:48px;height:26px;border-radius:9999px;background:#e5e7eb;display:inline-block;transition:background .2s}
  .slider .knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.12);transition:transform .2s}
  .toggle input:checked + .slider{background:#2563eb}
  .toggle input:checked + .slider .knob{transform:translateX(22px)}
  .toggle-text{font-size:12px;font-weight:600;color:#6b7280}
  .toggle-text.on{color:#2563eb}
  .toggle-text.off{color:#6b7280}
  `]
})
export class SuppliersPageComponent{
  private facade = inject(SuppliersFacade);
  q = signal('');
  suppliers = computed<Supplier[]>(() =>
    (this.facade.items() || []).map((r: any) => ({
      id: String(r.id ?? ''),
      name: `${r.prenom ?? ''} ${r.nom ?? ''}`.trim(),
      email: r.email ?? '',
      phone: r.telephone ?? '',
      active: !!r.actif,
      kyc: 'ok'
    }))
  );
  filtered = () => this.suppliers().filter(s => s.name.toLowerCase().includes(this.q().toLowerCase()));

  constructor(){
    this.facade.load();
  }

  handleSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.q.set(target.value);
  }
}
