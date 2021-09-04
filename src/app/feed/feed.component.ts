import { Component, OnInit } from '@angular/core';
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  filteredNews: News[] = [];

  listNews!: News[];

  _news: News[] = [];

  news: News = new News;

  _filterBy!: String;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.findNews()
  }

  findNews(){
    this.retriveAll()
  }

  retriveAll(): void{
    this.newsService.retriveAll().subscribe({
      next: (news: News[]) => {
        this._news = news;
        this.filteredNews = this._news;
      },
      error: (err: any) => console.log('Error ', err)
    })
  }

  set filter(value: string){
    this._filterBy = value
    this.filteredNews = this._news.filter((news: News) => news.title.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
  }

}
