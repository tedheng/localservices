import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from '../orders.service';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-seafoodbuffet',
  templateUrl: './seafoodbuffet.component.html',
  styleUrls: ['./seafoodbuffet.component.css']
})
export class SeafoodbuffetComponent implements OnInit {
  vendorId: Number = 100;
  headerTitle: String = 'Seafood Buffet';
  products: any;
  orders: any;
  vendor: any;
  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService,
    private vendorsService: VendorsService) {}

  ngOnInit() {
    this.vendor = this.vendorsService.getVendor(this.vendorId);
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
    this.vendorsService
      .getVendor(this.vendorId)
      .subscribe(
        val => this.vendor = val);
  }
}
