import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  @Input() name = '';
}
