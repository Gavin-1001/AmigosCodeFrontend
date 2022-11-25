import {Component, OnInit} from '@angular/core';
import {Employee} from "./class/employee";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./service/employee.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {

    public employees: Employee[];

    constructor(private employeeService:EmployeeService) {
    }

    public getEmployees(): void{
        this.employeeService.getEmployees().subscribe(
            (response:Employee[]) =>{
                this.employees = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

}
