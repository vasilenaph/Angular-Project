import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/cars';

@Component({
  selector: 'app-current-car',
  templateUrl: './current-car.component.html',
  styleUrls: ['./current-car.component.css']
})
export class CurrentCarComponent implements OnInit{
  
  car = {} as Car;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['carId'];
      this.apiService.getCar(id).subscribe((car) => {
        this.car = car;
      });
    });
  }

}
