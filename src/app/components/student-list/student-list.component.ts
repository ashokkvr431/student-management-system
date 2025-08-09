import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  
  student_list: any[] = [];
  showForm = false;
  editData: any = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.student_list = data;
    })
  }

  openForm() {
    this.showForm = true;
    this.editData = null;
  }

  editStudent(student: any) {
    this.showForm = true;
    this.editData = student;
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    })
  }

  closeForm(updated: boolean) {
    this.showForm = false;
    if(updated) {
      this.loadStudents();
    }
  }

}