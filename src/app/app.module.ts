import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeafoodbuffetComponent } from './seafoodbuffet/seafoodbuffet.component';
import { PetcareComponent } from './petcare/petcare.component';
import { ProductsService } from './products.service';
import { OrdersService } from './orders.service';

@NgModule({
  declarations: [AppComponent, SeafoodbuffetComponent, PetcareComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ProductsService, OrdersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
