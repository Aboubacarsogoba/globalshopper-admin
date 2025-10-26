// src/app/features/auth/login-page.component.ts
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone:true,
  selector:'app-login',
  imports:[CommonModule, ReactiveFormsModule],
  template:`
  <div class="login">
    <div class="left">
      <div class="logo-big">G</div>
      <div class="name">Global <span>Shopper</span></div>
    </div>

    <div class="right">
      <div class="panel card">
        <h3>Connectez vous à votre tableau de bord</h3>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <label>
            <span>E-Mail</span>
            <input class="input" type="email" placeholder="E-Mail" formControlName="email">
          </label>
          <label>
            <span>Mots de passe</span>
            <input class="input" type="password" placeholder="Votre mot de passe" formControlName="password">
          </label>
          <div class="actions">
            <label class="remember"><input type="checkbox"> Se souvenir de moi</label>
            <button class="btn" type="submit" [disabled]="form.invalid">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,
  styles:[`
  .login{display:grid;grid-template-columns:1fr 1fr;min-height:100vh}
  .left{display:grid;place-content:center;background:#fff}
  .logo-big{font-size:96px;background:var(--gs-blue);color:#fff;width:140px;height:140px;border-radius:50%;display:grid;place-content:center;margin:auto}
  .name{font-size:40px;text-align:center;margin-top:12px}
  .name span{color:var(--gs-gold)}
  .right{display:grid;place-content:center;background:var(--gs-blue)}
  .panel{width:520px;border-radius:24px;padding:28px}
  form{display:grid;gap:12px}
  .actions{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
  .remember{font-size:.9rem;color:#6b7280}
  `]
})
export class LoginPageComponent{
  private fb = inject(FormBuilder).nonNullable;
  private auth = inject(AuthService);

  form = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(4)]]
  });

  submit(){ if(this.form.valid){ 
    const {email, password} = this.form.getRawValue();
    this.auth.login(email, password);
  } }
}
