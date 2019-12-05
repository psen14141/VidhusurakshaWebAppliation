import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firebase: AngularFireDatabase) {
    this.newsList = this.firebase.list('institute/institute - 1/news');
   }
  newsList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    newsid : new FormControl('', Validators.required),
    heading : new FormControl(''),
    reporter : new FormControl(''),
    date : new FormControl(''),
    content : new FormControl(''),
    comments : new FormControl(''),
  });


  getNEWS() {
    this.newsList = this.firebase.list('institute/institute - 1/news');
    return this.newsList.snapshotChanges();
  }
  insertNEWS(news) {
    this.newsList.push({
      newsid: news.newsid,
      heading: news.heading,
      reporter: news.reporter,
      date: news.date,
      content: news.content
    });
  }

  populateForm(news) {
    this.form.setValue(news);
  }
  updateNEWS(news) {
    this.newsList.update(news.$key,
      {
        newsid: news.newsid,
      heading: news.heading,
      reporter: news.reporter,
      date: news.date,
      content: news.content
      });
  }

  deleteNEWS($key: string) {
    this.newsList.remove($key);
  }

}
