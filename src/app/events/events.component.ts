import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  constructor(private eventService: EventService) { }
  showSuccessMessage: boolean;
  submitted: boolean;
  formControls = this.eventService.form.controls;
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.eventService.form.valid) {
      if (this.eventService.form.get('$key').value == null) {
        this.eventService.insertEvent(this.eventService.form.value);
      } else {
        this.eventService.updateEvent(this.eventService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.eventService.form.reset();
      // this is to be done for proper reset operation
      this.eventService.form.setValue({
        $key: null,
        eventid: '',
        eventname: '',
        eventdate: '',
        eventcontent: ''

      });
    }
  }

}
