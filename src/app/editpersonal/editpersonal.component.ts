import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee.modal';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { personal } from '../personal.modal';

@Component({
  selector: 'app-editpersonal',
  templateUrl: './editpersonal.component.html',
  styleUrls: ['./editpersonal.component.css']
})
export class EditpersonalComponent implements OnInit {
  name:string="";
  dob:string="";
  home:string="";
  phone:string="";
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

  edith1(){
    this.emp.emp[this.emp.emp.indexOf(this.user)].personal=new personal(this.name,this.dob,this.home,this.phone);
  }

}
