import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://belmj06jhgq.sea.corp.expecn.com:3333/products?vendorid=100');
  }
}
