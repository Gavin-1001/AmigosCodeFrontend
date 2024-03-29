import {Component, OnInit} from '@angular/core';
import {Employee} from "./common/employee";
import {EmployeeService} from "./service/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    //title = 'frontend';

    employees: Employee[];

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.getEmployees();
    }


    public getEmployees(): void {
        this.employeeService.getEmployees()
            .subscribe(
                (response:Employee[]) => {
                    this.employees = response
                },
                (error: HttpErrorResponse) => {
                        alert(error.message);
                }
            );
    }



}
