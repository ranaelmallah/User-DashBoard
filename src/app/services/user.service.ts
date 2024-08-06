import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/?page=${page}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }


}
