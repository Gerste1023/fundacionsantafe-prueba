import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(user: User): Observable<string> {
    return this.http.post<string>(`${environment.urlApi}/login`, user);
  }
}
