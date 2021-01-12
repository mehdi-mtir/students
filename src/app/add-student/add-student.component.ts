import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  s : Student;
  studentForm = new FormGroup(
    {
      name : new FormControl('', Validators.required),
      firstname : new FormControl('', Validators.required),
      class : new FormControl('', Validators.required)
    }
  );

  constructor(private studentService : StudentService, private router : Router) { }

  onSubmit(){
    const formValues = this.studentForm.value;
    this.s = new Student(formValues.name, formValues.firstname, formValues.class )
    this.studentService.addStudent(this.s);
    this.router.navigate(['/students']);
  }

  ngOnInit() {
  }

}
