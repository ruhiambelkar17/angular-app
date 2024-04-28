import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:1337/api/employees';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPost(postData: {
    data: {
      empId: number;
      empName: string;
      empEmail: string;
    };
  }): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  updatePost(
    id: number,
    postData: {
      data: {
        empId: number;
        empName: string;
        empEmail: string;
      };
    }
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, postData);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
