import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/cars';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: Car[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCars().subscribe((cars) => {
      this.cars = cars;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }


}
