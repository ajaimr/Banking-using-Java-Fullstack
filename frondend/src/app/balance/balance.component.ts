    import { Component } from '@angular/core';
    import { Nav2Component } from "../nav2/nav2.component";
    import { HttpClient } from '@angular/common/http';
    import { RouterLink } from '@angular/router';

    @Component({
      selector: 'app-balance',
      imports: [Nav2Component,RouterLink],
      templateUrl: './balance.component.html',
      styleUrl: './balance.component.css'
    })
    export class BalanceComponent {
      userName = 'John Doe';
      balance: number = 0;
      userId: any;
      trans: any;
      constructor(private http: HttpClient) {}

      ngOnInit(): void {
        this.userId = localStorage.getItem('userId');
        this.fetch2();
        // this.fetchTransaction();
        this.fetchUserInfo();
      }
//       fetchTransaction() {
//         this.http.get<any>('http://localhost:8080/api/accounts/transactions').subscribe({
//           next:(value) =>{
//             this.trans=value;
// // console.log(value)          
// },
//         })
//       }

    fetch2(){
      this.http.get<any>(`http://localhost:8080/api/accounts/name?userId=${this.userId}`,{ responseType: 'text' as 'json'}).subscribe({
        next: (data) => {
          this.userName = data;
          // alert('data')
        },
        error: (err) => {
          console.error('Error fetching name:', err);
        }
      });

    }
      fetchUserInfo() {
        this.http.get<any>(`http://localhost:8080/api/accounts/balance?userId=${this.userId}`).subscribe({
          next: (data) => {
            this.balance = data;
          },
          error: (err) => {
            console.error('Error fetching balance:', err);
          }
        });

        // Optionally fetch name from backend if not stored
        // this.userName = ...
      }

      logout() {
        localStorage.removeItem('userId');
        window.location.href = '/login';
      }

      deposit() {
        // handle deposit logic or navigate
      }

      withdraw() {
        // handle withdraw logic or navigate
      }

      transfer() {
        // handle transfer logic or navigate
      }
    }
