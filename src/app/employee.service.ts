import { Injectable } from '@angular/core';
import {Employee} from './Employee.modal'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  id:number=0;
  emp:Employee[]=[];
  constructor() { }
}
