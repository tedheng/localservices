import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OrdersService } from '../orders.service';
import { VendorsService } from '../vendors.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-seafoodbuffet',
  templateUrl: './seafoodbuffet.component.html',
  styleUrls: ['./seafoodbuffet.component.css']
})
export class SeafoodBuffetComponent implements OnInit {
  vendorId: Number = 100;
  headerTitle: String = 'Seafood Buffet';
  products$: Observable<any>;
  orders$: Observable<any>;
  vendor$: Observable<any>;

  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService,
    private vendorsService: VendorsService
  ) {}

  ngOnInit() {
    this.vendor$ = this.vendorsService.getVendor(this.vendorId);
    this.products$ = this.productsService.getProducts(this.vendorId);
    this.orders$ = this.ordersService.getOrders(this.vendorId);
  }
}
