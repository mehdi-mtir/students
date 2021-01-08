import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { RouterModule } from '@angular/router';
import { StudentService } from './service/student.service';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
