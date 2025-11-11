// src/app/features/suppliers/suppliers.repository.ts (exemple)
import { Injectable, inject, signal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
@Injectable({providedIn:'root'})
export class SuppliersRepository {
  private api = inject(ApiService);
  list(params?: any){ return this.api.get<any[]>('fournisseur', params); }
}
