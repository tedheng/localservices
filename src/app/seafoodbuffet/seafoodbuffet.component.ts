import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-seafoodbuffet',
  templateUrl: './seafoodbuffet.component.html',
  styleUrls: ['./seafoodbuffet.component.css']
})
export class SeafoodbuffetComponent implements OnInit {
  headerTitle: String = 'Seafood Buffet';
  products: any;
  orders: any;
  constructor(private productsService: ProductsService, private ordersService: OrdersService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts(100);
    this.orders = this.ordersService.getOrders(100);

    this.productsService
      .getProducts(100)
      .subscribe(
        val => this.products = val);
    this.ordersService
      .getOrders(100)
      .subscribe(
        val => this.orders = val);
  }
}
