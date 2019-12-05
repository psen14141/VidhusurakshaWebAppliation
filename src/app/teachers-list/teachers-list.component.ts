import { Component, OnInit } from '@angular/core';

import { TeacherService } from '../shared/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }
  teacherArray = [];
  showDeletedMessage: boolean;
  // tslint:disable-next-line: no-inferrable-types
  searchText: string = '';

  ngOnInit() {
    this.teacherService.getTeacher().subscribe(
      list => {
        this.teacherArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.teacherService.deleteTeacher($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(teacher) {
    // tslint:disable-next-line: triple-equals
    return teacher.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}

