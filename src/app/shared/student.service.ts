import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase: AngularFireDatabase) {
    this.studentList = this.firebase.list('institute/institute - 1/students');
  }
  studentList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    studentid : new FormControl('', Validators.required),
    fullName : new FormControl('', Validators.required),
    idnumber : new FormControl('',  [Validators.required, Validators.minLength(10)]),
    mobile : new FormControl('',  [Validators.required, Validators.minLength(10)]),
    studentclass : new FormControl(''),
  });
  getStudents() {
    this.studentList = this.firebase.list('institute/institute - 1/students');
    return this.studentList.snapshotChanges();
  }
  insertStudent(student) {
    this.studentList.push({
      studentid: student.studentid,
      fullName: student.fullName,
      idnumber: student.idnumber,
      mobile: student.mobile,
      studentclass: student.studentclass
    });
  }

  populateForm(student) {
    this.form.setValue(student);
  }
  updateStudent(student) {
    this.studentList.update(student.$key,
      {
        studentid: student.studentid,
        fullName: student.fullName,
        idnumber: student.idnumber,
        mobile: student.mobile,
        studentclass: student.studentclass
      });
  }

  deleteStudent($key: string) {
    this.studentList.remove($key);
  }

}
