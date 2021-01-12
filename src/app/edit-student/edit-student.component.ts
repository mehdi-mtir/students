import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  s : Student;
  indice : number;
  studentForm : FormGroup;

  constructor(
    private studentService : StudentService, 
    private router : Router,
    private activatedRoute : ActivatedRoute) {
      this.activatedRoute.params.subscribe(
        params => {
          this.indice = params.id;
          this.s = this.studentService.getStudent(params.id);
        }
      )
      this.studentForm = new FormGroup(
        {
          name : new FormControl(this.s.name, Validators.required),
          firstname : new FormControl(this.s.firstname, Validators.required),
          class : new FormControl(this.s.class, Validators.required)
        }
      );
      
     }


  onSubmit(){
    const formValues = this.studentForm.value;
    this.s = new Student(formValues.name, formValues.firstname, formValues.class )
    this.studentService.editStudent(this.s, this.indice);
    this.router.navigate(['/students']);
  }



  ngOnInit() {
    
  }

}
