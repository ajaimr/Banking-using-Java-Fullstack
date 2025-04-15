import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private route:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post<any>('http://localhost:8080/api/users/login', {
        email: loginData.email,
        password: loginData.password
      }).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          alert('Login successful');
          // Save user ID if needed
          alert(response.id)
          console.log(response.id)
          localStorage.setItem('userId', response.id);
          this.route.navigate(['home2'])
        },
        error: (err) => {
          alert('enter valid data')
          console.error('Login error:', err);
          alert('Login failed. Please check your credentials.');
        }
      });
    } else {
      alert('Enter valid data');
    }
  }
}
