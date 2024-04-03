import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit{
  topics: Topic[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getTopics().subscribe((topics) => {
      this.topics = topics;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
