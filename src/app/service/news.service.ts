import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url: string = 'http://localhost:8080/api/v1/news'

  constructor(private http: HttpClient) { }

  retriveAll(): Observable<News[]> {
    return this.http.get<News[]>(this.url);
  }

  save(news: Object): Observable<object>{
    return this.http.post(`${this.url}`, news)
  }

}
