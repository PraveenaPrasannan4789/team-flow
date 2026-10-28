import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from './employee/employee';
import { UpperCasePipe } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Employee, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('team-flow');
  appName = 'TeamFlow';
  isLoggedIn = true;
  employeeCount = 5;
  userRole = 'admin';
  isButtonDisabled = true;
  employees = [
    { id: 1, name: 'John', role: 'Developer' },
    { id: 2, name: 'Sarah', role: 'Designer' },
    { id: 3, name: 'David', role: 'Manager' },
  ];
  employeeName = '';
  selectedEmployee = '';
  searchTerm = '';

  showRoleColours = true;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  get filteredEmployees() {
    return this.employees.filter((employee) =>
      employee.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase()),
    );
  }

  getRoleColor(role: string): string {
    if (role === 'Manager') {
      return 'green';
    } else if (role === 'Designer') {
      return 'purple';
    } else {
      return 'blue';
    }
  }

  onEmployeeSelected(name: string) {
    this.selectedEmployee = name;
    console.log('Selected employee:', name);
  }

  toggleRoleColours() {
    this.showRoleColours = !this.showRoleColours;
  }

  showMessage() {
    console.log('Welcome to TeamFlow');
  }

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  alertMessage() {
    console.log('Successfully logged In');
  }

  focusSearch() {
    this.searchInput.nativeElement.focus();
  }
  clearSearch() {
    this.searchTerm = '';
    this.searchInput.nativeElement.focus();
  }
}
