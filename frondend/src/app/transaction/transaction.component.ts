import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0.01)]],
      type: ['DEPOSIT', Validators.required]
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const transactionData = this.transactionForm.value;
      this.transactionService.submitTransaction(transactionData).subscribe({
        next: res => {
          alert('Transaction successful!');
          this.transactionForm.reset({ type: 'DEPOSIT' });
        },
        error: err => {
          alert('Transaction failed!');
          console.error(err);
        }
      });
    }
  }
}
