import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCarComponent } from './current-car/current-car.component';
import { MainComponent } from './main/main.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarRoutingModule } from './car-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RentComponent } from './rent/rent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrentCarComponent,
    AddCarComponent,
    MainComponent,
    CarsListComponent,
    RentComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CarModule { }
