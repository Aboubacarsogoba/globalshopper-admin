// src/app/shared/stat-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true, selector:'app-stat-card', imports:[CommonModule],
  template:`<div class="card stat">
    <div class="icon">
      <ng-container *ngIf="isImageIcon(icon); else textIcon">
        <img [src]="icon" alt="icon" />
      </ng-container>
      <ng-template #textIcon>{{icon}}</ng-template>
    </div>
    <div class="content">
      <div class="value">{{value}}</div>
      <div class="label">{{label}}</div>
    </div>
  </div>`,
  styles:[`
  .stat{display:flex;gap:12px;align-items:center;padding:16px}
  .icon{width:40px;height:40px;border-radius:50%;background:var(--gs-gold);color:#fff;display:flex;align-items:center;justify-content:center}
  .icon img{width:22px;height:22px;object-fit:contain;filter:brightness(0) invert(1)}
  .value{font-weight:700;font-size:20px}
  .label{font-size:.9rem;color:#6b7280}
  `]
})
export class StatCardComponent{
  @Input() icon = '👤';
  @Input() value: string | number | null = '0';
  @Input() label = '';
  isImageIcon(src:string): boolean{
    if(!src) return false;
    const s = src.toLowerCase();
    return s.startsWith('assets/') || s.endsWith('.svg') || s.endsWith('.png') || s.endsWith('.jpg') || s.endsWith('.jpeg') || s.endsWith('.webp');
  }
}
