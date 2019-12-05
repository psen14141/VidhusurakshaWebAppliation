import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService ) { }
  newsArray = [];
  showDeletedMessage: boolean;
  // tslint:disable-next-line: no-inferrable-types
  searchText: string = '';
  ngOnInit() {
    this.newsService.getNEWS().subscribe(
      list => {
        this.newsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  filterCondition(news) {
    // tslint:disable-next-line: triple-equals
    return news.heading.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
