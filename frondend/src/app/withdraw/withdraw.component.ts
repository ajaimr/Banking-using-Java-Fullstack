import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Nav2Component } from "../nav2/nav2.component";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  imports: [ReactiveFormsModule, Nav2Component]
})
export class WithdrawComponent implements OnInit{
  withdrawForm: FormGroup;
  ngOnInit(): void {
    this.withdrawForm.patchValue({
      userId: localStorage.getItem('userId')
    });
    }
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.withdrawForm = this.fb.group({
      userId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit() {
    if (this.withdrawForm.valid) {
      const params = new HttpParams()
        .set('userId', this.withdrawForm.value.userId)
        .set('amount', this.withdrawForm.value.amount);

      this.http.post('http://localhost:8080/api/accounts/withdraw', {}, { params, responseType: 'text' })
        .subscribe({
          next: (response) => {
            alert(response); // or use a Bootstrap alert
            this.withdrawForm.reset();
          },
          error: (error) => {
            alert('Withdrawal failed!');
            console.error(error);
          }
        });
    }
  }
}
