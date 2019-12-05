import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private firebase: AngularFireDatabase) { 
    this.clzList = this.firebase.list('institute/institute - 1/clz'); 
  }
  clzList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    clzid : new FormControl('', Validators.required),
    clzname : new FormControl(''),
    clzteacher : new FormControl(''),
    numberofstudents : new FormControl(''),
    clzmemo : new FormControl('')
  });
  getclz() {
    this.clzList = this.firebase.list('institute/institute - 1/clz');
    return this.clzList.snapshotChanges();
  }
  insertclz(clz) {
    this.clzList.push({
      clzid: clz.clzid,
      clzname: clz.clzname,
      clzteacher: clz.clzteacher,
      numberofstudents: clz.numberofstudents,
      clzmemo: clz.clzmemo
    });
  }

  populateForm(clz) {
    this.form.setValue(clz);
  }
  updateclz(clz) {
    this.clzList.update(clz.$key,
      {
        clzid: clz.clzid,
        clzname: clz.clzname,
        clzteacher: clz.clzteacher,
        numberofstudents: clz.numberofstudents,
        clzmemo: clz.clzmemo
      });
  }

  deleteclz($key: string) {
    this.clzList.remove($key);
  }

}
