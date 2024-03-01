import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject1';

  name = '';
  email = '';
  phone = '';
  address = '';
  qualifications = [{school: '', degree: '', year: ''}];
  isSubmitted = false;

  addQualification(): void {
    this.qualifications.push({school: '', degree: '', year: ''});
  }

  removeQualification(i: number): void {
    this.qualifications.splice(i, 1);
  }

  onSubmit() {
    this.isSubmitted = true;
  }

  onEdit() {
    this.isSubmitted = false;
  }
}
