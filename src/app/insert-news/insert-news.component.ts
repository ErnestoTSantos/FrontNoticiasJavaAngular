import { Component, OnInit } from '@angular/core';
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-insert-news',
  templateUrl: './insert-news.component.html',
  styleUrls: ['./insert-news.component.css']
})
export class InsertNewsComponent implements OnInit {

  news: News = new News;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  saveMessage(){
    this.newsService.save(this.news).subscribe({
      next: news => console.log('Saved with success', news),
      error: err => console.log('Error', err)
    });
    location.assign('/news')
  }

}
