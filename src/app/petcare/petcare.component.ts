import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-petcare',
  templateUrl: './petcare.component.html',
  styleUrls: ['./petcare.component.css']
})
export class PetcareComponent implements OnInit {
  vendorId: Number = 200;
  headerTitle: String = 'Pet Care';
  products: any;
  orders: any;

  constructor(private productsService: ProductsService, private ordersService: OrdersService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts(this.vendorId);
    this.orders = this.ordersService.getOrders(this.vendorId);

    this.productsService
      .getProducts(this.vendorId)
      .subscribe(
        val => this.products = val);
    this.ordersService
      .getOrders(this.vendorId)
      .subscribe(
        val => this.orders = val);

  }

}
