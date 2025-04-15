import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Nav2Component } from "../nav2/nav2.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  imports: [ReactiveFormsModule, Nav2Component,RouterOutlet],
})
export class DepositComponent implements OnInit{
  depositForm: FormGroup;
ngOnInit(): void {
  this.depositForm.patchValue({
    userId: localStorage.getItem('userId')
  });
  }
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.depositForm = this.fb.group({
      userId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }
  
  onSubmit() {
    let ls:any=localStorage.getItem('userId')
    if (this.depositForm.valid) {
      const params = new HttpParams()
        .set('userId',ls)
        .set('amount', this.depositForm.value.amount);

      this.http.post('http://localhost:8080/api/accounts/deposit', {}, { params, responseType: 'text' })
        .subscribe({
          next: (response) => {
            alert(response); // or use a Bootstrap alert
            this.depositForm.reset();
          },
          error: (error) => {
            alert('Deposit failed!');
            console.error(error);
          }
        });
    }
  }
}
