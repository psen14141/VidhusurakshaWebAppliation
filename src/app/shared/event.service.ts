import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private firebase: AngularFireDatabase) {
    this.eventList = this.firebase.list('institute/institute - 1/events');
   }
  eventList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    eventid : new FormControl('', Validators.required),
    eventname : new FormControl('', Validators.required),
    eventdate : new FormControl('', Validators.required),
    eventcontent : new FormControl('', Validators.required),

  });
  getEvent() {
    this.eventList = this.firebase.list('institute/institute - 1/events');
    return this.eventList.snapshotChanges();
  }
  insertEvent(event) {
    this.eventList.push({
      eventid : event.eventid,
      eventname : event.eventname,
      eventdate : event.eventdate,
      eventcontent : event.eventcontent
    });
  }

  populateForm(event) {
    this.form.setValue(event);
  }
  updateEvent(event) {
    this.eventList.update(event.$key,
      {
        eventid : event.eventid,
        eventname : event.eventname,
        eventdate : event.eventdate,
        eventcontent : event.eventcontent
      });
  }

  deleteEvent($key: string) {
    this.eventList.remove($key);
  }


}
