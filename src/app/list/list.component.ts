import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee.modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user:Employee;
  constructor(public emp:EmployeeService) { }
  
  ngOnInit() {
  }
 delete(value){
   this.emp.emp.forEach(element=>{
     if(element.id==value){
       this.user=element;
     }
   });
   this.emp.emp.splice(this.emp.emp.indexOf(this.user),1);
 }
}
