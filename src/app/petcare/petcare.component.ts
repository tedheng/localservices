import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-petcare',
  templateUrl: './petcare.component.html',
  styleUrls: ['./petcare.component.css']
})
export class PetcareComponent implements OnInit {
  headerTitle: String = 'Pet Care';
  products: any;
  orders: any;

  constructor(private productsService: ProductsService, private ordersService: OrdersService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts(200);
    this.orders = this.ordersService.getOrders(200);

    this.productsService
      .getProducts(200)
      .subscribe(
        val => this.products = val);
    this.ordersService
      .getOrders(200)
      .subscribe(
        val => this.orders = val);

  }

}
