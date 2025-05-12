import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class OrderService 
{
  private mockdata = 'assets/MOCK_DATA.json'; 
  constructor(private http: HttpClient) {}


  getOrders(): Observable<any[]> 
  {
    return this.http.get<any[]>(this.mockdata).pipe(delay(2000)); //для проверки индикатора загрузки
  }
}