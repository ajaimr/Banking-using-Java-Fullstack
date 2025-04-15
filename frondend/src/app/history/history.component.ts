import { Component, OnInit } from '@angular/core';
import { Nav2Component } from "../nav2/nav2.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  imports: [Nav2Component],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  trans:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.fetchTransaction();
  }
  fetchTransaction() {
    this.http.get<any>('http://localhost:8080/api/accounts/transactions').subscribe({
      next:(value) =>{
        this.trans=value;
// console.log(value)          
},
    })
  }
}
