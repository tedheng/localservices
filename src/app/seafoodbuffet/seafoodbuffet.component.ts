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
    this.products = this.productsService.getProducts();
    this.orders = this.ordersService.getOrders();

    this.productsService
      .getProducts()
      .subscribe(
        val => this.products = val);
    this.ordersService
      .getOrders()
      .subscribe(
        val => this.orders = val);
  }
}
