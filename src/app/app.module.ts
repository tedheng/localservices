import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeafoodbuffetComponent } from './seafoodbuffet/seafoodbuffet.component';
import { PetcareComponent } from './petcare/petcare.component';

@NgModule({
  declarations: [
    AppComponent,
    SeafoodbuffetComponent,
    PetcareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
