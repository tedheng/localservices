import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get('http://belmj06jhgq.sea.corp.expecn.com:3333/orders?vendorid=100');
  }
}
