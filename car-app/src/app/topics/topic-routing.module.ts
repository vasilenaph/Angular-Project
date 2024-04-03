import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadMoreComponent } from "./read-more/read-more.component";
import { TopicsComponent } from "./topic-list/topics.component";
import { MainComponent } from "../car/main/main.component";

const routes: Routes = [
    {
        path: 'topics',
        children: [
            { path: '', pathMatch: 'full', component: TopicsComponent },
            { path: ':topicId', component: ReadMoreComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class TopicRoutingModule { }