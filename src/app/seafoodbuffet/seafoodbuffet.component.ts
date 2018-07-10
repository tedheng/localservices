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
  constructor(private productsService: ProductsService, private ordersService: OrdersService) {}

  ngOnInit() {
    const products = this.productsService.getProducts();
    const orders = this.ordersService.getOrders();

    this.productsService
      .getProducts()
      .subscribe(
        val => console.log(val));
    this.ordersService
      .getOrders()
      .subscribe(
        val => console.log(val));
  }
}
