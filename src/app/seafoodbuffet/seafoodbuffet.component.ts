import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seafoodbuffet',
  templateUrl: './seafoodbuffet.component.html',
  styleUrls: ['./seafoodbuffet.component.css']
})
export class SeafoodbuffetComponent implements OnInit {
  headerTitle: String = 'Seafood Buffet';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductList().subscribe(val => console.log(val));
  }
}
