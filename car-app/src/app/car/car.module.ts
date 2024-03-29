import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCarComponent } from './current-car/current-car.component';
import { MainComponent } from './main/main.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarRoutingModule } from './car-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopicsComponent } from './topics/topics.component';
import { RentComponent } from './rent/rent.component';


@NgModule({
  declarations: [
    CurrentCarComponent,
    AddCarComponent,
    MainComponent,
    CarsListComponent,
    TopicsComponent,
    RentComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule
  ]
})
export class CarModule { }
