import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ingresar() {
    this.validateUser(this.form.value);
  }

  loadForm() {
    this.form = this.fb.group({
      email: ['admin@admin.com', [Validators.required, Validators.email]],
      password: ['admin', Validators.required],
    });
  }

  private snakBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Aceptar', {
      duration: 2000,
    });
  }

  private validateUser(user: User) {
    this.loginService.login(user)
      .subscribe({
        next: (token) => {
          sessionStorage.setItem("token", token);
          this.router.navigate(['/']);
        },
        error: () => {
          this.msgError();
        },
      });
  }

  private msgError() {
    this.snakBar('Usuario o contraseña incorrecta');
  }
}
