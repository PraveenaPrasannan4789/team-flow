import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

  showMessage() {
    console.log('Welcome to TeamFlow');
  }

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  alertMessage() {
    console.log('Successfully logged In');
  }
}
