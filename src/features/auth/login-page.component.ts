// src/app/features/auth/login-page.component.ts
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="login" role="main">
    <!-- Colonne gauche : logo -->
    <div class="left">
      <div class="logo-container" aria-label="Global Shopper">
        <img src="assets/globalshopper.png" alt="Logo Global Shopper" class="logo-img" />
      </div>
    </div>

    <!-- Colonne droite : formulaire -->
    <div class="right">
      <div class="panel card" role="form" aria-labelledby="loginTitle">
        <h3 id="loginTitle">Connectez-vous à votre tableau de bord</h3>

        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <!-- Email -->
          <label>
            <span class="label">E-mail</span>
            <input
              class="input"
              type="email"
              formControlName="email"
              placeholder="exemple@domaine.com"
              autocomplete="email"
              [attr.aria-invalid]="emailInvalid() ? 'true' : null"
            />
            <small class="error" *ngIf="emailInvalid()">Adresse e-mail invalide</small>
          </label>

          <!-- Mot de passe -->
          <label>
            <span class="label">Mot de passe</span>
            <div class="password-wrap">
              <input
                class="input"
                [type]="hidePwd ? 'password' : 'text'"
                formControlName="password"
                placeholder="Votre mot de passe"
                autocomplete="current-password"
                minlength="4"
                [attr.aria-invalid]="passwordInvalid() ? 'true' : null"
              />
              <button type="button" class="toggle" (click)="togglePwd()" aria-label="Afficher/masquer le mot de passe">
                {{ hidePwd ? '👁️' : '🙈' }}
              </button>
            </div>
            <small class="error" *ngIf="passwordInvalid()">Minimum 4 caractères</small>
          </label>

          <!-- Options + action -->
          <div class="actions">
            <label class="remember">
              <input type="checkbox" formControlName="remember" />
              Se souvenir de moi
            </label>

            <button class="btn" type="submit" [disabled]="form.invalid">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .login{display:flex;min-height:100vh}
  .left{flex:1;display:flex;justify-content:center;align-items:center;background:#fff}
  .logo-container{display:flex;flex-direction:column;align-items:center}
  .logo-img{width:700px;height:auto;object-fit:contain;margin-bottom:1rem}
  .right{flex:1;background:#3f73b4;display:flex;justify-content:center;align-items:center;color:#fff;padding:24px}
  .panel{width:450px;max-width:95vw;border-radius:20px;padding:20px;background:#fff;color:#111}
  form{display:grid;gap:8px}
  .label{display:block;margin:0 0 4px 2px;font-weight:600;color:#374151}
  .input{width:94%;border:1px solid #f3e4c4;border-radius:8px;padding:.6rem .8rem;outline:none;font-size:14px}
  .input:focus{border-color:var(--gs-gold);box-shadow:0 0 0 3px rgba(219, 166, 40, 0.15)}
  .password-wrap{position:relative}
  .password-wrap .toggle{
    position:absolute;right:8px;top:50%;transform:translateY(-50%);
    background:transparent;border:none;cursor:pointer;font-size:18px;line-height:1
  }
  .actions{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
  .remember{font-size:.95rem;color:#6b7280;display:flex;align-items:center;gap:.4rem}
  .error{color:#b91c1c;font-size:.85rem;margin-top:4px}
  @media (max-width: 900px){ .left{display:none} .right{flex:1} }
  `]
})
export class LoginPageComponent {
  private fb = inject(FormBuilder).nonNullable;
  private auth = inject(AuthService);

  // état UI (booléen simple pour compat max)
  hidePwd = true;

  // Reactive form
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    remember: [false]
  });

  constructor() {
    const savedEmail = localStorage.getItem('remember_email');
    if (savedEmail) {
      this.form.patchValue({ email: savedEmail, remember: true });
    }
  }

  // Helpers validation pour le template
  emailInvalid()   { const c = this.form.controls.email;    return c.touched && c.invalid; }
  passwordInvalid(){ const c = this.form.controls.password; return c.touched && c.invalid; }

  togglePwd() { this.hidePwd = !this.hidePwd; }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { email, password, remember } = this.form.getRawValue();

    if (remember) localStorage.setItem('remember_email', email);
    else localStorage.removeItem('remember_email');

    this.auth.login(email, password);
  }
}
