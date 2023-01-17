import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../common/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '';

  constructor(private httpClient: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employee/getAll`);
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.baseUrl}/employee/add`, employee);
  }

  public updateEmployee(employee:Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/employee/delete/${employeeId}`);
  }

}
