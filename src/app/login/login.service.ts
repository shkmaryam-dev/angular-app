import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class LoginServer {
  private baseUri = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {}


}
