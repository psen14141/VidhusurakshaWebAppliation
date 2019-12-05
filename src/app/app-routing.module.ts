import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { NewsComponent } from './news/news.component';
import { StudentAttendanceListComponent } from './student-attendance-list/student-attendance-list.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { AddNewsComponent } from './add-news/add-news.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'studentlist', component: StudentListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'classes', component: ClassesComponent },
  { path: 'classeslist', component: ClassesListComponent },
  { path: 'events', component: EventsComponent },
  { path: 'eventslist', component: EventsListComponent },
  { path: 'examresult', component: ExamResultsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'studentattendantlist', component: StudentAttendanceListComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teacherslist', component: TeachersListComponent },
  { path: 'addnews', component: AddNewsComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
