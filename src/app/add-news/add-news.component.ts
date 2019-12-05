import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor( private newsService: NewsService ) { }
  showSuccessMessage: boolean;
  submitted: boolean;
  formControls = this.newsService.form.controls;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.newsService.form.valid) {
      if (this.newsService.form.get('$key').value == null) {
        this.newsService.insertNEWS(this.newsService.form.value);
      } else {
        this.newsService.updateNEWS(this.newsService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.newsService.form.reset();
      // this is to be done for proper reset operation
      this.newsService.form.setValue({
        $key: null,
        newsid: '',
        heading: '',
        reporter: '',
        date: '',
        content: ''
      });
    }
  }
}
