import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { CurrentCarComponent } from "./current-car/current-car.component";
import { TopicsComponent } from "./topics/topics.component";
import { RentComponent } from "./rent/rent.component";

const routes: Routes = [
    {
        path: 'cars',
        children: [
            { path: '', pathMatch: 'full', component: MainComponent },
            { path: 'topic', component: TopicsComponent },
            { path: ':carId', component: CurrentCarComponent },
            { path: ':carId/rent', component: RentComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CarRoutingModule { }