import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './shared/student.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events-list/events-list.component';

import { StudentAttendanceListComponent } from './student-attendance-list/student-attendance-list.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { TeacherService } from './shared/teacher.service';
import { ClassService } from './shared/class.service';
import { ExamResultListComponent } from './exam-result-list/exam-result-list.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { NewsService } from './shared/news.service';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { EventService } from './shared/event.service';
import { AddNewsComponent } from './add-news/add-news.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    HomeComponent,
    TeachersComponent,
    TeachersListComponent,
    ClassesComponent,
    ClassesListComponent,
    NewsComponent,
    EventsComponent,
    EventsListComponent,
    StudentAttendanceListComponent,
    ExamResultsComponent,
    ExamResultListComponent,
    StudentAttendanceComponent,
    NewsListComponent,
    AddNewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [ StudentService, TeacherService , ClassService , NewsService , EventService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
