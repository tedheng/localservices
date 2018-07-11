import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeafoodBuffetComponent } from './seafoodbuffet/seafoodbuffet.component';
import { PetcareComponent } from './petcare/petcare.component';
import { ProductsService } from './products.service';
import { OrdersService } from './orders.service';
import { RouterModule } from '@angular/router';
import { VendorregistrationComponent } from './vendorregistration/vendorregistration.component';
import { ProductregistrationComponent } from './productregistration/productregistration.component';
import {VendorsService} from './vendors.service';

@NgModule({
  declarations: [AppComponent, SeafoodBuffetComponent, PetcareComponent, VendorregistrationComponent, ProductregistrationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'seafoodbuffet', component: SeafoodBuffetComponent },
      {path: 'petcare', component: PetcareComponent},
      {path: 'vendorregistration', component: VendorregistrationComponent},
      {path: 'productregistration', component: ProductregistrationComponent}
      ]
    )
  ],
  providers: [ProductsService, OrdersService, VendorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
