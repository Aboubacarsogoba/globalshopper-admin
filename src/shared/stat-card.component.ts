// src/app/shared/stat-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true, selector:'app-stat-card', imports:[CommonModule],
  template:`<div class="card stat">
    <div class="icon">{{icon}}</div>
    <div class="content">
      <div class="value">{{value}}</div>
      <div class="label">{{label}}</div>
    </div>
  </div>`,
  styles:[`
  .stat{display:flex;gap:12px;align-items:center;padding:16px}
  .icon{font-size:28px;color:var(--gs-gold)}
  .value{font-weight:700;font-size:20px}
  .label{font-size:.9rem;color:#6b7280}
  `]
})
export class StatCardComponent{
  @Input() icon = '👤';
  @Input() value: string | number | null = '0';
  @Input() label = '';
}
