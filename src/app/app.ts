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

  showMessage() {
    console.log('Welcome to TeamFlow');
  }

  alertMessage() {
    console.log('Successfully logged In');
  }
}
