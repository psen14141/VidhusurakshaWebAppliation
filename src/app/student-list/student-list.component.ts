import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  studentArray = [];
  showDeletedMessage: boolean;
  // tslint:disable-next-line: no-inferrable-types
  searchText: string = '';

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      list => {
        this.studentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.studentService.deleteCustomer($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(student) {
    // tslint:disable-next-line: triple-equals
    return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}

