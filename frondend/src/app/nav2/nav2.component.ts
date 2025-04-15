import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav2',
  imports: [RouterLink],
  templateUrl: './nav2.component.html',
  styleUrl: './nav2.component.css'
})
export class Nav2Component {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userId'); // or 'token' if you're storing a token
    //this.router.navigate(['/']); 
    // navigate to login/home route
  }

}
