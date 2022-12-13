import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/common-interfaces';
import { environment } from 'src/environments/environment';

const user = {
  getTxCount: 'getCount',
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private defaultOptions: object;
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.defaultOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      withCredentials: true,
    };
  }

  getApi(url: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(url, this.defaultOptions);
  }

  getTxCount(): Observable<ApiResponse> {
    const url = `${this.baseUrl}${user.getTxCount}`;
    return this.getApi(url);
  }
}
