import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private firebase: AngularFireDatabase) {
    this.teacherList = this.firebase.list('institute/institute - 1/teachers');

   }
  teacherList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    teacherid : new FormControl('', Validators.required),
    fullName : new FormControl('', Validators.required),
    idnumber : new FormControl('',  [Validators.required, Validators.minLength(10)]),
    mobile : new FormControl('',  [Validators.required, Validators.minLength(10)]),
    subject : new FormControl(''),
    class : new FormControl('')
  });
  getTeacher() {
    this.teacherList = this.firebase.list('institute/institute - 1/teachers');
    return this.teacherList.snapshotChanges();
  }
  insertTeacher(teachers) {
    this.teacherList.push({
      teacherid: teachers.teacherid,
      fullName: teachers.fullName,
      idnumber: teachers.idnumber,
      mobile: teachers.mobile,
      subject: teachers.subject,
      class: teachers.class
    });
  }

  populateForm(teachers) {
    this.form.setValue(teachers);
  }
  updateTeacher(teachers) {
    this.teacherList.update(teachers.$key,
      {
        teacherid: teachers.teacherid,
        fullName: teachers.fullName,
        idnumber: teachers.idnumber,
        mobile: teachers.mobile,
        subject: teachers.subject,
        class: teachers.class
      });
  }

  deleteTeacher($key: string) {
    this.teacherList.remove($key);
  }


}
