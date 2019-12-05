import { Component, OnInit } from '@angular/core';

import { ClassService } from '../shared/class.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  constructor(private clzService: ClassService) { }
  clzArray = [];
  showDeletedMessage: boolean;
  // tslint:disable-next-line: no-inferrable-types
  searchText: string = '';

  ngOnInit() {
    this.clzService.getclz().subscribe(
      list => {
        this.clzArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.clzService.deleteclz($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(clz) {
    // tslint:disable-next-line: triple-equals
    return clz.clzname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}

