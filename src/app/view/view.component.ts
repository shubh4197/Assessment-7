import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee.modal';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  name1:string=""
  user:Employee[]=[];
  constructor(private nam:EmployeeService) { }
  
  ngOnInit() {
  }

  search(){
   this.nam.emp.forEach(element=>{
     if(element.personal.name==this.name1)
     {
       this.user.push(element)
     }
   });
  }

}
