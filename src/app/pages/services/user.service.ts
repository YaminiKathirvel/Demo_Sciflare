import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint: string;
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.endPoint = "5bae4d8936c5470280ec2d74c98b8481";
    this.apiUrl = `http://localhost:3000/user`;
  }
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }
  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, userData);
  }
}


