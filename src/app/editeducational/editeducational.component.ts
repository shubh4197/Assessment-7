import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee.modal';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Edu } from '../Educational.modal';

@Component({
  selector: 'app-editeducational',
  templateUrl: './editeducational.component.html',
  styleUrls: ['./editeducational.component.css']
})
export class EditeducationalComponent implements OnInit {
  degree:string="";
  marks:number=0;
  stream:string="";
  college:string="";
  index:number=0;
  user:Employee;
  constructor(private emp:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.index=parseInt(this.route.snapshot.paramMap.get('id'))
    this.emp.emp.forEach(element=>{
      if(element.id==this.index)
      {
        this.user=element;
      }
    })
  }

  edith2(){
    this.emp.emp[this.emp.emp.indexOf(this.user)].educational=new Edu(this.degree,this.marks,this.stream,this.college);
  }

}
