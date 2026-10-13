import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  @Input() name = '';
  @Output() employeeSelected = new EventEmitter<string>();

  selectEmployee() {
    this.employeeSelected.emit(this.name);
  }
}
