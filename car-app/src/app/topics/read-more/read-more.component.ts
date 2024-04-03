import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topics';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})

export class ReadMoreComponent implements OnInit{

  topic = {} as Topic;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['topicId'];
      this.apiService.getTopic(id).subscribe((topic) => {
        this.topic = topic;
      });
    });
  }

}
