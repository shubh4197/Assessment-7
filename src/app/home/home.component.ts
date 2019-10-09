import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee.modal';
import { personal } from '../personal.modal';
import { Edu } from '../Educational.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string="";
  dob:string="";
  home:string="";
  phone:string="";
  degree:string="";
  marks:number=0;
  stream:string="";
  college:string="";
  id:number=0;
  constructor(private emp:EmployeeService) { }

  ngOnInit() {
  }

  add(){
  
  this.emp.emp.push(new Employee(this.emp.id,new personal(this.name,this.dob,this.home,this.phone),new Edu(this.degree,this.marks,this.stream,this.college)));
  this.emp.id++;
  console.log(this.emp.emp);
  
  }

}
