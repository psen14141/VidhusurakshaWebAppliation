import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase: AngularFireDatabase) { }
  studentList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    fullName : new FormControl('', Validators.required),
    email : new FormControl('',  Validators.email),
    mobile : new FormControl('',  [Validators.required, Validators.minLength(8)]),
    location : new FormControl('')
  });
  getStudents() {
    this.studentList = this.firebase.list('students');
    return this.studentList.snapshotChanges();
  }
  insertStudent(student) {
    this.studentList.push({
      fullName: student.fullName,
      email: student.email,
      mobile: student.mobile,
      location: student.location
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }
  updateCustomer(customer) {
    this.studentList.update(customer.$key,
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location
      });
  }

  deleteCustomer($key: string) {
    this.studentList.remove($key);
  }

}
