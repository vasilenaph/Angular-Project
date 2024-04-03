import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topic-list/topics.component';
import { TopicRoutingModule } from './topic-routing.module';
import { ReadMoreComponent } from './read-more/read-more.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopicsComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    TopicRoutingModule,
    FormsModule
  ]
})
export class TopicModule { }
