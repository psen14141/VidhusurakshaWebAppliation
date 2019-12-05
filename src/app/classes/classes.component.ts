import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor( private clzService: ClassService) { }
  // tslint:disable-next-line: ban-types
  ShowSuccessMessege: Boolean;
  submitted: boolean;
  formControls = this.clzService.form.controls;

  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    if (this.clzService.form.valid){
      if (this.clzService.form.get('$key').value == null) {
        this.clzService.insertclz(this.clzService.form.value);
      } else {
        this.clzService.updateclz(this.clzService.form.value);
      }
      this.ShowSuccessMessege = true;
      setTimeout(() => this.ShowSuccessMessege = false , 3000);
      this.submitted = false;
      this.clzService.form.reset();
      this.clzService.form.setValue({
          $key: null,
          clzid: '',
          clzname: '',
          clzteacher: '',
          numberofstudents: '',
          clzmemo: ''
      });
    }
  }

}
