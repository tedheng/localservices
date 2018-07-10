import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-petcare',
  templateUrl: './petcare.component.html',
  styleUrls: ['./petcare.component.css']
})
export class PetcareComponent implements OnInit {
  headerTitle: String = 'Pet Care';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductList().subscribe(val => console.log(val));
  }

}
