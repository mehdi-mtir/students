import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const routes: Routes = [
  {path : 'students', component : ListStudentsComponent},
  {path : 'students/add', component : AddStudentComponent},
  {path : 'students/edit/:id', component : EditStudentComponent},
  {path : '', redirectTo : 'students', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
