import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../shared/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  constructor( private teacherService: TeacherService) { }
  showSuccessMessage: boolean;
  submitted: boolean;
  formControls = this.teacherService.form.controls;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.teacherService.form.valid) {
      if (this.teacherService.form.get('$key').value == null) {
        this.teacherService.insertTeacher(this.teacherService.form.value);
      } else {
        this.teacherService.updateTeacher(this.teacherService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.teacherService.form.reset();
      // this is to be done for proper reset operation
      this.teacherService.form.setValue({
        $key: null,
        teacherid: '',
        fullName: '',
        idnumber: '',
        mobile: '',
        subject: '',
        class: ''
      });
    }
  }

}
