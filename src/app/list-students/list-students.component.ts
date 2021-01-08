import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students : Student[];

  constructor(private serviceStudent : StudentService) { }

  ngOnInit() {
    this.students = this.serviceStudent.getStudents();
  }

}
