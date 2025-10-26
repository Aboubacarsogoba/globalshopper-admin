// src/app/features/suppliers/suppliers.facade.ts
import { Injectable, signal } from '@angular/core';
import { SuppliersRepository } from './suppliers.repository';
import { finalize } from 'rxjs';
@Injectable({providedIn:'root'})
export class SuppliersFacade{
  loading = signal(false);
  items = signal<any[]>([]);
  constructor(private repo: SuppliersRepository){}
  load(q:any={}){ this.loading.set(true);
    this.repo.list(q).pipe(finalize(()=>this.loading.set(false))).subscribe((res: any) => this.items.set(res.data));
  }
}
