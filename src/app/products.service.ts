import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get('http://localhost:3333/products');
  }
}
