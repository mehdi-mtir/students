import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable()
export class StudentService {
  students : Student[];
  action : string;
  currentIndex : number;
  currentStudent : Student;

  constructor() { }

  changeAction(action : string) : void{
    this.action = action;
  }

  getAction(){
    return this.action;
  }

  saveStudents(){
    window.localStorage.setItem("students", JSON.stringify(this.students));
  }

  getStudents(){
    if(window.localStorage.getItem("students")){
      this.students = JSON.parse(window.localStorage.getItem("students"));
    }
    else{
      this.students = [];
    }

    return this.students;
    
  }

  getCurrentStudent(){
    return this.currentStudent;
  }

  getStudent(indice : number){
    return this.students[indice];
  }

  addStudent(s : Student){
    this.students.push(s);
    this.saveStudents();
    this.changeAction(""); 
  }

  editStudent(s : Student, indice : number){
    this.students[indice] = s;
    this.saveStudents();
    this.changeAction("");
  }

  deleteStudent(indice : number){
    if(confirm("Etes-vous sûre de vouloir supprimer l'étudiant " + this.students[indice].name)){
      this.students.splice(indice, 1);
      this.saveStudents();
    }
  }


}
