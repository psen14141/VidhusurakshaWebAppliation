import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private studentService: StudentService) { }
  showSuccessMessege: boolean;
  submitted: boolean;
  formControls = this.studentService.form.controls;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.studentService.form.valid) {
      if (this.studentService.form.get('$key').value == null) {
        this.studentService.insertStudent(this.studentService.form.value);
        this.showSuccessMessege = true;
        setTimeout(() => this.showSuccessMessege = false, 3000);
        } else {
        this.submitted = false;
      }
    }
  }

}
